import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { configureDeepseek } from "../config/deepseek-config.js";
import fetch from "node-fetch"; 

export const genarateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { message } = req.body;

    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).json("User not Registered or Token malfunction");
    }

    // Prepare messages
    const chats = user.chats.map(({ role, content }) => ({ role, content }));
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // Configure DeepSeek
    const config = configureDeepseek();
    const response = await fetch(config.baseUrl, {
      method: "POST",
      headers: config.headers,
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: chats
      })
    });

    // ✅ Add response typing here
    const data = await response.json() as {
      choices: { message: { content: string } }[];
    };

    const completion = data?.choices?.[0]?.message?.content;
    if (!completion) {
      return res.status(500).json({ message: "Failed to get response from DeepSeek" });
    }

    // Save reply
    user.chats.push({ role: "assistant", content: completion });
    await user.save();

    return res.status(200).json({ chats: user.chats });

  } catch (error: any) {
    console.error("Chat Completion Error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

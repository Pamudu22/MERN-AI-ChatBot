export function configureDeepseek() {
  const apiKey = process.env.DEEPSEEK_SECRET;
  if (!apiKey) {
    throw new Error("Missing DEEPSEEK_SECRET in environment variables");
  }

  return {
    baseUrl: "https://api.deepseek.com/v1/chat/completions",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    }
  };
}

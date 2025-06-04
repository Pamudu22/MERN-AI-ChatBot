import { Router } from "express";
import { VerifyToken } from "../utils/token-manager.js";
import { ChatCompletionValidator, validate } from "../utils/validator.js";
import { genarateChatCompletion } from "../controllers/chat-controllers.js";
//protected api
const chatRoutes = Router();
chatRoutes.post("/new", validate(ChatCompletionValidator), VerifyToken, genarateChatCompletion);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map
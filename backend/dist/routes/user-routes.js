import { Router } from "express";
import { getAllUsers, userLogin, userSignup, verifyUser } from "../controllers/user-controller.js";
import { LoginValidator, signupValidator, validate } from "../utils/validator.js";
import { VerifyToken } from "../utils/token-manager.js";
const userRoutes = Router();
userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", validate(signupValidator), userSignup);
userRoutes.post("/login", validate(LoginValidator), userLogin);
userRoutes.get("/auth-status", VerifyToken, verifyUser);
export default userRoutes;
//# sourceMappingURL=user-routes.js.map
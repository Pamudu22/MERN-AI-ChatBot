import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

const LoginValidator = [
   
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
]
const signupValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").trim().isEmail().withMessage("Email is required"),
    body("password").trim().isLength({ min: 8 }).withMessage("Password must be at least 8 characters long"),
]
const ChatCompletionValidator = [
    body("message").notEmpty().withMessage("Message is required")
    
]

const validate = (validations:ValidationChain[])=>{
    return async (req:Request, res:Response, next:NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break
            }

        }

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        res.status(422).json({
            message: "Validation Error",
            errors: errors.array()
            })
}}

export { LoginValidator,signupValidator,ChatCompletionValidator, validate }; 

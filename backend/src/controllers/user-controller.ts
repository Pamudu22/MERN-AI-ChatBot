import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import {hash,compare} from "bcrypt";
import { CreateToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constant.js";

export const getAllUsers = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        const users = await User.find();
        return res.status(200).json({message:"OK",users});

    }catch(error){
        console.error("Error fetching users",error);
        return res.status(200).json({message:"Internal Server Error",cause: error.message});


}}

export const userSignup = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        //signup logic
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(401).json({message:"User already exists"});
        }
        const hashedPassword = await hash(password,10);
        const user = new User({name,email,password:hashedPassword});

        await user.save();

        //clear cookie
         res.clearCookie(COOKIE_NAME,{
                path:"/",
                httpOnly:true,
                signed:true,
                domain:"localhost",});
            //create token and set cookie
            const token = CreateToken(user._id.toString(),user.email, "7d");
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            res.cookie(COOKIE_NAME,token,
                {path:"/",
                    domain:"localhost",
                    expires:expires,
                    httpOnly:true,
                    signed:true,});
        return res.status(201).json({message:"OK",name:user.name , email: user.email});

    }catch(error){
        console.error("Error fetching users",error);
        return res.status(200).json({message:"Internal Server Error",cause: error.message});


}}


export const userLogin  = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        //Login logic
        const {email,password} = req.body;
        
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        const isPassswordCorrect = await compare(password,user.password);
        if (!isPassswordCorrect){
            return res.status(401).json({message:"Invalid Password"});
        }else{

            res.clearCookie(COOKIE_NAME,{
                path:"/",
                httpOnly:true,
                signed:true,
                domain:"localhost",});
            //create token
            const token = CreateToken(user._id.toString(),user.email, "7d");
            const expires = new Date();
            expires.setDate(expires.getDate() + 7);
            res.cookie(COOKIE_NAME,token,
                {path:"/",
                    domain:"localhost",
                    expires:expires,
                    httpOnly:true,
                    signed:true,});
            return res.status(200).json({message:"OK",name:user.name , email: user.email});
        }


        

    }catch(error){
        console.error("Error fetching users",error);
        return res.status(200).json({message:"Internal Server Error",cause: error.message});


}}
export const verifyUser  = async (
    req:Request,
    res:Response,
    next:NextFunction
) => {
    try{
        //Login logic
       
        
        const user = await User.findById(res.locals.jwtData.id);
        if(!user){
            return res.status(404).json({message:"User not Registered or Token malfunctioned"});
        }
     

        if(user._id.toString() !== res.locals.jwtData.id){
            return res.status(401).json({message: "Permission didn't match"})
        }
        
          
        return res.status(200).json({
            message:"OK",name:user.name , email: user.email
        });
        


        

    }catch(error){
        console.error("Error fetching users",error);
        return res.status(200).json({message:"Internal Server Error",cause: error.message});


}}
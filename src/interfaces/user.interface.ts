import { Request,Response,NextFunction } from "express";

export interface Users {
    uuid:string ,
    first_name:string|null,
    googleId:string|null,
    last_name:string |null,
    password:string|null,
    middle_name:string |null
    email:string|null ,
    phone_number:string |null,
    country:string |null,
    country_tag:string |null,
    verification_code:string |null,
    verification_expire_time:Date |null,
    role:string 
}

export interface Authentication {
    registerByEmail(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    emailVerification(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    registerByPhoneNumber(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    resendVerification(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    getAllUsers(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    login(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    editUserInfo(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
}
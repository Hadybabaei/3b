import { NextFunction, Response,Request } from "express";

export interface Child {
    id:number;
    fullname:string;
    birth_date:Date|null
    gender:string|null
    birth_weight:string|null
    birth_country:string|null
    birth_city:string|null
    birth_place:string|null
    hospital_name:string|null
    type_of_delivery:string|null
    multiple_birth:string|null
}

export interface ChildClass {
    createChild(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    editChild(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
    deleteChild(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
}
import { Request,Response,NextFunction } from "express";

export interface ParentChild {
    childId:number 
    parentId:number
    assignedBy:string
}

export interface ParentChildAssignment {
    assigningParentChilds(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
}
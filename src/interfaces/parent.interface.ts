import { NextFunction, Response,Request } from "express";

export interface ParentInterface {
  id: number;
  fullname: string;
  type_of_relationship: String;
  birth_date: Date|null;
  weight: string|null;
  birth_country: string|null;
  birth_city: string|null;
  height: string|null;
  education: string|null;
  work_or_not: boolean|null;
  planing_on_working: boolean|null;
  occupation: string|null;
  number_of_pregnancy: number|null;
  number_of_miscarriage: number|null;
  first_miscarriage_date: Date|null;
  second_miscarriage_date: Date|null;
  ever_smoked: boolean|null;
  is_smooking: boolean|null;
  smoking_quite: string|null;
  smoking_quite_date: Date|null;
  ever_drunk: boolean|null;
  is_drinking: boolean|null;
  drinking_quite: string|null;
  drinking_quite_date: Date|null;
  gender: string|null;
}
export interface ParentClass {
  createParent(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
  editParent(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
  deleteParent(req:Request,res:Response,next:NextFunction):Promise<Response|void>;
}
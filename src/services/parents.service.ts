import { ParentInterface } from "interfaces/parent.interface";
import prisma from "../utils/database/prismaclient";

class ParentService{
    private _parentModel = prisma.parents;

    public createParent = async (fullname:string,type_of_relationship:string):Promise<void|ParentInterface>=>{
        try{
            const newParent =   await this._parentModel.create({data:{
                fullname,
                type_of_relationship
            }})
            return newParent
        }catch(err){
            throw err
        }
    }
}
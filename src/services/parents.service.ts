import { ParentInterface } from "../interfaces/parent.interface";
import HttpExceptions from "../utils/exceptions/http.exceptions";
import prisma from "../utils/database/prismaclient";

class ParentService{
    private _parentModel = prisma.parents;

    public createParent = async (fullname:string,type_of_relationship:string,userId:string):Promise<void|ParentInterface>=>{
        try{
            const newParent =   await this._parentModel.create({data:{
                fullname,
                type_of_relationship,
                userId,
            }})
            return newParent
        }catch(err){
            throw err
        }
    }

    public editParent = async(parentData:ParentInterface):Promise<ParentInterface|void>=>{
        try{
            const parent = await this._parentModel.findFirst({where:{id:parentData.id}});
            if (!parent){
                throw new HttpExceptions(404,"Parent Not Found")
            }
            return await this._parentModel.update({
                where:{id:parentData.id},
                data:{
                    fullname:parentData.fullname,
                    type_of_relationship:parentData.fullname,
                    birth_date:parentData.birth_date,
                    birth_city:parentData.birth_city,
                    birth_country:parentData.birth_country,
                    number_of_miscarriage:parentData.number_of_miscarriage,
                    number_of_pregnancy:parentData.number_of_pregnancy,
                    is_drinking:parentData.is_drinking ,
                    ever_drunk:parentData.ever_drunk,
                    drinking_quite:parentData.drinking_quite,
                    drinking_quite_date:parentData.drinking_quite_date,
                    is_smooking:parentData.is_smooking ,
                    ever_smoked:parentData.ever_smoked,
                    smoking_quite:parentData.smoking_quite,
                    smoking_quite_date:parentData.smoking_quite_date,
                    second_miscarriage_date:parentData.second_miscarriage_date,
                    height:parentData.height,
                    work_or_not:parentData.work_or_not,
                    planing_on_working:parentData.planing_on_working,
                    occupation:parentData.occupation,
                    education:parentData.education,
                    first_miscarriage_date:parentData.first_miscarriage_date,
                    gender:parentData.gender,
                    weight:parentData.weight,
                },
            })
        }catch(err){
            throw err
        }
    }

    public deleteParent = async(id:number):Promise<void|ParentInterface>=>{
        try{
            const parent = await this._parentModel.findFirst({where:{id}});
            if (!parent){
                throw new HttpExceptions(404,"Parent Not Found")
            }
            return await this._parentModel.delete({where:{id}});
        }catch(err){
            throw err
        }
    }

}

export default ParentService
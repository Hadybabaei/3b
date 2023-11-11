import { Child } from "../interfaces/child.interface";
import prisma from "../utils/database/prismaclient";
import HttpExceptions from "../utils/exceptions/http.exceptions";
class ChildService {
  private _childModel = prisma.childs;

  public createChild = async (childData: Child) => {
    try {
      return await this._childModel.create({
        data: childData,
      });
    } catch (err) {
      throw err;
    }
  };

  public editChild = async (childData: Child) => {
    try {
      const user = await this._childModel.findFirst({
        where: { id: childData.id },
      });
      if (user) {
        return await this._childModel.update({
          where: { id: childData.id },
          data: {
            fullname: childData.fullname,
            birth_date: childData.birth_date,
            birth_city: childData.birth_city,
            birth_country: childData.birth_country,
            birth_place: childData.birth_place,
            birth_weight: childData.birth_weight,
            multiple_birth: childData.multiple_birth,
            type_of_delivery: childData.type_of_delivery,
            gender: childData.gender,
            hospital_name: childData.hospital_name,
          },
        });
      } else {
        throw new HttpExceptions(404, "Child Not Found");
      }
    } catch (err: any) {
      throw err;
    }
  };

  public deleteChild = async(id:number)=>{
    try{
        const child = await this._childModel.findFirst({
            where: { id },
        });
        if (child){
            return await this._childModel.delete({where:{id}});
        }else{
            throw new HttpExceptions(404,"Child Not Found")
        }

    }catch(err){
        console.log(err)
        throw err
    }
  }

  
}

export default ChildService;
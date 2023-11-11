import { NextFunction, Request, Response } from "express";
import ChildService from "../services/childs.service";
import { Router } from "express";
import isLogged from "../middlewares/authentication.middleware";
import validationMiddleware from "../middlewares/validation.middleware";
import childsDto from "../dto/childs.dto";

class ChildsController {
  private _childService = new ChildService();
  public router = Router();
  public path = "/child";

  constructor(){
    this.initializeRouter()
  }
  
  public initializeRouter = ()=>{
    this.router.post(this.path,isLogged,validationMiddleware(childsDto.createChild),this.createChild)
    this.router.put(this.path,isLogged,validationMiddleware(childsDto.editChild),this.editChild)
    this.router.delete(`${this.path}:id`,isLogged,this.deleteChild)
  }

  private createChild = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try{
        const newChild = await this._childService.createChild(req.body);
        res.status(201).json({Message:"New Child Created Successfuly",Success:true})
    }catch(err){
        return next(err)
    }
  };

  private editChild = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try{
        const newChild = await this._childService.editChild(req.body);
        res.status(201).json({Message:"Child Edited Successfuly",Success:true})
    }catch(err){
        return next(err)
    }
  };

  private deleteChild = async (req:Request,res:Response,next:NextFunction):Promise<Response|void>=>{
    try{
        const deleteChild = this._childService.deleteChild(Number(req.params.id));
        res.status(200).json({Message:"Child Deleted Successfuly"})
    }catch(err){
        return next(err)
    }
  }
}

export default ChildsController
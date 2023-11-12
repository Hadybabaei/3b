import { Request, Response, NextFunction, Router } from "express";
import ParentChildService from "../services/parentChild.service";
import { ParentChildAssignment } from "../interfaces/parentChild.interface";
import isLogged from "../middlewares/authentication.middleware";
import { Users } from "../interfaces/user.interface";
import validationMiddleware from "../middlewares/validation.middleware";
import parentChildDto from "../dto/parentChild.dto";

class parentChildController implements ParentChildAssignment {
  public path = "/assignment";
  public router = Router();
  private _parentChildService = new ParentChildService();

  initializeRouter = () => {
    this.router.post(this.path,isLogged,validationMiddleware(parentChildDto.createParentChild),this.assigningParentChilds);
  };

  async assigningParentChilds(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> {
    try {
        const {parentId,childId}= req.body;
        const userId = (req.user as Users).uuid
        const assignment = await this._parentChildService.assignParentOnChilds(parentId,childId,userId);
        res.status(201).json({Message:"Parent and Childs Created Successfuly",Success:true})
    } catch (err) {
      return next(err);
    }
  }
}

export default parentChildController
import parentsDto from "../dto/parents.dto";
import { Request, Response, NextFunction, Router } from "express";
import validationMiddleware from "../middlewares/validation.middleware";
import { ParentClass, ParentInterface } from "../interfaces/parent.interface";
import { Users } from "../interfaces/user.interface";
import isLogged from "../middlewares/authentication.middleware";
import ParentService from "../services/parents.service";

class ParentController implements ParentClass {
  public path = "/parent";
  public router = Router();
  private _parentService = new ParentService();

  constructor() {
    this.initializeRouter();
  }

  initializeRouter = () => {
    this.router.post(
      this.path,
      isLogged,
      validationMiddleware(parentsDto.createParent),
      this.createParent
    );
    this.router.put(
      this.path,
      isLogged,
      validationMiddleware(parentsDto.editParent),
      this.editParent
    );
    this.router.delete(`${this.path}/:id`, isLogged, this.deleteParent);
  };

  createParent = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> => {
    try {
      const { fullname, type_of_relationship } = req.body;

      const newParent = await this._parentService.createParent(
        fullname,
        type_of_relationship,
        (req.user as Users).uuid
      );
      res
        .status(201)
        .json({
          Message: "Parent Created Successfully",
          Success: true,
          parent: newParent,
        });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  };

  editParent = async(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> =>{
    try {
      const editedParent = await this._parentService.editParent(req.body);
      res
        .status(200)
        .json({ Message: "Parent Edited Successfully", Success: true });
    } catch (err) {
      return next(err);
    }
  }

  deleteParent= async(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void | Response> =>{
    try {
      const deletedParent = await this._parentService.deleteParent(
        Number(req.params.id)
      );
      res
        .status(200)
        .json({ Message: "Parent Deleted Successfuly", Success: true });
    } catch (err) {
      return next(err);
    }
  }
}

export default ParentController;

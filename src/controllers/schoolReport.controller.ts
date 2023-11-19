import { NextFunction, Router,Request,Response } from "express"
import SchoolReportService from "../services/schoolReport.service"

class SchoolReportController{
    public path = "/school"
    public router = Router()
    private _SchoolService = new SchoolReportService()

    constructor(){
        this.initializeRouter()
    }

    initializeRouter = ()=>{
        this.router.get(this.path,this.getSchoolReport)
    }

    public getSchoolReport = async(req:Request,res:Response,next:NextFunction)=>{
        try{
            const schoolData = await this._SchoolService.getSchoolReport();
            res.status(200).json({schoolData,Success:true})
        }catch(err){
            return next(err)
        }
    }
}

export default SchoolReportController
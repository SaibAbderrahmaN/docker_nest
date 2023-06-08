import { Controller, Get ,Res, Param,HttpStatus} from '@nestjs/common';
import { Admin } from './interface/admin.interface';
import { AdminService } from './admin.service';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService:AdminService){}
    


    @Get()
    getId(@Res() res:Response ,@Param("id")  id:String):String{
        return "id"
    }
    @Get("/all")
    getAll(@Res() res:Response):Promise <Admin []>{
        return this.adminService.listAdmins()
    }
    @Get("/:id")
    getOneById(@Res() res:Response, @Param("id") id:String){
        const admin =  this.adminService.getAdmin(id)
        res.status(HttpStatus.OK).json(admin)
    }
}



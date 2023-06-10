import { Body, Controller, HttpCode, Post, Res,Get } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from './Dto';
import { Admin } from './Schema/admin.Schema';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor(private adminService: AdminService){}

    @Post("/createAdmin")
    async AdminCreate(@Res() res:Response , @Body() data:AdminDto){
        const ADMIN = await this.adminService.CreateAdmin(data)
        res.status(200).json(ADMIN)

    }

    @Get('/all')
    async GetAllAdmins (@Res() res:Response){
        const data = await this.adminService.GetAll()
        res.status(200).json(data)
    }

    
}

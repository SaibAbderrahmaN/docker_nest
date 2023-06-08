import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminSchemas } from './shemas/admin.shemas';
import { Admin } from './interface/admin.interface';


@Injectable()
export class AdminService {
    constructor(@InjectModel("Admin") private adminModel: Model<Admin>) {}

    public async listAdmins():Promise <Admin[]>{
        const Admins = await this.adminModel.find()
        return Admins
    }
    public async getAdmin(id):Promise <Admin>{
        const Admin = await this.adminModel.findById(id)
        return Admin
    }
}

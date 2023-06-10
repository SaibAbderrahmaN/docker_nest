import { Injectable ,ForbiddenException} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admin } from './Schema/admin.Schema';
import * as argon from "argon2"
import { JwtService } from "@nestjs/jwt/dist";



@Injectable()
export class AdminService {
    constructor(
        @InjectModel("Admin") private AdminModel: Model<Admin> 
        ,private jwt :JwtService
       ) {}
    public async CreateAdmin (Data){
        try {
            const admin = await this.AdminModel.findOne({email:Data.email})
            if(admin){
                throw new ForbiddenException(
                    'Credentials taken',
                  );
            }else{
                Data.password = await argon.hash(Data.password);
                const Admin = await this.AdminModel.create(Data)
                const token =  await this.userSignin(Admin._id, Admin.email)
                return {Admin ,token}
            }
        } catch (error) {
            throw error
            
        }

    }


    public async GetAll(){
        try {
            const Admins = await this.AdminModel.find({})
            return Admins

        } catch (error) {
            return error
            
        }
    }
    async userSignin(userId:Object, email:String):Promise<object>{
        const payload = {
            sub : userId,
            email: email
        }

        const token = await this.jwt.sign(payload , {
            expiresIn:"1h"
            ,secret:process.env.JWT_SECRET
        })

        return {token}

    }



    

}

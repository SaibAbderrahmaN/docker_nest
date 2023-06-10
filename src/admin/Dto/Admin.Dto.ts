import { IsString, IsInt , IsEmail ,IsNotEmpty, isString} from 'class-validator';
import { isNumberObject } from 'util/types';


export class AdminDto{
    @IsEmail()
    @IsNotEmpty()
    email:String;
    @IsNotEmpty()
    @IsString()
    password:String;
    @IsNotEmpty()
    @IsString()
    firstname:String;
    @IsNotEmpty()
    @IsString()
    lastname:String;
    @IsNotEmpty()
    PhoneNumber:Number;
}
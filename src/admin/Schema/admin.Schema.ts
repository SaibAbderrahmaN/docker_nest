import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop({required:true})
  firstname: string;
  @Prop({required:true})
  lastname: string;
  @Prop({required:true})
  email: string;
  @Prop({required:true})
  PhoneNumber: number;
  @Prop()
  ZipCode: number;
  @Prop({  required: [true, "Please enter your password"],
  minLength: [4, "Password should be greater than 4 characters"],
  select: false,
})
  password: string;
  @Prop()
  avatar: string;
  @Prop({default:"Admin"})
  role:string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

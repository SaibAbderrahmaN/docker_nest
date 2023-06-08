import * as mongoose from 'mongoose';


export const AdminSchemas = new mongoose.Schema({
   firstname:String,
   lastname:String,
   email:String,
   password:String,
   createdAt:{type:Date , default: Date.now}
})
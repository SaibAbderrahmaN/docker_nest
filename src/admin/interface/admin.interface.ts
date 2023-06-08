export interface Admin extends Document{
   readonly firstname:String,
   readonly lastname:String,
   readonly email:String,
   readonly password:String,
   readonly createdAt:Date 
 }
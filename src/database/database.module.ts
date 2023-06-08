import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
    imports: [MongooseModule.forRoot('mongodb://abderrahman:localhost@172.31.0.2:27017/?authSource=admin')],
    providers:[],
    controllers:[]

})
export class DatabaseModule {}

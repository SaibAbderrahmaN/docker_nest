import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchemas } from './shemas/admin.shemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Admin", schema: AdminSchemas }])],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}

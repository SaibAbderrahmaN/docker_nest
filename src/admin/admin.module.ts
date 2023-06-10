import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminSchema } from './Schema/admin.Schema';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Strategy/admin.Strategy';
import { LoggerMiddleware } from './middelwar';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Admin", schema: AdminSchema }]) ,JwtModule.register({})],
  controllers: [AdminController],
  providers: [AdminService,JwtStrategy]
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({path:'admin',method:RequestMethod.POST});
  }
}

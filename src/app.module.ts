import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import RoleGuard from './auth/roles/roles.guard';


@Module({
  imports: [
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.MONGODB),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  AuthModule],
  controllers: [UsersController, AppController],
  providers: [UsersService]
})
export class AppModule {}

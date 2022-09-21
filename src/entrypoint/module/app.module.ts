import { Module } from '@nestjs/common';
import { UsersController } from '../http/users.controller';
import { UsersService } from '../../domain/usecase/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../../domain/entity/users/user.entity';
import { AuthModule } from './auth.module';
import { AppController } from '../http/app.controller';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ProfileController } from '../http/profile.controller';


@Module({
  imports: [
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.MONGODB),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  AuthModule],
  controllers: [UsersController, AppController, ProfileController],
  providers: [UsersService]
})
export class AppModule {}

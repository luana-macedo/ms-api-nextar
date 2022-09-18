import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './users/entities/user.entity';


@Module({
  imports: [ MongooseModule.forRoot('mongodb+srv://luana:7wLrpsfTYb2pWBvG@apicluster.ljfztv8.mongodb.net/?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],  
})
export class AppModule {}

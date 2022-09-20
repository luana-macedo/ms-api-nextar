import { ExecutionContext, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { use } from 'passport';
import { RequestWithUser } from 'src/auth/requestWithUser';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

   async create(createUserDto: CreateUserDto) {

    const user = await new this.userModel({
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)});
      
    return user.save();
  }
  

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  findEmail(email: string) {
    return this.userModel.findOne({email});
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        {
          $set: updateUserDto,
          password: await bcrypt.hash(updateUserDto.password, 10),
        },
        {
          new: true,
        },
      )
      .exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id }).exec();
  }


}

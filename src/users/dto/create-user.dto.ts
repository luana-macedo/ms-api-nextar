import { User } from '../entities/user.entity';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsEnum
  } from 'class-validator';
import { Permission } from '../entities/enums/permission.enum';
export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'password too weak',
    })
    password: string;

    @IsEmail()
    email: string;

    @IsEnum(Permission)
    permission: Permission[];
    @IsString()
    phone: string;
}


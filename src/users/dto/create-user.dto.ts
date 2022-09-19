import { User } from '../entities/user.entity';
import {
    IsEmail,
    IsString,
    Matches,
    MaxLength,
    MinLength,
    IsBoolean
  } from 'class-validator';
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
    @IsBoolean()
    permission: boolean;
    @IsString()
    phone: string;
}
function Column(arg0: { select: boolean; }) {
    throw new Error('Function not implemented.');
}


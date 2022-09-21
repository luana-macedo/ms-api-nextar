import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Permission } from 'src/domain/entity/users/enums/permission.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findEmail(email);
    if (!user) {
        throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
      }
      if (await bcrypt.compare(pass, user.password)) {
        const { password, ...result } = user;
      return result;
      } else {
        throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
      }
    }

  async login(user: any) {
    const param = user._doc
    const payload = { id: param._id, email: param.email, permissions: param.permissions[0] };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async refresh(token: string) {
    	const tokenDecode = await this.jwtService.verifyAsync(token);
        const payload = { email: tokenDecode.email };
        return {
        	payload: payload
        };
    }  
}
import { Controller, Get, Request, Post, UseGuards, Query, Patch, Body } from '@nestjs/common';
import { JwtAuthGuard} from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { UpdateUserDto } from './users/dto/update-user.dto';
import RoleGuard from './auth/roles/roles.guard';
import { Permission } from './users/entities/enums/permission.enum';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

 
}
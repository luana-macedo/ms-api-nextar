import { Controller, Get, Request, Post, UseGuards, Query, Patch, Body } from '@nestjs/common';
import { JwtAuthGuard} from '../../domain/usecase/jwt-auth.guard'
import { AuthService } from '../../domain/usecase/auth.service';
import { UsersService } from '../../domain/usecase/users.service';
import { UpdateUserDto } from '../../dataprovider/database/users/update-user.dto';


@Controller()
export class ProfileController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
   const userlog = await this.usersService.findEmail(req.user.email);
    return userlog;
  }
  @UseGuards(JwtAuthGuard)
  @Patch('profile/edit')
   async getProfileEdit(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    const userlog = await this.usersService.findEmail(req.user.email);
   return this.usersService.update(userlog._id, updateUserDto);
  }

 
}
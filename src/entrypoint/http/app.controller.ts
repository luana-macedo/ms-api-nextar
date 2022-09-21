import { Controller, Request, Post, UseGuards} from '@nestjs/common';
import { LocalAuthGuard } from '../../domain/usecase/local-auth.guard';
import { AuthService } from '../../domain/usecase/auth.service';
import { UsersService } from '../../domain/usecase/users.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

 
}
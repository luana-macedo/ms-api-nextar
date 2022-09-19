import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { Permission } from './entities/enums/permission.enum';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import RoleGuard from 'src/auth/roles/roles.guard';

@UseGuards(JwtAuthGuard)

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService) 
    {}
  

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Get('email')
  email() {
    return this.usersService.findEmail('luana.sobrenome@email.com')
    // return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(RoleGuard(Permission.Admin))
  @UseGuards(JwtAuthGuard)
  findAll() {   
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.usersService.findOne(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }


  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}

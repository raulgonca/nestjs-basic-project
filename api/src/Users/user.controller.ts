import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  createUser(@Body() { username, password }: { username: string; password: string[] }) {
    return this.UserService.createUser(username, password);
  }

  @Get()
  getAllUser() {
    return this.UserService.getAllUser();
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() props) {
    const propsUser = props.user
    const propsProfile = props.profile
    return this.usersService.create(propsUser, propsProfile);
  }

}

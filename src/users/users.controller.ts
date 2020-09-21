import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { JoiCreateUserPipe } from '../helpers/pipes/create-user.pipe';
import { createUserSchema } from './dto/create-user.schema';
import { CreateUserProfilesDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new JoiCreateUserPipe(createUserSchema))
  async create(@Body() props: CreateUserProfilesDto) {
    const propsUser = props.user
    const propsProfile = props.profile
    return this.usersService.create(propsUser, propsProfile);
  }

}

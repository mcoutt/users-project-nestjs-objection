import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { ProfilesService } from '../profiles/profiles.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ProfilesService]
})
export class UsersModule {}

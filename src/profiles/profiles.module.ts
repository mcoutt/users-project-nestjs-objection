import { Module } from '@nestjs/common';
import { ProfilesController } from './profiles.controller';
import { ProfilesService } from './profiles.service';
import { UsersService } from '../users/users.service';

@Module({
  controllers: [ProfilesController],
  providers: [ProfilesService, UsersService]
})
export class ProfilesModule {}

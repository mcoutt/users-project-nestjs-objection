import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { UsersService } from '../users/users.service';
import { ProfilesService } from '../profiles/profiles.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, UsersService, ProfilesService]
})
export class CommentsModule {}

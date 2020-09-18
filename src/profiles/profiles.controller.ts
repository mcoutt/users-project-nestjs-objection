import { Body, Controller, Post } from '@nestjs/common';
import { ProfilesModel } from '../database/models/profiles.model';
import { ProfilesService } from './profiles.service';

@Controller('profiles')
export class ProfilesController {
  constructor(private profilesService: ProfilesService) {}

  @Post()
  async create(@Body() props: Partial<ProfilesModel>) {
    return this.profilesService.create(props);
  }
}

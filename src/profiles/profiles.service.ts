import { Inject, Injectable } from '@nestjs/common';
import { ProfilesModel } from '../database/models/profiles.model';
import { ModelClass, transaction } from 'objection';


@Injectable()
export class ProfilesService {
  constructor(@Inject('ProfilesModel') private modelClass: ModelClass<ProfilesModel>) {
  }

  create(props: Partial<ProfilesModel>) {

    return this.modelClass
      .query()
      .insert(props)
      .returning('*');
  }
}

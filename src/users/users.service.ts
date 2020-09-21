import { Inject, Injectable } from '@nestjs/common';
import { ModelClass, transaction } from 'objection';
import { UsersModel } from '../database/models/users.model';
import { ProfilesService } from '../profiles/profiles.service';
import { ProfilesModel } from '../database/models/profiles.model';

@Injectable()
export class UsersService {
  constructor(private profilesService: ProfilesService, @Inject('UsersModel') private modelClass: ModelClass<UsersModel>,
              @Inject('ProfilesModel') private profilesClass: ModelClass<ProfilesModel>) {
  }

  findOne(user) {
    return this.modelClass
      .query()
      .whereExists(
        this.modelClass.relatedQuery('profiles').where('nickName', user)
      )
      .first()

  }

  create(propsUser, propsProfile) {
    return transaction(this.modelClass, async (_, trx) => {
      const exists = await this.findOne(propsProfile.nickName)
      if (exists.id) {
        return 'This user already exists'
      }

      const profile = await this.profilesService.create(propsProfile).transacting(trx)
      propsUser.profilesId = profile.id
      await this.modelClass
        .query()
        .insert(propsUser)
        .returning('*')
        .transacting(trx);
    })
  }
}

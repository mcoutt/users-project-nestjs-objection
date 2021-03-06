import { Inject, Injectable } from '@nestjs/common';
import { ModelClass, transaction } from 'objection';
import { UsersCommentsModel } from '../database/models/users-comments.model';
import { UsersService } from '../users/users.service';


@Injectable()
export class CommentsService {
  constructor(private userService: UsersService, @Inject('UsersCommentsModel') private modelClass: ModelClass<UsersCommentsModel>) {
  }

  create(propsUser, propsComment) {
    return transaction(this.modelClass, async (_, trx) => {

      const user = await this.userService.findOne(propsUser)
      const _user = user.toJSON()
      propsComment.usersId = Number(_user.id)
      propsComment.profilesId = Number(_user['profilesId'])

      await this.modelClass
        .query()
        .insert(propsComment)
        .returning('*')
        .transacting(trx);
    })
  }
}

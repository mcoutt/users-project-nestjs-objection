import { BaseModel } from './base.model';
import { Model } from 'objection';
import { UsersModel } from './users.model';


export class ProfilesModel extends BaseModel {

  static get tableName() {
    return 'profiles';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['nickName' ,'firstName', 'lastName'],

      properties: {
        id: { type: 'integer' },
        nickName: { type: 'string', minLength: 1, maxLength: 16 },
        firstName: { type: 'string', minLength: 1, maxLength: 16 },
        lastName: { type: 'string', minLength: 1, maxLength: 16 },
      }
    };
  }

  static get relationMappings() {

    const { UsersModel } = require('./users.model');
    const { UsersCommentsModel } = require('./users-comments.model');

    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: UsersModel,
        join: {
          from: 'profiles.id',
          to: 'users.profilesId'
        }
      },
      users_comments: {
        relation: Model.HasManyRelation,
        modelClass: UsersCommentsModel,
        join: {
          from: 'profiles.id',
          to: 'users_comments.profilesId'
        }
      }
    }
  }
}

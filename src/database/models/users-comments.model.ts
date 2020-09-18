import { BaseModel } from './base.model';
import { Model } from 'objection';


export class UsersCommentsModel extends BaseModel {
  private created_at: string;
  private updated_at: string;

  static get tableName() {
    return 'users_comments';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['comment'],

      properties: {
        id: { type: 'integer' },
        profilesId: { type: ['integer', 'null'] },
        usersId: { type: ['integer', 'null'] },
        comment: { type: 'text', minLength: 1, maxLength: 50 },
        createdAt: { type: 'timestamp' },
        updated_at: { type: 'timestamp' },
      },
    };
  }

  $beforeInsert() {
    this.created_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static get relationMappings() {

    const { ProfilesModel } = require('./profiles.model');
    const { UsersModel } = require('./users.model');

    return {
      profiles: {
        relation: Model.BelongsToOneRelation,
        modelClass: ProfilesModel,
        join: {
          from: 'profiles.id',
          to: 'users_comments.profilesId',
        },
      },
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: UsersModel,
        join: {
          from: 'users.id',
          to: 'users_comments.usersId',
        },
      },

    };
  }
}

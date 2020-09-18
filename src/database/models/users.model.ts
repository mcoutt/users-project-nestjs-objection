import { BaseModel } from './base.model';
import { Model } from 'objection';


export class UsersModel extends BaseModel {
  private created_at: string;
  private updated_at: string;
  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email'],

      properties: {
        id: { type: 'integer' },
        profilesId: { type: ['integer', 'null'] },
        email: { type: 'string', minLength: 1, maxLength: 50 },
        active: { type: 'boolean', default: true },
        ban: { type: 'boolean', default: false },
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

    return {
      profiles: {
        relation: Model.BelongsToOneRelation,
        modelClass: `${__dirname}/profiles.model`,
        join: {
          from: 'profiles.id',
          to: 'users.profilesId',
        },
      },
    };
  }
}

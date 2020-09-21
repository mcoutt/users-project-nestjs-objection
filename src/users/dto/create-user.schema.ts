import * as Joi from '@hapi/joi';

export const createUserSchema = Joi.object({
  "user": {
    "email": Joi.string().required()
  },
  "profile": {
    "nickName": Joi.string().required(),
    "firstName": Joi.string().required(),
    "lastName": Joi.string().required(),
  }
})

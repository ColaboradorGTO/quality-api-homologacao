import Joi from 'joi';

export const credSystemSchema = Joi.object({

  DADO: Joi.string().required()
    .messages({
      'string.base': 'DADO deve ser uma string',
      'any.required': 'DADO obrigatorio',
    }),

});

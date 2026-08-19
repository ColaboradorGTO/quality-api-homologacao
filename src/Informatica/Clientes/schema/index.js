import Joi from 'joi';

export const NomeSchema = Joi.object({

  DADO: Joi.string().required()
    .messages({
      'string.base': 'Dado deve ser uma string',
      'any.required': 'Dado obrigatorio',
    }),

});

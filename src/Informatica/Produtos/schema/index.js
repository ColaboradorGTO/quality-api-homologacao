import Joi from 'joi';

export const produtosSchema = Joi.object({

  DADO: Joi.string().required()
    .messages({
      'string.base': 'DADO deve ser uma string',
      'any.required': 'DADO obrigatorio',
    }),

});

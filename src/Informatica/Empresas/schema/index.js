import Joi from 'joi';

export const empresasSchema = Joi.object({

  DADOS: Joi.string().required()
    .messages({
      'string.base': 'DADOS deve ser uma string',
      'any.required': 'DADOS obrigatorio',
    }),
});

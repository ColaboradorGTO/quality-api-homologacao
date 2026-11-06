import Joi from "joi";

export const cadastroHashSchema = Joi.object({
  SENHAHASH: Joi.string().required().messages({
    "string.base": "HASH deve ser uma string",
    "any.required": "HASH é obrigatório"
  }),

  ID: Joi.number().required().messages({
    "number.base": "ID deve ser um número",
    "any.required": "ID é obrigatório"
  })

});





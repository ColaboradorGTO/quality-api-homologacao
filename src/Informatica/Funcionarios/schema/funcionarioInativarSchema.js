import Joi from "joi";

export const inativarFuncionarioSchema = Joi.object({
  DATAULTIMAALTERACAO: Joi.string().required().messages({
    "date.base": "DATAULTIMAALTERACAO deve ser uma string",
    "any.required": "DATAULTIMAALTERACAO é obrigatória"
  }),

  STATIVO: Joi.string().valid("False", "True").required().messages({
    "any.only": "STATIVO deve ser 'False' ou 'True'",
  }),

  DATA_DEMISSAO: Joi.string().allow('', null).messages({
    "string.base": "DATA_DEMISSAO deve ser uma string",
  }),

  ID: Joi.number().integer().required().messages({
    "number.base": "ID deve ser um número inteiro",
    "any.required": "ID é obrigatório"
  })
});

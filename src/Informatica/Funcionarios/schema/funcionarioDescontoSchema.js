import Joi from "joi";

export const funcionarioDescontoSchema = Joi.object({

  DTINICIODESC: Joi.string().required().messages({
    "date.base": "DTINICIODESC deve ser uma string",
    "any.required": "DTINICIODESC é obrigatória"
  }),

  DTFIMDESC: Joi.string().required().messages({
    "date.base": "DTFIMDESC deve ser uma string",
    "any.required": "DTFIMDESC é obrigatória"
  }),

  PERCDESCUSUAUTORIZADO: Joi.number().required().messages({
    "string.base": "PERCDESCUSUAUTORIZADO deve ser um número",
    "any.required": "PERCDESCUSUAUTORIZADO é obrigatória"
  }),

  MOTIVODESC: Joi.string().required().messages({
    "string.base": "MOTIVODESC deve ser uma string",
    "any.required": "MOTIVODESC é obrigatória"
  }),

  IDFUNCALTERACAO: Joi.number().required().messages({
    "string.base": "IDFUNCALTERACAO deve ser um número",
    "any.required": "IDFUNCALTERACAO é obrigatório"
  }),

  ID: Joi.number().required().messages({
    "number.base": "ID deve ser um número",
    "any.required": "ID é obrigatório"
  })
});





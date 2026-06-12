import Joi from "joi";

const updateFuncionarioSchema = Joi.object({

    ID: Joi.number().required()
        .messages({
            "number.base": "ID deve ser um número",
            "any.required": "O campo ID é obrigatório",
        }),

    IDFUNCIONARIO: Joi.number().messages({
        "number.base": "IDFUNCIONARIO deve ser um número",
        "any.required": "O campo IDFUNCIONARIO é obrigatório",
    }),

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA deve ser um número",
            "any.required": "O campo IDEMPRESA é obrigatório"
        }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            "number.base": "IDSUBGRUPOEMPRESARIAL deve ser um número",
            "any.required": "O campo IDSUBGRUPOEMPRESARIAL é obrigatório"
        }),

    IDFUNCIONARIOULTALTERACAO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIOULTALTERACAO deve ser um número",
            "any.required": "O campo IDFUNCIONARIOULTALTERACAO é obrigatório"
        }),

    NOLOGIN: Joi.string().required()
        .messages({
            "string.base": "NOLOGIN deve ser uma string",
            "any.required": "O campo NOLOGIN é obrigatório"
        }),

    PWSENHA: Joi.string().required()
        .messages({
            "string.base": "PWSENHA deve ser uma string",
            "any.required": "O campo PWSENHA é obrigatório"
        }),

})

export default updateFuncionarioSchema;

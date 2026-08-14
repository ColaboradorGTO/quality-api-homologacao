import Joi from "joi";

const criarAuthFuncionarioPrintVoucherSchema = Joi.object({

    MATRICULA: Joi.string().required()
        .messages({
            "number.base": "MATRICULA deve ser uma string",
            "any.required": "O campo MATRICULA é obrigatório",
        }),

    SENHA: Joi.string().messages({
        "number.base": "SENHA deve ser uma string",
        "any.required": "O campo SENHA é obrigatório",
    }),

    IDEMPRESALOGADA: Joi.number().messages({
        "number.base": "IDEMPRESALOGADA deve ser um número",
        "any.required": "O campo IDEMPRESALOGADA é obrigatório",
    }),

    IDGRUPOEMPRESARIAL: Joi.number().messages({
        "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
        "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório",
    }),

    IDVOUCHER: Joi.number().messages({
        "number.base": "IDVOUCHER deve ser um número",
        "any.required": "O campo IDVOUCHER é obrigatório",
    })

})

export default criarAuthFuncionarioPrintVoucherSchema;

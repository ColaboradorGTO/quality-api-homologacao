import Joi from "joi";

const autorizacaoEditarCriarVoucherSchema = Joi.object({

    MATRICULA: Joi.string().required()
        .messages({
            "number.base": "MATRICULA deve ser uma string",
            "any.required": "O campo MATRICULA é obrigatório",
        }),

    SENHA: Joi.string().messages({
        "number.base": "SENHA deve ser uma string",
        "any.required": "O campo SENHA é obrigatório",
    }),

    IDGRUPOEMPRESARIAL: Joi.number().messages({
        "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
        "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório",
    }),

    IDVENDA: Joi.string().messages({
        "number.base": "IDVENDA deve ser uma string",
        "any.required": "O campo IDVENDA é obrigatório",
    }),
    
    IDEMPRESALOGADA: Joi.number().messages({
        "number.base": "IDEMPRESALOGADA deve ser um número",
        "any.required": "O campo IDEMPRESALOGADA é obrigatório",
    }),

})

export default autorizacaoEditarCriarVoucherSchema;
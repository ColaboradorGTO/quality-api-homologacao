import Joi from "joi";

const autorizacaoEditarStatusVoucherSchema = Joi.object({

    MATRICULA: Joi.string().required()
        .messages({
            "number.base": "MATRICULA deve ser uma string",
            "any.required": "O campo MATRICULA é obrigatório",
        }),

    SENHA: Joi.string().messages({
        "number.base": "SENHA deve ser uma string",
        "any.required": "O campo SENHA é obrigatório",
    }),

})

export default autorizacaoEditarStatusVoucherSchema;

import Joi from "joi";

const atualizarResumoVoucherSchema = Joi.object({

    STATIVO: Joi.string().required()
        .messages({
            "number.base": "STATIVO deve ser uma string",
            "any.required": "O campo STATIVO é obrigatório",
        }),

    STCANCELADO: Joi.string().messages({
        "number.base": "STCANCELADO deve ser uma string",
        "any.required": "O campo STCANCELADO é obrigatório",
    }),

    DSMOTIVOTROCASTATUS: Joi.string().messages({
        "number.base": "DSMOTIVOTROCASTATUS deve ser uma string",
        "any.required": "O campo DSMOTIVOTROCASTATUS é obrigatório",
    }),

    IDFUNCIONARIO: Joi.number().messages({
        "number.base": "IDFUNCIONARIO deve ser um número",
        "any.required": "O campo IDFUNCIONARIO é obrigatório",
    }),

    STSTATUS: Joi.string().messages({
        "number.base": "STSTATUS deve ser uma string",
        "any.required": "O campo STSTATUS é obrigatório",
    }),

    IDVOUCHER: Joi.number().messages({
        "number.base": "IDVOUCHER deve ser um número",
        "any.required": "O campo IDVOUCHER é obrigatório",
    }),

    IDEMPRESALOGADA: Joi.number().messages({
        "number.base": "IDEMPRESALOGADA deve ser um número",
        "any.required": "O campo IDEMPRESALOGADA é obrigatório",
    }),

    IDGRUPOEMPRESARIAL: Joi.number().messages({
        "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
        "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório",
    }),

})

export default atualizarResumoVoucherSchema;

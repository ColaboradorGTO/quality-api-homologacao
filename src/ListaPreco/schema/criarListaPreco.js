import Joi from "joi";

const criarListaPrecoSchema = Joi.object({
    IDRESUMOLISTAPRECO: Joi.number().allow(null)
        .messages({
            "number.base": "IDRESUMOLISTAPRECO deve ser um numero"
        }),
    NOMELISTA: Joi.string()
        .messages({
            "string.base": "NOMELISTA deve ser uma string"
        }),
    IDUSERCRIACAO: Joi.number().allow(null)
        .messages({
            "number.base": "IDUSERCRIACAO deve ser um numero"
        }),
    IDUSERALTERACAO: Joi.number().allow(null)
        .messages({
            "number.base": "IDUSERALTERACAO deve ser um numero"
        }),
    STATIVO: Joi.string()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
    lojas: Joi.array().items(
        Joi.object({
            IDDETALHELISTAPRECO: Joi.number().allow(null)
            .messages({
                "number.base": "IDDETALHELISTAPRECO deve ser um numero"
            }),
            IDRESUMOLISTAPRECO: Joi.number().allow(null)
            .messages({
                "number.base": "IDRESUMOLISTAPRECO deve ser um numero"
            }),
            IDGRUPOEMPRESARIAL: Joi.number().allow(null)
            .messages({
                "number.base": "IDGRUPOEMPRESARIAL deve ser um numero"
            }),
            IDEMPRESA: Joi.number().allow(null)
            .messages({
                "number.base": "IDEMPRESA deve ser um numero"
            }),
            STATIVO: Joi.string()
            .messages({
                "string.base": "STATIVO deve ser uma string"
            }),

        })
    ).optional().default([])
});


export default criarListaPrecoSchema;
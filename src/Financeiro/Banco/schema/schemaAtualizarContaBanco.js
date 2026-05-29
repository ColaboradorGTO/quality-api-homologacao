import Joi from "joi";

const schemaAtualizarContaBanco = Joi.object({
    IDCONTABANCO: Joi.number().required()
        .messages({
            "any.required": "IDCONTABANCO é obrigatório",
            "number.base": "IDCONTABANCO  deve ser um numero"
        }),

    IDBANCO: Joi.number().required()
        .messages({
            "any.required": "IDBANCO é obrigatório",
            "number.base": "IDBANCO  deve ser um numero"
        }),

    DSCONTABANCO: Joi.string().required()
        .messages({
            "any.required": "DSCONTABANCO é obrigatório",
            "string.base": "DSCONTABANCO deve ser uma string"
        }),

    NUAGENCIA: Joi.string().required()
        .messages({
            "any.required": "NUAGENCIA é obrigatório",
            "string.base": "NUAGENCIA deve ser uma string"
        }),

    NUDIGITOAGENCIA: Joi.string().required()
        .messages({
            "any.required": "NUDIGITOAGENCIA é obrigatório",
            "string.base": "NUDIGITOAGENCIA deve ser uma string"
        }),

    NUCONTA: Joi.string().required()
        .messages({
            "any.required": "NUCONTA é obrigatório",
            "string.base": "NUCONTA deve ser uma string"
        }),
    NUDIGITOCONTA: Joi.string().required()
        .messages({
            "any.required": "NUDIGITOCONTA é obrigatório",
            "string.base": "NUDIGITOCONTA deve ser uma string"
        }),

    TPPESSOA: Joi.string().required()
        .messages({
            "any.required": "TPPESSOA é obrigatório",
            "string.base": "TPPESSOA deve ser uma string"
        }),

    STPADRAO: Joi.string().required()
        .messages({
            "any.required": "STPADRAO é obrigatório",
            "string.base": "STPADRAO deve ser uma string"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "any.required": "STATIVO é obrigatório",
            "string.base": "STATIVO deve ser uma string"
        }),

    NUCONTASAP: Joi.string().required()
        .messages({
            "any.required": "NUCONTASAP é obrigatório",
            "string.base": "NUCONTASAP deve ser uma string"
        }),

    TPCONTA: Joi.string().required()
        .messages({
            "any.required": "TPCONTA é obrigatório",
            "string.base": "TPCONTA deve ser uma string"
        }),

});


export default schemaAtualizarContaBanco;
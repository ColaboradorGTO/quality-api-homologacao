import Joi from "joi";

const ncmExcecaoItemSchema = Joi.object({

    NUNCM: Joi.number().required()
        .messages({
            "number.base": "NUNCM deve ser um número",
            "any.required": "O campo NUNCM é obrigatório",
        }),

    EX: Joi.string().allow("", null).max(2).messages({
        "string.base": "EX deve ser um texto",
        "string.max": "EX deve ter no máximo 2 caracteres"
    }),

    TIPO: Joi.number().required()
        .messages({
            "number.base": "TIPO deve ser um número",
            "any.required": "O campo TIPO é obrigatório"
        }),

    DSNCM: Joi.string().allow("", null)
        .messages({
            "string.base": "DSNCM deve ser um texto"
        }),

    IMPNACIONAL: Joi.number().required()
        .messages({
            "number.base": "IMPNACIONAL deve ser um número",
            "any.required": "O campo IMPNACIONAL é obrigatório"
        }),

    IMPIMPORTACAOFEDERAL: Joi.number().required()
        .messages({
            "number.base": "IMPIMPORTACAOFEDERAL deve ser um número",
            "any.required": "O campo IMPIMPORTACAOFEDERAL é obrigatório"
        }),

    IMPESTADUAL: Joi.number().required()
        .messages({
            "number.base": "IMPESTADUAL deve ser um número",
            "any.required": "O campo IMPESTADUAL é obrigatório"
        }),

    IMPMUNICIPAL: Joi.number().required()
        .messages({
            "number.base": "IMPMUNICIPAL deve ser um número",
            "any.required": "O campo IMPMUNICIPAL é obrigatório"
        }),

    DTINICIOVIGENCIA: Joi.string().required()
        .messages({
            "string.base": "DTINICIOVIGENCIA deve ser um texto",
            "any.required": "O campo DTINICIOVIGENCIA é obrigatório"
        }),

    DTFIMVIGENCIA: Joi.string().required()
        .messages({
            "string.base": "DTFIMVIGENCIA deve ser um texto",
            "any.required": "O campo DTFIMVIGENCIA é obrigatório"
        }),

    PWCHAVE: Joi.string().required().max(30)
        .messages({
            "string.base": "PWCHAVE deve ser um texto",
            "any.required": "O campo PWCHAVE é obrigatório",
            "string.max": "PWCHAVE deve ter no máximo 30 caracteres"
        }),

    NUVERSAO: Joi.string().required().max(30)
        .messages({
            "string.base": "NUVERSAO deve ser um texto",
            "any.required": "O campo NUVERSAO é obrigatório",
            "string.max": "NUVERSAO deve ter no máximo 30 caracteres"
        }),

    FONTE: Joi.string().required().max(30)
        .messages({
            "string.base": "FONTE deve ser um texto",
            "any.required": "O campo FONTE é obrigatório",
            "string.max": "FONTE deve ter no máximo 30 caracteres"
        }),

    SGUF: Joi.string().required().max(2)
        .messages({
            "string.base": "SGUF deve ser um texto",
            "any.required": "O campo SGUF é obrigatório",
            "string.max": "SGUF deve ter no máximo 2 caracteres"
        }),

    PERCIBPT: Joi.number().required()
        .messages({
            "number.base": "PERCIBPT deve ser um número",
            "any.required": "O campo PERCIBPT é obrigatório"
        }),
});

/* const createNcmExcecaoSchema = Joi.array()
    .items(ncmExcecaoItemSchema)
    .min(1)
    .required()
    .messages({
        "array.base": "O corpo da requisição deve ser uma lista (array)",
        "array.min": "A lista deve conter pelo menos um item",
        "any.required": "O corpo da requisição é obrigatório"
    }); */

export default ncmExcecaoItemSchema;
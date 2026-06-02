import Joi from "joi";

const createPremiacaoSchema = Joi.object({

    DTPREMIOINICIO: Joi.string().required()
        .messages({
            "string.base": "DTPREMIOINICIO must be a string",
            "any.required": "DTPREMIOINICIO is required field"
        }),

    DTPREMIOFIM: Joi.string().required()
        .messages({
            "string.base": "DTPREMIOFIM must be a string",
            "any.required": "DTPREMIOFIM is required field"
        }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            "number.base": "IDSUBGRUPOEMPRESARIAL must be a number",
            "any.required": "IDSUBGRUPOEMPRESARIAL is required field"
        }),

    NOFUNCAO: Joi.string().required()
        .messages({
            "string.base": "IDSUBGRUPOEMPRESARIAL must be a string",
            "any.required": "IDSUBGRUPOEMPRESARIAL is required field"
        }),

    NOINDICADOR: Joi.string().required()
        .messages({
            "string.base": "NOINDICADOR must be a string",
            "any.required": "NOINDICADOR is required field"
        }),

    TPAPURACAO: Joi.string().required()
        .messages({
            "string.base": "TPAPURACAO must be a string",
            "any.required": "TPAPURACAO is required field"
        }),
    VRBONUSSENIOR: Joi.number().required()
        .messages({
            "number.base": "VRBONUSSENIOR must be a number",
            "any.required": "VRBONUSSENIOR is required field"
        }),
    VRBONUSPLENO: Joi.number().required()
        .messages({
            "number.base": "VRBONUSPLENO must be a number",
            "any.required": "VRBONUSPLENO is required field"
        }),
    VRBONUSJUNIOR: Joi.number().required()
        .messages({
            "number.base": "VRBONUSJUNIOR must be a number",
            "any.required": "VRBONUSJUNIOR is required field"
        }),
    VRBONUSTODOS: Joi.number().required()
        .messages({
            "number.base": "VRBONUSTODOS must be a number",
            "any.required": "VRBONUSTODOS is required field"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),
});

export default createPremiacaoSchema;
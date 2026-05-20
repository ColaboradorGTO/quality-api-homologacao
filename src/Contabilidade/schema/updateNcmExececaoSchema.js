import Joi from "joi";

const updateNcmExececaoSchema = Joi.object({

    NUNCM: Joi.number().required()
        .messages({
            "number.base": "NUNCM must be a number",
            "any.required": "NUNCM is required field",
        }),

    EX: Joi.string().allow("", null)
        .messages({
            "string.base": "EX must be a string"
        }),

    TIPO: Joi.number().required()
        .messages({
            "number.base": "TIPO must be a number",
            "any.required": "TIPO is required field"
        }),

    DSNCM: Joi.string().allow("", null)
        .messages({
            "string.base": "DSNCM must be a string"
        }),

    IMPNACIONAL: Joi.number().required()
        .messages({
            "number.base": "IMPNACIONAL must be a number",
            "any.required": "IMPNACIONAL is required field"
        }),

    IMPIMPORTACAOFEDERAL: Joi.number().required()
        .messages({
            "number.base": "IMPIMPORTACAOFEDERAL must be a number",
            "any.required": "IMPIMPORTACAOFEDERAL is required field"
        }),

    IMPESTADUAL: Joi.number().required()
        .messages({
            "number.base": "IMPESTADUAL must be a number",
            "any.required": "IMPESTADUAL is required field"
        }),

    IMPMUNICIPAL: Joi.number().required()
        .messages({
            "number.base": "IMPMUNICIPAL must be a number",
            "any.required": "IMPMUNICIPAL is required field"
        }),

    DTINICIOVIGENCIA: Joi.string().required()
        .messages({
            "string.base": "DTINICIOVIGENCIA must be a string",
            "any.required": "DTINICIOVIGENCIA is required field"
        }),

    DTFIMVIGENCIA: Joi.string().required()
        .messages({
            "string.base": "DTFIMVIGENCIA must be a string",
            "any.required": "DTFIMVIGENCIA is required field"
        }),

    PWCHAVE: Joi.string().required()
        .messages({
            "string.base": "PWCHAVE must be a string",
            "any.required": "PWCHAVE is required field"
        }),

    NUVERSAO: Joi.string().required()
        .messages({
            "string.base": "NUVERSAO must be a string",
            "any.required": "NUVERSAO is required field"
        }),

    FONTE: Joi.string().required()
        .messages({
            "string.base": "FONTE must be a string",
            "any.required": "FONTE is required field"
        }),

    SGUF: Joi.string().required()
        .messages({
            "string.base": "SGUF must be a string",
            "any.required": "SGUF is required field"
        }),

    PERCIBPT: Joi.number().required()
        .messages({
            "number.base": "PERCIBPT must be a number",
            "any.required": "PERCIBPT is required field"
        }),

    IDNCMEXCECAO: Joi.number().required()
        .messages({
            "number.base": "IDNCMEXCECAO must be a number",
            "any.required": "IDNCMEXCECAO is required field"
        })

});


export default updateNcmExececaoSchema;
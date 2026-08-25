import Joi from "joi";

const createDespesaLojaSchema = Joi.object({
    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA must be a number",
            "any.required": "IDEMPRESA is required field"
        }),

    IDUSR: Joi.number().required()
        .messages({
            "number.base": "IDUSR must be a number",
            "any.required": "IDUSR is required field"
        }),

    DTDESPESA: Joi.string().required()
        .messages({
            "string.base": "DTDESPESA must be a string",
            "any.required": "DTDESPESA is required field"
        }),

    IDCATEGORIARECEITADESPESA: Joi.number().required()
        .messages({
            "number.base": "IDCATEGORIARECEITADESPESA must be a number",
            "any.required": "IDCATEGORIARECEITADESPESA is required field"
        }),

    DSHISTORIO: Joi.string().required()
        .messages({
            "string.base": "DSHISTORIO must be a string",
            "any.required": "DSHISTORIO is required field"
        }),

    DSPAGOA: Joi.string().allow("").optional()
        .messages({
            "string.base": "DSPAGOA must be a string"
        }),

    IDFUNCIONARIO: Joi.number().allow(null).optional()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number"
        }),

    TPNOTA: Joi.string().allow("").optional()
        .messages({
            "string.base": "TPNOTA must be a string"
        }),

    NUNOTAFISCAL: Joi.alternatives().try(
        Joi.string().allow(""),
        Joi.number()
    ).optional(),

    VRDESPESA: Joi.number().optional()
        .messages({
            "number.base": "VRDESPESA must be a number"
        }),

    STATIVO: Joi.string().allow("").optional()
        .messages({
            "string.base": "STATIVO must be a string"
        }),

    STCANCELADO: Joi.string().allow("").optional()
        .messages({
            "string.base": "STCANCELADO must be a string"
        }),
});

export default createDespesaLojaSchema;

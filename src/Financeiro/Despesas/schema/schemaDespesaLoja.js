import Joi from "joi";

const schemaDespesaLoja = Joi.object({
    IDCATEGORIARECEITADESPESA: Joi.number().required()
        .messages({
            "any.required": "IDCATEGORIARECEITADESPESA é obrigatório",
            "number.base": "IDCATEGORIARECEITADESPESA  deve ser um número"
        }),

    IDDESPESASLOJA: Joi.number().required()
        .messages({
            "any.required": "IDDESPESASLOJA é obrigatório",
            "number.base": "IDDESPESASLOJA  deve ser um número"
        }),

    VRDESPESA: Joi.number().required()
        .messages({
            "any.required": "VRDESPESA é obrigatório",
            "number.base": "VRDESPESA  deve ser um número"
        }),

    DSPAGOA: Joi.string().required()
        .messages({
            "any.required": "DSPAGOA é obrigatório",
            "string.base": "DSPAGOA  deve ser uma string"
        }),

    DSHISTORIO: Joi.string().allow("").optional()
        .messages({
            "string.base": "DSHISTORIO  deve ser uma string"
        }),

    TPNOTA: Joi.string().required()
        .messages({
            "any.required": "TPNOTA é obrigatório",
            "string.base": "TPNOTA  deve ser uma string"
        }),

    NUNOTAFISCAL: Joi.string().allow("").optional()
        .messages({
            "string.base": "NUNOTAFISCAL  deve ser uma string"
        }),

    IDUSRCACELAMENTO: Joi.number().allow("").optional()
        .messages({
            "string.base": "IDUSRCACELAMENTO  deve ser uma string"
        }),

    DSMOTIVOCANCELAMENTO: Joi.string().allow("").optional()
        .messages({
            "string.base": "DSMOTIVOCANCELAMENTO deve ser uma string"
        }),

});


export default schemaDespesaLoja;
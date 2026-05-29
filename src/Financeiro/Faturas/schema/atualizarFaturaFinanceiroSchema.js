import Joi from "joi";

const schemaAtualizarFaturaFinanceiro = Joi.object({
    NUCODAUTORIZACAO: Joi.string().required()
        .messages({
            "any.required": "NUCODAUTORIZACAO é obrigatório",
            "string.base": "NUCODAUTORIZACAO  deve ser uma string"
        }),

    VRRECEBIDO: Joi.number().required()
        .messages({
            "any.required": "VRRECEBIDO é obrigatório",
            "number.base": "VRRECEBIDO  deve ser uma numero"
        }),

    STCANCELADO: Joi.string().required()
        .messages({
            "any.required": "STCANCELADO é obrigatório",
            "string.base": "STCANCELADO  deve ser uma string"
        }),

    STPIX: Joi.string().required()
        .messages({
            "any.required": "STPIX é obrigatório",
            "string.base": "STPIX  deve ser uma string"
        }),

    NUAUTORIZACAO: Joi.string().required()
        .messages({
            "any.required": "NUAUTORIZACAO é obrigatório",
            "string.base": "NUAUTORIZACAO  deve ser uma string"
        }),

    IDDETALHEFATURA: Joi.number().required()
        .messages({
            "any.required": "IDDETALHEFATURA é obrigatório",
            "number.base": "IDDETALHEFATURA  deve ser um numero"
        }),

});

export default schemaAtualizarFaturaFinanceiro;
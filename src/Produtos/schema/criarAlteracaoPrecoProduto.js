import Joi from "joi";

const schemaCriarAlteracaoPrecoProduto = Joi.object({
    IDPRODUTO: Joi.number().required()
    .messages({
        "any.required": "IDPRODUTO é obrigatório",
        "number.base": "IDPRODUTO  deve ser um number"
    }),
    IDEMPRESA: Joi.number().required()
    .messages({
        "any.required": "IDEMPRESA é obrigatório",
        "number.base": "IDEMPRESA  deve ser um number"
    }),
    IDLISTAPRECO: Joi.number().optional().allow(null)
    .messages({
        "any.required": "IDLISTAPRECO é obrigatório",
        "number.base": "IDLISTAPRECO  deve ser um number"
    }),
    PRECOVENDAANTIGO: Joi.number().optional().allow(null)
    .messages({
        "number.base": "PRECOVENDAANTIGO  deve ser um number"
    }),
    PRECOVENDANOVO: Joi.number().optional().allow(null)
    .messages({
        "number.base": "PRECOVENDANOVO  deve ser um number"
    }),
    IDUSER: Joi.number().optional().allow(null)
    .messages({
        "number.base": "IDUSER deve ser um number"
    }),
    STAGENDAMENTOPADRAO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('')
    .messages({
        "string.base": "STAGENDAMENTOPADRAO deve ser uma string"
    }),
    STAGENDAMENTOIMEDIATO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('')
    .messages({
        "string.base": "STAGENDAMENTOIMEDIATO deve ser uma string"
    }),
    STAGENDAMENTOPERSONALIZADO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('')
    .messages({
        "string.base": "STAGENDAMENTOPERSONALIZADO deve ser uma string"
    }),
    DTAGENDAMENTOPERSONALIZADO: Joi.string().allow('')
    .messages({
        "string.base": "DTAGENDAMENTOPERSONALIZADO deve ser uma string"
    }),
});


export default schemaCriarAlteracaoPrecoProduto;

import Joi from "joi";

const schemaCriarAdiantamentoDepartamento = Joi.object({
    DEPARTAMENTO: Joi.string().required()
        .messages({
            "any.required": "DEPARTAMENTO é obrigatório",
            "number.base": "DEPARTAMENTO  deve ser uma string"
        }),
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA deve ser uma número"
        }),

    NUCNPJEMPRESA: Joi.string().required()
        .messages({
            "any.required": "NUCNPJEMPRESA é obrigatório",
            "string.base": "NUCNPJEMPRESA  deve ser uma string"
        }),
    POSSUINOTAFISCAL: Joi.string().required()
        .messages({
            "any.required": "POSSUINOTAFISCAL é obrigatório",
            "string.base": "POSSUINOTAFISCAL  deve ser uma string"
        }),
    CNPJFATURAMENTO: Joi.string().required()
        .messages({
            "any.required": "CNPJFATURAMENTO é obrigatório",
            "string.base": "CNPJFATURAMENTO  deve ser uma string"
        }),
    VRSOLICITADO: Joi.number().required()
        .messages({
            "any.required": "VRSOLICITADO é obrigatório",
            "number.base": "VRSOLICITADO  deve ser um número"
        }),
    DESCRICAO: Joi.string().allow('')
        .messages({
            "string.base": "DESCRICAO  deve ser uma string"
        }),
    ANEXOORCAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "ANEXOORCAMENTO  deve ser uma string"
        }),
    ANEXONOTAFISCAL: Joi.string().allow('')
        .messages({
            "string.base": "ANEXONOTAFISCAL  deve ser uma string"
        }),
    RAZAOSOCIALFATURAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "RAZAOSOCIALFATURAMENTO  deve ser uma string"
        }),
    DSJUSTIFICATIVA: Joi.string().allow('')
        .messages({
            "string.base": "DSJUSTIFICATIVA  deve ser uma string"
        }),
    IDUSUARIOCRIACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSUARIOCRIACAO é obrigatório",
            "number.base": "IDUSUARIOCRIACAO  deve ser um número"
        }),

});


export default schemaCriarAdiantamentoDepartamento;


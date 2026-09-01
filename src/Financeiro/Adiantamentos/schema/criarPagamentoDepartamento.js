import Joi from "joi";

const schemaCriarPagamentoDepartamento = Joi.object({
    IDADIANTAMENTO: Joi.number().required()
        .messages({
            "any.required": "IDADIANTAMENTO é obrigatório",
            "number.base": "IDADIANTAMENTO deve ser uma número"
        }),

    VLPAGAMENTO: Joi.number().required()
        .messages({
            "any.required": "VLPAGAMENTO é obrigatório",
            "number.base": "VLPAGAMENTO  deve ser um número"
        }),
    DATAPAGAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "DATAPAGAMENTO  deve ser uma string"
        }),
    FORMAPAGAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "FORMAPAGAMENTO  deve ser uma string"
        }),
    ANEXOCOMPROVANTE: Joi.string().allow('')
        .messages({
            "string.base": "ANEXOCOMPROVANTE  deve ser uma string"
        }),
    DSOBSERVACAO: Joi.string().allow('')
        .messages({
            "string.base": "DSOBSERVACAO  deve ser uma string"
        }),
    STATUS: Joi.string().allow('')
        .messages({
            "string.base": "STATUS  deve ser uma string"
        }),
    IDUSUARIOCRIACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSUARIOCRIACAO é obrigatório",
            "number.base": "IDUSUARIOCRIACAO  deve ser um número"
        }),

});


export default schemaCriarPagamentoDepartamento;


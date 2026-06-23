import Joi from 'joi';

export const createProdutoPromocaoSchema = Joi.object({

    DSPROMO: Joi.string().required()
        .messages({
            'string.base': 'DSPROMO deve ser uma string',
            'any.required': 'DSPROMO é obrigatório',
        }),

    VRPERCDESCONTO: Joi.number().required()
        .messages({
            'number.base': 'VRPERCDESCONTO deve ser um número',
            'any.required': 'VRPERCDESCONTO é obrigatório',
        }),

    VRPRECODESCONTO: Joi.number().required()
        .messages({
            'number.base': 'VRPRECODESCONTO deve ser um número',
            'any.required': 'VRPRECODESCONTO é obrigatório',
        }),

    VRAPARTIRDE: Joi.number().required()
        .messages({
            'number.base': 'VRAPARTIRDE deve ser um número',
            'any.required': 'VRAPARTIRDE é obrigatório',
        }),

    VRLIMITEDE: Joi.number().required()
        .messages({
            'number.base': 'VRLIMITEDE deve ser um número',
            'any.required': 'VRLIMITEDE é obrigatório',
        }),

    QTDAPARTIRDE: Joi.string().required()
        .messages({
            'string.base': 'QTDAPARTIRDE deve ser um número',
            'any.required': 'QTDAPARTIRDE é obrigatório',
        }),

    QTDLIMITEDE: Joi.string().required()
        .messages({
            'string.base': 'QTDLIMITEDE deve ser um número',
            'any.required': 'QTDLIMITEDE é obrigatório',
        }),

    DTINICIOPROMO: Joi.string().required()
        .messages({
            'string.base': 'DTINICIOPROMO deve ser uma string',
            'any.required': 'DTINICIOPROMO é obrigatório',
        }),

    DTFIMPROMO: Joi.string().required()
        .messages({
            'string.base': 'DTFIMPROMO deve ser uma string',
            'any.required': 'DTFIMPROMO é obrigatório',
        }),

    STATIVO: Joi.string().required()
        .messages({
            'string.base': 'STATIVO deve ser uma string',
            'any.required': 'STATIVO é obrigatório',
        }),

    IDGRUPO: Joi.number().required()
        .messages({
            'number.base': 'IDGRUPO deve ser um número',
            'any.required': 'IDGRUPO é obrigatório',
        }),

    PRODUTOS: Joi.array().required()
        .messages({
            'string.base': 'PRODUTOS deve ser uma array',
            'any.required': 'PRODUTOS é obrigatório',
        }),

    EMPRESAS: Joi.array().required()
        .messages({
            'string.base': 'EMPRESAS deve ser uma array',
            'any.required': 'EMPRESAS é obrigatório',
        }),

});
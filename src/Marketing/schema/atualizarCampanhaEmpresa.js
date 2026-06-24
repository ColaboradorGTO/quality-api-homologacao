import Joi from 'joi';

export const atualizarProdutoEmpresaSchema = Joi.object({

    DSCAMPANHA: Joi.string().required()
        .messages({
            'string.base': 'DSCAMPANHA deve ser uma string',
            'any.required': 'DSCAMPANHA é obrigatório',
        }),

    IDOPERADOR: Joi.number().required()
        .messages({
            'number.base': 'IDOPERADOR deve ser um número',
            'any.required': 'IDOPERADOR é obrigatório',
        }),

    DTINICIO: Joi.string().required()
        .messages({
            'string.base': 'DTINICIO deve ser uma string',
            'any.required': 'DTINICIO é obrigatório',
        }),

    DTFINAL: Joi.string().required()
        .messages({
            'string.base': 'DTFINAL deve ser uma string',
            'any.required': 'DTFINAL é obrigatório',
        }),

    VRPERCDESCONTO: Joi.number().required()
        .messages({
            'number.base': 'VRPERCDESCONTO deve ser um número',
            'any.required': 'VRPERCDESCONTO é obrigatório',
        }),
});
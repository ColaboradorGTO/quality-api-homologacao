import Joi from 'joi';

const criarImagemProdutoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número',
        'any.required': 'IDRESUMOPEDIDO é obrigatório'
    }),
    NUREF: Joi.string().allow('')
    .messages({
        'string.base': 'NUREF deve ser uma string',
        'string.max': 'NUREF deve ter no máximo 10 caracteres'
    }),
    IMAGEM: Joi.string().allow('')
    .messages({
        'string.base': 'IMAGEM deve ser uma string',
        'string.max': 'IMAGEM deve ter no máximo 10 caracteres'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
    IDPRODIMAGEM: Joi.array().items(
        Joi.object({
            IDProduto: Joi.string().allow('').optional(),
            IDSubEstrutProduto: Joi.number().allow(null).optional(),
            IDFabProduto: Joi.number().allow(null).optional(),
            IDForProduto: Joi.number().allow(null).optional(),
        })
    ).optional().default([])
    .messages({
        'array.base': 'GRADE deve ser um array de objetos',
        'any.required': 'GRADE é obrigatório'
    }),
});

export default criarImagemProdutoSchema;
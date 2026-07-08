import Joi from 'joi';

const criarCategoriaPedidosSchema = Joi.object({
    DSCATEGORIAPEDIDO: Joi.string().allow('')
    .messages({
        'string.base': 'DSCATEGORIAPEDIDO deve ser uma string'
    }),
    TIPOPEDIDO: Joi.string().allow('')
    .messages({
        'string.base': 'TIPOPEDIDO deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default criarCategoriaPedidosSchema;
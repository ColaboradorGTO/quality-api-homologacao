import Joi from 'joi';

const atualizarCategoriaPedidosSchema = Joi.object({
    IDCATEGORIAPEDIDO: Joi.string().allow('')
    .messages({
        'string.base': 'IDCATEGORIAPEDIDO deve ser uma string',
    }),
    DSCATEGORIAPEDIDO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'DSCATEGORIAPEDIDO deve ser uma string',
        'string.max': 'DSCATEGORIAPEDIDO deve ter no máximo 500 caracteres'
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

export default atualizarCategoriaPedidosSchema;
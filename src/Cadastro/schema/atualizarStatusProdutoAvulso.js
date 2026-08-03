import Joi from 'joi';

const atualizarStatusProdutoAvulsoSchema = Joi.object({
    IDDETALHEPRODUTOPEDIDO: Joi.number()
    .messages({
        'number.base': 'IDDETALHEPRODUTOPEDIDO deve ser um número',
    }),
    IDRESPCANCELAMENTO: Joi.number()
    .messages({
        'number.base': 'IDRESPCANCELAMENTO deve ser um número',
    }),
    DSMOTIVOCANCELAMENTO: Joi.string().allow('')
    .messages({
        'string.base': 'DSMOTIVOCANCELAMENTO deve ser uma string'
    }),
    DTCANCELAMENTO: Joi.string().allow('')
    .messages({
        'string.base': 'DTCANCELAMENTO deve ser uma string',
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarStatusProdutoAvulsoSchema;
import Joi from 'joi';

const cancelarPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
        'any.required': 'ID do resumo do pedido é obrigatório'
    }),
    IDANDAMENTO: Joi.number().integer()
    .messages({
        'number.base': 'IDANDAMENTO deve ser um número inteiro',
    }),
    IDRESPCANCELAMENTO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESPCANCELAMENTO deve ser um número inteiro',
        'any.required': 'ID do responsável pelo cancelamento é obrigatório'
    }),
    DSMOTIVOCANCELAMENTO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'DSMOTIVOCANCELAMENTO deve ser uma string',
        'string.max': 'DSMOTIVOCANCELAMENTO deve ter no máximo 500 caracteres'
    }),
    
    DTCANCELAMENTO: Joi.string().allow('').max(100).optional()
    .messages({
        'string.base': 'DTCANCELAMENTO deve ser uma string',
        'string.max': 'DTCANCELAMENTO deve ter no máximo 100 caracteres'
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),

});

export default cancelarPedidoSchema;
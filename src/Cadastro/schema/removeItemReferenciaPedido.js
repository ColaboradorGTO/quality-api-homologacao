import Joi from 'joi';

const removeItemReferenciaPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número',
    }),
    IDDETALHEPEDIDO: Joi.number()
    .messages({
        'number.base': 'IDDETALHEPEDIDO deve ser um número',
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),
    IDRESPCANCELAMENTO: Joi.number()
    .messages({
        'number.base': 'IDRESPCANCELAMENTO deve ser um número',
    }),
    TXTOBSCANCELAMENTO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TXTOBSCANCELAMENTO deve ser uma string'
    }),
    STPEDIDOPRIMARIO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'STPEDIDOPRIMARIO deve ser uma string'
    }),
});

export default removeItemReferenciaPedidoSchema;
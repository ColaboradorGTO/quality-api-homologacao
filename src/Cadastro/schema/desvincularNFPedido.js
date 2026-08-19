import Joi from 'joi';

const desvincularNFPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número',
    }),
    IDRESUMOENTRADA: Joi.number()
    .messages({
        'number.base': 'IDRESUMOENTRADA deve ser um número',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default desvincularNFPedidoSchema;
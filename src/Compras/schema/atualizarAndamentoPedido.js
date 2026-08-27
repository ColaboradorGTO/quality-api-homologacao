import Joi from 'joi';

const atualizarAndamentoPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
        'any.required': 'ID do resumo do pedido é obrigatório'
    }),
    IDANDAMENTO: Joi.number().integer()
    .messages({
        'number.base': 'IDANDAMENTO deve ser um número inteiro',
    }),
    TXTOBSDEVPEDIDO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TXTOBSDEVPEDIDO deve ser uma string',
    }),

});

export default atualizarAndamentoPedidoSchema;
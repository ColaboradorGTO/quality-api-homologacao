import Joi from 'joi';

const reativarPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
        'any.required': 'ID do resumo do pedido é obrigatório'
    }),
    IDRESPREATIVACAO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESPREATIVACAO deve ser um número inteiro',
        'any.required': 'ID do responsável pela reativação é obrigatório'
    }),
    TXTMOTIVOREATIVACAO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'TXTMOTIVOREATIVACAO deve ser uma string',
        'string.max': 'TXTMOTIVOREATIVACAO deve ter no máximo 500 caracteres'
    })
});

export default reativarPedidoSchema;
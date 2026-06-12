import Joi from 'joi';

const atualizarFornecedorSchema = Joi.object({
    IDDETALHEPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDDETALHEPEDIDO deve ser um número inteiro',
        'any.required': 'ID do detalhe do pedido é obrigatório'
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),
    IDRESPCANCELAMENTO: Joi.number().integer()
    .messages({
        'number.base': 'IDRESPCANCELAMENTO deve ser um número inteiro'
    }),
    TXTOBSCANCELAMENTO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'TXTOBSCANCELAMENTO deve ser uma string',
        'string.max': 'TXTOBSCANCELAMENTO deve ter no máximo 500 caracteres'
    }),
    IDRESUMOPEDIDO: Joi.number().integer()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
    })
});

export default atualizarFornecedorSchema;
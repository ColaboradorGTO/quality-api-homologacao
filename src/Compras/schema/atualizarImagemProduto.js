import Joi from 'joi';

const atualizarImagemProdutoSchema = Joi.object({
    IDIMAGEMPRODUTO: Joi.number().required()
    .messages({
        'number.base': 'IDIMAGEMPRODUTO deve ser um número',
        'any.required': 'IDIMAGEMPRODUTO é obrigatório'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarImagemProdutoSchema;
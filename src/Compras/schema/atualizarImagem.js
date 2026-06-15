import Joi from 'joi';

const atualizarImagemSchema = Joi.object({
    IDIMAGEM: Joi.number().required()
    .messages({
        'number.base': 'IDIMAGEM deve ser um número',
        'any.required': 'IDIMAGEM é obrigatório'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarImagemSchema;
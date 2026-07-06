import Joi from 'joi';

const atualizarEstilosSchema = Joi.object({
    IDVINCESTILOSESTRUTURA: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDVINCESTILOSESTRUTURA deve ser um número',
        'any.required': 'IDVINCESTILOSESTRUTURA é obrigatório'
    }),
    IDGRUPOESTRUTURAANTIGA: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDGRUPOESTRUTURAANTIGA deve ser um número',
    }),
    IDESTILO: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDESTILO deve ser um número',
        'any.required': 'IDESTILO é obrigatório'
    }),
    DSESTILO: Joi.string().allow('')
    .messages({
        'string.base': 'DSESTILO deve ser uma string',
    }),
    IDGRUPOESTRUTURA: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDGRUPOESTRUTURA deve ser um número',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarEstilosSchema;
import Joi from 'joi';

const atualizarSubGrupoEstruturaSchema = Joi.object({
    IDGRUPOESTRUTURAANTIGA: Joi.number()
    .messages({
        'number.base': 'IDGRUPOESTRUTURAANTIGA deve ser um número',
    }),
    IDGRUPOESTRUTURA: Joi.number().required()
    .messages({
        'number.base': 'IDGRUPOESTRUTURA deve ser um número',
        'any.required': 'IDGRUPOESTRUTURA é obrigatório'
    }),
    DSSUBGRUPOESTRUTURA: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DSSUBGRUPOESTRUTURA deve ser uma string',
    }),
    DSSUBGRUPOESTRUTURAFIM: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DSSUBGRUPOESTRUTURA deve ser uma string',
    }),
    CODSUBGRUPOESTRUTURA: Joi.string().allow('').optional()
    .messages({
        'string.base': 'CODSUBGRUPOESTRUTURA deve ser uma string',
    }),
    IDSUBGRUPOESTRUTURA: Joi.number().optional()
    .messages({
        'number.base': 'IDSUBGRUPOESTRUTURA deve ser um número',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarSubGrupoEstruturaSchema;
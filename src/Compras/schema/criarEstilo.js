import Joi from 'joi';

const criarEstiloSchema = Joi.object({
    IDGRUPOESTRUTURAANTIGA: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDGRUPOESTRUTURAANTIGA deve ser um número inteiro',
    }),
    IDVINCESTILOSESTRUTURA: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDVINCESTILOSESTRUTURA deve ser um número inteiro',
    }),
    IDESTILO: Joi.number().integer().allow(null)
    .messages({
        'number.base': 'IDESTILO deve ser um número inteiro',
    }),
    DSESTILO: Joi.string().allow('')
    .messages({
        'string.base': 'DSESTILO deve ser uma string',
        'any.required': 'Descrição do estilo é obrigatória'
    }),
    IDGRUPOESTRUTURA: Joi.number().integer().required()
    .messages({
        'number.base': 'IDGRUPOESTRUTURA deve ser um número inteiro',
        'any.required': 'ID do grupo de estrutura é obrigatório'
    }),
    STATIVO: Joi.string().allow('')
    .messages({
        'string.base': 'STATIVO deve ser uma string',
    })
});

export default criarEstiloSchema; 
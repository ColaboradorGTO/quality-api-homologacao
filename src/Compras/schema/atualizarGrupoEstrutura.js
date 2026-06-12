import Joi from 'joi';

const atualizarGrupoEstruturaSchema = Joi.object({
    IDGRUPOESTRUTURA: Joi.number().required()
    .messages({
        'number.base': 'IDGRUPOESTRUTURA deve ser um número',
        'any.required': 'IDGRUPOESTRUTURA é obrigatório'
    }),
    IDGRUPOEMPRESARIAL: Joi.number().optional()
    .messages({
        'number.base': 'IDGRUPOEMPRESARIAL deve ser um número',
    }),
    DSGRUPOESTRUTURA: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DSGRUPOESTRUTURA deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarGrupoEstruturaSchema;
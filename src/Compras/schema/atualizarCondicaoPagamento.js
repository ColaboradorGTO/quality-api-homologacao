import Joi from 'joi';

const atualizarCondicaoPagamentoSchema = Joi.object({
    IDCONDICAOPAGAMENTO: Joi.number().required()
    .messages({
        'number.base': 'IDCONDICAOPAGAMENTO deve ser um número',
        'any.required': 'IDCONDICAOPAGAMENTO é obrigatório'
    }),
    IDGRUPOEMPRESARIAL: Joi.number().required()
    .messages({
        'number.base': 'IDGRUPOEMPRESARIAL deve ser um número',
        'any.required': 'IDGRUPOEMPRESARIAL é obrigatório'
    }),
    DSCONDICAOPAG: Joi.string().required()
    .messages({
        'string.base': 'DSCONDICAOPAG deve ser uma string',
        'any.required': 'DSCONDICAOPAG é obrigatório'
    }),
    STPARCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STPARCELADO deve ser uma string',
        'string.max': 'STPARCELADO deve ter no máximo 10 caracteres'
    }),
    NUPARCELAS: Joi.number()
    .messages({
        'number.base': 'NUPARCELAS deve ser um número',
    }),
    NUNDIA1PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA1PAG deve ser um número',
    }),
    NUNDIA2PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA2PAG deve ser um número',
    }),
    NUNDIA3PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA3PAG deve ser um número',
    }),
    NUNDIA4PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA4PAG deve ser um número',
    }),
    NUNDIA5PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA5PAG deve ser um número',
    }),
    NUNDIA6PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA6PAG deve ser um número',
    }),
    NUNDIA7PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA7PAG deve ser um número',
    }),
    NUNDIA8PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA8PAG deve ser um número',
    }),
    NUNDIA9PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA9PAG deve ser um número',
    }),
    NUNDIA10PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA10PAG deve ser um número',
    }),
    NUNDIA11PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA11PAG deve ser um número',
    }),
    NUNDIA12PAG: Joi.number()
    .messages({
        'number.base': 'NUNDIA12PAG deve ser um número',
    }),
    IDTPDOCUMENTO: Joi.number()
    .messages({
        'number.base': 'IDTPDOCUMENTO deve ser um número',
    }),
    DTULTALTERACAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTULTALTERACAO deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
    QTDDIAS: Joi.number()
    .messages({
        'number.base': 'QTDDIAS deve ser um número',
    })
});

export default atualizarCondicaoPagamentoSchema;
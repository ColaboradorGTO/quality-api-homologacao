import Joi from 'joi';

const atualizarCoresSchema = Joi.object({
    IDCOR: Joi.number().required()
    .messages({
        'number.base': 'IDCOR deve ser um número',
        'any.required': 'IDCOR é obrigatório'
    }),
    IDGRUPOCOR: Joi.number()
    .messages({
        'number.base': 'IDGRUPOCOR deve ser um número',
    }),
    DSCOR: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'DSCOR deve ser uma string',
        'string.max': 'DSCOR deve ter no máximo 500 caracteres'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarCoresSchema;
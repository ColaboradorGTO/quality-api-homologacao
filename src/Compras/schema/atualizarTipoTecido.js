import Joi from 'joi';

const atualizarTipoTecidoSchema = Joi.object({
    IDTPTECIDO: Joi.number().required()
    .messages({
        'number.base': 'IDTPTECIDO deve ser um número',
        'any.required': 'IDTPTECIDO é obrigatório'
    }),
    DSTIPOTECIDO: Joi.string().allow('')
    .messages({
        'string.base': 'DSTIPOTECIDO deve ser uma string'
    }),
    DSSIGLA: Joi.string().allow('')
    .messages({
        'string.base': 'DSSIGLA deve ser uma string'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
    IDFUNCIONARIO: Joi.number().required()
    .messages({
        'number.base': 'IDFUNCIONARIO deve ser um número',
        'any.required': 'IDFUNCIONARIO é obrigatório'
    }),
});

export default atualizarTipoTecidoSchema;
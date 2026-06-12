import Joi from 'joi';

const atualizarTipoTecidoSchema = Joi.object({
    IDTPTECIDO: Joi.string().allow('').required()
    .messages({
        'string.base': 'IDTPTECIDO deve ser uma string',
        'any.required': 'IDTPTECIDO é obrigatório'
    }),
    DSTIPOTECIDO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'DSTIPOTECIDO deve ser uma string',
        'string.max': 'DSTIPOTECIDO deve ter no máximo 500 caracteres'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarTipoTecidoSchema;
import Joi from 'joi';

const atualizarUnidadeMedidaSchema = Joi.object({
    IDUNIDADEMEDIDA: Joi.number().required()
    .messages({
        'number.base': 'IDUNIDADEMEDIDA deve ser um número',
        'any.required': 'IDUNIDADEMEDIDA é obrigatório'
    }),
    DSUNIDADE: Joi.string().allow('')
    .messages({
        'string.base': 'DSUNIDADE deve ser uma string',
    }),
    DSSIGLA: Joi.string().allow('')
    .messages({
        'string.base': 'DSSIGLA deve ser uma string',
    }),
    DTCADASTRO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTCADASTRO deve ser uma string',
    }),
    DTULTATUALIZACAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTULTATUALIZACAO deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarUnidadeMedidaSchema;
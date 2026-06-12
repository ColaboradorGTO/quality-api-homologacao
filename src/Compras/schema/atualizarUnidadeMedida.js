import Joi from 'joi';

const atualizarUnidadeMedidaSchema = Joi.object({
    IDUNIDADEMEDIDA: Joi.number().required()
    .messages({
        'number.base': 'IDUNIDADEMEDIDA deve ser um número',
        'any.required': 'IDUNIDADEMEDIDA é obrigatório'
    }),
    DSUNIDADE: Joi.string().allow('').max(100).optional()
    .messages({
        'string.base': 'DSUNIDADE deve ser uma string',
        'string.max': 'DSUNIDADE deve ter no máximo 100 caracteres'
    }),
    DSSIGLA: Joi.string().allow('').max(100).optional()
    .messages({
        'string.base': 'DSSIGLA deve ser uma string',
        'string.max': 'DSSIGLA deve ter no máximo 100 caracteres'
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
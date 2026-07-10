import Joi from 'joi';

const atualizarPromocaoSchema = Joi.object({
    DSPROMOCAOMARKETING: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DSPROMOCAOMARKETING deve ser uma string',
    }),
    DTHORAINICIO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTHORAINICIO deve ser uma string',
    }),
    DTHORAFIM: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTHORAFIM deve ser uma string',
    }),
    TPAPLICADOA: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'TPAPLICADOA deve ser um número',
    }),
    TPAPARTIRDE: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'TPAPARTIRDE deve ser um número',
    }),
    APARTIRDEQTD: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'APARTIRDEQTD deve ser um número',
    }),
    APARTIRDOVLR: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'APARTIRDOVLR deve ser um número',
    }),
    TPFATORPROMO: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'TPFATORPROMO deve ser um número',
    }),
    FATORPROMOVLR: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'FATORPROMOVLR deve ser um número',
    }),
    FATORPROMOPERC: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'FATORPROMOPERC deve ser um número',
    }),
    VLPRECOPRODUTO: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'VLPRECOPRODUTO deve ser um número',
    }),
    STEMPRESAPROMO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STEMPRESAPROMO deve ser uma string',
        'string.max': 'STEMPRESAPROMO deve ter no máximo 10 caracteres'
    }),
    STDETPROMOORIGEM: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STDETPROMOORIGEM deve ser uma string',
        'string.max': 'STDETPROMOORIGEM deve ter no máximo 10 caracteres'
    }),
    STDETPROMODESTINO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STDETPROMODESTINO deve ser uma string',
        'string.max': 'STDETPROMODESTINO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarPromocaoSchema;
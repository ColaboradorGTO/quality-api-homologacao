import Joi from 'joi';

const criarMaloteLojaSchema = Joi.object({

    IDEMPRESA: Joi.number().integer().required()
        .messages({
            'number.base': 'IDEMPRESA deve ser um número inteiro',
            'any.required': 'IDEMPRESA da empresa é obrigatório'
        }),
    DATAMOVIMENTOCAIXA: Joi.string()
        .messages({
            'string.base': 'DATAMOVIMENTOCAIXA deve ser uma string',
            'string.max': 'DATAMOVIMENTOCAIXA deve ter no máximo 500 caracteres'
        }),

    VRDINHEIRO: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRDINHEIRO deve ser um numero',
            'any.required': 'VRDINHEIRO é obrigatório'
        }),

    VRCARTAO: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRCARTAO deve ser um numero',
            'any.required': 'VRCARTAO é obrigatório'
        }),

    VRPOS: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRPOS deve ser um numero',
            'any.required': 'VRPOS é obrigatório'
        }),

    VRPIX: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRPIX deve ser um numero',
        }),

    VRCONVENIO: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRCONVENIO deve ser um numero',
            'any.required': 'VRCONVENIO é obrigatório'
        }),

    VRVOUCHER: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRVOUCHER deve ser um numero',
            'any.required': 'VRVOUCHER é obrigatório'
        }),

    VRFATURA: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRFATURA deve ser um numero',
            'any.required': 'VRFATURA é obrigatório'
        }),

    VRFATURAPIX: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRFATURAPIX deve ser um numero',
            'any.required': 'VRFATURAPIX é obrigatório'
        }),

    VRDESPESA: Joi.number().allow('').max(500).optional()
        .messages({
            'number.base': 'VRDESPESA deve ser uma numero',
            'number.max': 'VRDESPESA deve ter no máximo 500 caracteres'
        }),

    VRTOTALRECEBIDO: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRTOTALRECEBIDO deve ser um numero',
            'any.required': 'VRTOTALRECEBIDO é obrigatório'
        }),

    VRDISPONIVEL: Joi.number().allow('').optional()
        .messages({
            'number.base': 'VRDISPONIVEL deve ser um numero',
            'any.required': 'VRDISPONIVEL é obrigatório'
        }),

    IDUSERCRIACAO: Joi.number().allow('').optional()
        .messages({
            'number.base': 'IDUSERCRIACAO deve ser um numero',
            'any.required': 'IDUSERCRIACAO é obrigatório'
        }),

    OBSERVACAOLOJA: Joi.string().allow('')
        .messages({
            'string.base': 'OBSERVACAOLOJA string deve ser um numero',
        }),
});

export default criarMaloteLojaSchema;



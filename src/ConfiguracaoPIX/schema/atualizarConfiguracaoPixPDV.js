import Joi from 'joi';

const configuracaoPixPDVSchema = Joi.object({
    IDEMPRESA: Joi.number().integer().positive().required()
        .messages({
            'number.base': 'IDEMPRESA deve ser um número.',
            'any.required': 'IDEMPRESA é obrigatório.'
        }),
    NOFANTASIA: Joi.string().allow('').optional()
        .messages({
            'string.base': 'NOFANTASIA deve ser uma string.'
        }),
    IDPSPPIX: Joi.number().integer().required()
        .messages({
            'number.base': 'IDPSPPIX deve ser um número.',
            'any.required': 'IDPSPPIX é obrigatório.'
        }),
    IDPSPPIXFATURA: Joi.number().integer().required()
        .messages({
            'number.base': 'IDPSPPIXFATURA deve ser um número.',
            'any.required': 'IDPSPPIXFATURA é obrigatório.'
        }),
    USER: Joi.alternatives()
        .try(Joi.string().trim(), Joi.number().integer())
        .required()
        .messages({
            'any.required': 'USER é obrigatório.'
        })
}).unknown(true);

const atualizarConfiguracaoPixPDVSchema = Joi.array()
    .items(configuracaoPixPDVSchema)
    .min(1)
    .required();

export default atualizarConfiguracaoPixPDVSchema;

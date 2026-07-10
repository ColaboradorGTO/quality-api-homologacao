import Joi from 'joi';

const criarTransportadorSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number()
    .messages({
        'number.base': 'IDGRUPOEMPRESARIAL deve ser um número',
    }),
    IDSUBGRUPOEMPRESARIAL: Joi.number()
    .messages({
        'number.base': 'IDSUBGRUPOEMPRESARIAL deve ser um número',
    }),
    NORAZAOSOCIAL: Joi.string().allow('')
    .messages({
        'string.base': 'NORAZAOSOCIAL deve ser uma string'
    }),
    NOFANTASIA: Joi.string().allow('')
    .messages({
        'string.base': 'NOFANTASIA deve ser uma string'
    }),
    NUCNPJ: Joi.string().min(14)
    .messages({
        'string.base': 'NUCNPJ deve ser uma string',
        'string.min': 'NUCNPJ deve ter no mínimo 14 caracteres'
    }),
    NUINSCESTADUAL: Joi.string().allow('')
    .messages({
        'string.base': 'NUINSCESTADUAL deve ser uma string',
    }),
    NUINSCMUNICIPAL: Joi.string().allow('')
    .messages({
        'string.base': 'NUINSCMUNICIPAL deve ser uma string',
    }),
    NUIBGE: Joi.string().allow('')
    .messages({
        'string.base': 'NUIBGE deve ser uma string',
    }),
    EENDERECO: Joi.string().allow('')
    .messages({
        'string.base': 'EENDERECO deve ser uma string',
    }),
    ENUMERO: Joi.string().allow('')
    .messages({
        'string.base': 'ENUMERO deve ser uma string',
    }),
    ECOMPLEMENTO: Joi.string().allow('')
    .messages({
        'string.base': 'ECOMPLEMENTO deve ser uma string',
    }),
    EBAIRRO: Joi.string().allow('')
    .messages({
        'string.base': 'EBAIRRO deve ser uma string',
    }),
    ECIDADE: Joi.string().allow('')
    .messages({
        'string.base': 'ECIDADE deve ser uma string',
    }),
    SGUF: Joi.string().allow('')
    .messages({
        'string.base': 'SGUF deve ser uma string',
    }),
    NUCEP: Joi.string().allow('')
    .messages({
        'string.base': 'NUCEP deve ser uma string',
    }),
    EEMAIL: Joi.string().allow('')
    .messages({
        'string.base': 'EEMAIL deve ser uma string',
    }),
    NUTELEFONE1: Joi.string().allow('')
    .messages({
        'string.base': 'NUTELEFONE1 deve ser uma string',
    }),
    NUTELEFONE2: Joi.string().allow('')
    .messages({
        'string.base': 'NUTELEFONE2 deve ser uma string',
    }),
    NUTELEFONE3: Joi.string().allow('')
    .messages({
        'string.base': 'NUTELEFONE3 deve ser uma string',
    }),
    NOREPRESENTANTE: Joi.string().allow('')
    .messages({
        'string.base': 'NOREPRESENTANTE deve ser uma string',
    }),
    DTCADASTRO: Joi.string().allow('')
    .messages({
        'string.base': 'DTCADASTRO deve ser uma string',
    }),
    DTULTATUALIZACAO: Joi.string().allow('')
    .messages({
        'string.base': 'DTULTATUALIZACAO deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default criarTransportadorSchema;
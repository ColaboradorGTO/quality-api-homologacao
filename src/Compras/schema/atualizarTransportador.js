import Joi from 'joi';

const atualizarTransportadorSchema = Joi.object({
    IDTRANSPORTADORA: Joi.number().required()
    .messages({
        'number.base': 'IDTRANSPORTADORA deve ser um número',
        'any.required': 'IDTRANSPORTADORA é obrigatório'
    }),
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
    NUINSCESTADUAL: Joi.string()
    .messages({
        'string.base': 'NUINSCESTADUAL deve ser uma string',
    }),
    NUINSCMUNICIPAL: Joi.string()
    .messages({
        'string.base': 'NUINSCMUNICIPAL deve ser uma string',
    }),
    NUIBGE: Joi.string()
    .messages({
        'string.base': 'NUIBGE deve ser uma string',
    }),
    EENDERECO: Joi.string()
    .messages({
        'string.base': 'EENDERECO deve ser uma string',
    }),
    ENUMERO: Joi.string()
    .messages({
        'string.base': 'ENUMERO deve ser uma string',
    }),
    ECOMPLEMENTO: Joi.string()
    .messages({
        'string.base': 'ECOMPLEMENTO deve ser uma string',
    }),
    EBAIRRO: Joi.string()
    .messages({
        'string.base': 'EBAIRRO deve ser uma string',
    }),
    ECIDADE: Joi.string()
    .messages({
        'string.base': 'ECIDADE deve ser uma string',
    }),
    SGUF: Joi.string()
    .messages({
        'string.base': 'SGUF deve ser uma string',
    }),
    NUCEP: Joi.string()
    .messages({
        'string.base': 'NUCEP deve ser uma string',
    }),
    EEMAIL: Joi.string()
    .messages({
        'string.base': 'EEMAIL deve ser uma string',
    }),
    NUTELEFONE1: Joi.string()
    .messages({
        'string.base': 'NUTELEFONE1 deve ser uma string',
    }),
    NUTELEFONE2: Joi.string()
    .messages({
        'string.base': 'NUTELEFONE2 deve ser uma string',
    }),
    NUTELEFONE3: Joi.string()
    .messages({
        'string.base': 'NUTELEFONE3 deve ser uma string',
    }),
    NOREPRESENTANTE: Joi.string()
    .messages({
        'string.base': 'NOREPRESENTANTE deve ser uma string',
    }),
    DTCADASTRO: Joi.string()
    .messages({
        'string.base': 'DTCADASTRO deve ser uma string',
    }),
    DTULTATUALIZACAO: Joi.string()
    .messages({
        'string.base': 'DTULTATUALIZACAO deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarTransportadorSchema;
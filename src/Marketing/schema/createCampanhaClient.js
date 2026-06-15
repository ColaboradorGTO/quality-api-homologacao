import Joi from 'joi';

export const createCampanhaClientSchema = Joi.object({

    IDCAMPANHA: Joi.number()
        .messages({
            'number.base': 'IDCAMPANHA deve ser um numero',
        }),

    NUCPFCNPJ: Joi.string()
        .messages({
            'string.base': 'NUCPFCNPJ deve ser uma string',
        }),

    EENDERECO: Joi.string()
        .messages({
            'string.base': 'EENDERECO deve ser uma string',
        }),

    NUENDERECO: Joi.string()
        .messages({
            'string.base': 'NUENDERECO deve ser uma string',
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
            'number.base': 'ECIDADE deve ser uma string',
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

    NUTELEFONE: Joi.string()
        .messages({
            'number.base': 'NUTELEFONE deve ser uma string',
        }),

    NOME: Joi.string()
        .messages({
            'string.base': 'NOME deve ser uma string',
        })
});

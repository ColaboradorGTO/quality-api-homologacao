import Joi from 'joi';

export const createProdutoEmpresaSchema = Joi.object({

    IDCAMPANHA: Joi.number().required()
        .messages({
            'number.base': 'IDCAMPANHA deve ser um número',
            'any.required': 'IDCAMPANHA é obrigatório',
        }),

    NUCPFCNPJ: Joi.string().required()
        .messages({
            'number.base': 'NUCPFCNPJ deve ser uma string',
            'any.required': 'NUCPFCNPJ é obrigatório',
        }),

    NOME: Joi.string().required()
        .messages({
            'string.base': 'NOME deve ser uma string',
            'any.required': 'NOME é obrigatório',
        }),

    EENDERECO: Joi.string().required()
        .messages({
            'string.base': 'EENDERECO deve ser uma string',
            'any.required': 'EENDERECO é obrigatório',
        }),

    NUENDERECO: Joi.string().required()
        .messages({
            'string.base': 'NUENDERECO deve ser um string',
            'any.required': 'NUENDERECO é obrigatório',
        }),

    ECOMPLEMENTO: Joi.string().required()
        .messages({
            'string.base': 'ECOMPLEMENTO deve ser uma string',
            'any.required': 'ECOMPLEMENTO é obrigatório',
        }),

    EBAIRRO: Joi.string().required()
        .messages({
            'string.base': 'EBAIRRO deve ser um string',
            'any.required': 'EBAIRRO é obrigatório',
        }),

    ECIDADE: Joi.string().required()
        .messages({
            'string.base': 'ECIDADE deve ser um string',
            'any.required': 'ECIDADE é obrigatório',
        }),

    SGUF: Joi.string().required()
        .messages({
            'string.base': 'SGUF deve ser um string',
            'any.required': 'SGUF é obrigatório',
        }),

    NUCEP: Joi.string().required()
        .messages({
            'string.base': 'NUCEP deve ser um string',
            'any.required': 'NUCEP é obrigatório',
        }),

    EEMAIL: Joi.string().required()
        .messages({
            'string.base': 'EEMAIL deve ser um string',
            'any.required': 'EEMAIL é obrigatório',
        }),

    NUTELEFONE: Joi.string().required()
        .messages({
            'string.base': 'NUTELEFONE deve ser um string',
            'any.required': 'NUTELEFONE é obrigatório',
        }),
});

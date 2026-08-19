import Joi from "joi";

const criarClienteSchema = Joi.object({
    IDEMPRESA: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDEMPRESA é obrigatório",
            "number.base": "O campo IDEMPRESA deve ser um número",
            "number.integer": "O campo IDEMPRESA deve ser um número inteiro",
            "number.positive": "O campo IDEMPRESA deve ser maior que zero"
        }),

    DSNOMERAZAOSOCIAL: Joi.string().trim().required()
        .messages({
            "any.required": "O campo DSNOMERAZAOSOCIAL é obrigatório",
            "string.base": "O campo DSNOMERAZAOSOCIAL deve ser uma string",
            "string.empty": "O campo DSNOMERAZAOSOCIAL é obrigatório"
        }),

    DSAPELIDONOMEFANTASIA: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo DSAPELIDONOMEFANTASIA é obrigatório",
            "string.base": "O campo DSAPELIDONOMEFANTASIA deve ser uma string"
        }),

    TPCLIENTE: Joi.string().trim().required()
        .messages({
            "any.required": "O campo TPCLIENTE é obrigatório",
            "string.base": "O campo TPCLIENTE deve ser uma string",
            "string.empty": "O campo TPCLIENTE é obrigatório"
        }),

    NUCPFCNPJ: Joi.string().trim().pattern(/^\d{11}(?:\d{3})?$/).required()
        .messages({
            "any.required": "O campo NUCPFCNPJ é obrigatório",
            "string.base": "O campo NUCPFCNPJ deve ser uma string",
            "string.empty": "O campo NUCPFCNPJ é obrigatório",
            "string.pattern.base": "O campo NUCPFCNPJ deve conter 11 dígitos para CPF ou 14 dígitos para CNPJ"
        }),

    NURGINSCESTADUAL: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo NURGINSCESTADUAL é obrigatório",
            "string.base": "O campo NURGINSCESTADUAL deve ser uma string"
        }),

    NUINSCMUNICIPAL: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo NUINSCMUNICIPAL é obrigatório",
            "string.base": "O campo NUINSCMUNICIPAL deve ser uma string"
        }),

    NUCEP: Joi.string().trim().allow('').pattern(/^\d{8}$/).required()
        .messages({
            "any.required": "O campo NUCEP é obrigatório",
            "string.base": "O campo NUCEP deve ser uma string",
            "string.pattern.base": "O campo NUCEP deve conter 8 dígitos"
        }),

    NUIBGE: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo NUIBGE é obrigatório",
            "number.base": "O campo NUIBGE deve ser um número",
            "number.integer": "O campo NUIBGE deve ser um número inteiro",
            "number.positive": "O campo NUIBGE deve ser maior que zero"
        }),

    EENDERECO: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo EENDERECO é obrigatório",
            "string.base": "O campo EENDERECO deve ser uma string"
        }),

    NUENDERECO: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo NUENDERECO é obrigatório",
            "string.base": "O campo NUENDERECO deve ser uma string"
        }),

    ECOMPLEMENTO: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo ECOMPLEMENTO é obrigatório",
            "string.base": "O campo ECOMPLEMENTO deve ser uma string"
        }),

    EBAIRRO: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo EBAIRRO é obrigatório",
            "string.base": "O campo EBAIRRO deve ser uma string"
        }),

    ECIDADE: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo ECIDADE é obrigatório",
            "string.base": "O campo ECIDADE deve ser uma string"
        }),

    SGUF: Joi.string().trim().length(2).required()
        .messages({
            "any.required": "O campo SGUF é obrigatório",
            "string.base": "O campo SGUF deve ser uma string",
            "string.empty": "O campo SGUF é obrigatório",
            "string.length": "O campo SGUF deve conter 2 caracteres"
        }),

    EEMAIL: Joi.string().trim().allow('').email({ tlds: { allow: false } }).required()
        .messages({
            "any.required": "O campo EEMAIL é obrigatório",
            "string.base": "O campo EEMAIL deve ser uma string",
            "string.email": "O campo EEMAIL deve conter um e-mail válido"
        }),

    NUTELCOMERCIAL: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo NUTELCOMERCIAL é obrigatório",
            "string.base": "O campo NUTELCOMERCIAL deve ser uma string"
        }),

    NUTELCELULAR: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo NUTELCELULAR é obrigatório",
            "string.base": "O campo NUTELCELULAR deve ser uma string"
        }),

    DTNASCFUNDACAO: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo DTNASCFUNDACAO é obrigatório",
            "string.base": "O campo DTNASCFUNDACAO deve ser uma string"
        }),

    IDINDICACAOIE: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDINDICACAOIE é obrigatório",
            "number.base": "O campo IDINDICACAOIE deve ser um número",
            "number.integer": "O campo IDINDICACAOIE deve ser um número inteiro",
            "number.positive": "O campo IDINDICACAOIE deve ser maior que zero"
        }),

    DSINDICACAOIE: Joi.string().trim().required()
        .messages({
            "any.required": "O campo DSINDICACAOIE é obrigatório",
            "string.base": "O campo DSINDICACAOIE deve ser uma string",
            "string.empty": "O campo DSINDICACAOIE é obrigatório"
        }),

    IDFUNCIONARIO: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDFUNCIONARIO é obrigatório",
            "number.base": "O campo IDFUNCIONARIO deve ser um número",
            "number.integer": "O campo IDFUNCIONARIO deve ser um número inteiro",
            "number.positive": "O campo IDFUNCIONARIO deve ser maior que zero"
        })
});

export default criarClienteSchema;

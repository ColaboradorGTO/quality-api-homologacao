import Joi from 'joi';

const criarFornecedorSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'IDGRUPOEMPRESARIAL deve ser um número inteiro'
    }),
    IDSUBGRUPOEMPRESARIAL: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'IDSUBGRUPOEMPRESARIAL deve ser um número inteiro'
    }),
    MODPEDIDO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'MODPEDIDO deve ser uma string',
    }),
    NORAZAOSOCIAL: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NORAZAOSOCIAL deve ser uma string',
    }),
    NOFANTASIA: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NOFANTASIA deve ser uma string',
    }),
    NUCNPJ: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUCNPJ deve ser uma string',
    }),
    NUINSCESTADUAL: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUINSCESTADUAL deve ser uma string',
    }),
    NUINSCMUNICIPAL: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUINSCMUNICIPAL deve ser uma string',
    }),
    NUIBGE: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUIBGE deve ser uma string',
    }),
    EENDERECO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'EENDERECO deve ser uma string',
    }),
    ENUMERO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'ENUMERO deve ser uma string',
    }),
    ECOMPLEMENTO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'ECOMPLEMENTO deve ser uma string',
    }),
    EBAIRRO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'EBAIRRO deve ser uma string',
    }),
    ECIDADE: Joi.string().allow('').optional()
    .messages({
        'string.base': 'ECIDADE deve ser uma string',
    }),
    SGUF: Joi.string().allow('').optional()
    .messages({
        'string.base': 'SGUF deve ser uma string',
    }),
    NUCEP: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUCEP deve ser uma string',
    }),
    EEMAIL: Joi.string().allow('').optional()
    .messages({
        'string.base': 'EEMAIL deve ser uma string',
    }),
    NUTELEFONE1: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUTELEFONE1 deve ser uma string',
    }),
    NUTELEFONE2: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUTELEFONE2 deve ser uma string',
    }),
    NUTELEFONE3: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NUTELEFONE3 deve ser uma string',
    }),
    NOREPRESENTANTE: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NOREPRESENTANTE deve ser uma string',
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
    IDCONDPAGPADRAO: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'IDCONDPAGPADRAO deve ser um número inteiro'
    }),
    IDTRANSPORTADORAPADRAO: Joi.number().allow(null).optional()
    .messages({
        'number.base': 'IDTRANSPORTADORAPADRAO deve ser um número inteiro'
    }),
    TPPEDIDOPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPPEDIDOPADRAO deve ser uma string',
    }),
    NOVENDEDORPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NOVENDEDORPADRAO deve ser uma string',
    }),
    TPFRETEPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPFRETEPADRAO deve ser uma string',
    }),
    TPARQUIVOPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPARQUIVOPADRAO deve ser uma string',
    }),
    TPFISCALPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPFISCALPADRAO deve ser uma string',
    }),
    EMAILVENDEDORPADRAO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'EMAILVENDEDORPADRAO deve ser uma string',
    })
});

export default criarFornecedorSchema;
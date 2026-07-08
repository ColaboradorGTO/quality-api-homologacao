import Joi from 'joi';

const detItemSchema = Joi.object({
    NUMEROCOLETOR: Joi.number().integer().required()
        .messages({
            'number.base': 'NUMEROCOLETOR deve ser um número inteiro',
            'any.required': 'NUMEROCOLETOR é obrigatório'
        }),

    DSCOLETOR: Joi.string().allow('', null).default('')
        .messages({
            'string.base': 'DSCOLETOR deve ser uma string'
        }),

    IDPRODUTO: Joi.string().required()
        .messages({
            'string.base': 'IDPRODUTO deve ser uma string',
            'any.required': 'IDPRODUTO é obrigatório'
        }),

    CODIGODEBARRAS: Joi.string().required()
        .messages({
            'string.base': 'CODIGODEBARRAS deve ser uma string',
            'any.required': 'CODIGODEBARRAS é obrigatório'
        }),

    DSPRODUTO: Joi.string().required()
        .messages({
            'string.base': 'DSPRODUTO deve ser uma string',
            'any.required': 'DSPRODUTO é obrigatório'
        }),

    TOTALCONTAGEMGERAL: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'TOTALCONTAGEMGERAL deve ser um número inteiro',
            'number.min': 'TOTALCONTAGEMGERAL não pode ser negativo',
            'any.required': 'TOTALCONTAGEMGERAL é obrigatório'
        }),

    TOTALCONTAGEMATUAL: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'TOTALCONTAGEMATUAL deve ser um número inteiro',
            'number.min': 'TOTALCONTAGEMATUAL não pode ser negativo',
            'any.required': 'TOTALCONTAGEMATUAL é obrigatório'
        }),

    PRECOCUSTO: Joi.number().precision(2).min(0).required()
        .messages({
            'number.base': 'PRECOCUSTO deve ser um número',
            'number.min': 'PRECOCUSTO não pode ser negativo',
            'any.required': 'PRECOCUSTO é obrigatório'
        }),

    PRECOVENDA: Joi.number().precision(2).min(0).required()
        .messages({
            'number.base': 'PRECOVENDA deve ser um número',
            'number.min': 'PRECOVENDA não pode ser negativo',
            'any.required': 'PRECOVENDA é obrigatório'
        }),
});

const criarResumoBalancoSchema = Joi.object({
    INSBALANCO: Joi.number().valid(1).required()
        .messages({
            'any.only': 'INSBALANCO deve ser 1 para este fluxo',
            'any.required': 'INSBALANCO é obrigatório'
        }),

    IDEMPRESA: Joi.number().integer().required()
        .messages({
            'number.base': 'IDEMPRESA deve ser um número inteiro',
            'any.required': 'IDEMPRESA é obrigatório'
        }),

    DSRESUMOBALANCO: Joi.string().required()
        .messages({
            'string.base': 'DSRESUMOBALANCO deve ser uma string',
            'any.required': 'DSRESUMOBALANCO é obrigatório'
        }),

    DTABERTURA: Joi.string().isoDate().required()
        .messages({
            'string.isoDate': 'DTABERTURA deve estar no formato ISO (ex: 2026-04-01T08:00:00)',
            'any.required': 'DTABERTURA é obrigatório'
        }),

    DTFECHAMENTO: Joi.string().isoDate().allow(null, '').optional()
        .messages({
            'string.isoDate': 'DTFECHAMENTO deve estar no formato ISO ou nulo'
        }),

    QTDTOTALITENS: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'QTDTOTALITENS deve ser um número inteiro',
            'number.min': 'QTDTOTALITENS não pode ser negativo',
            'any.required': 'QTDTOTALITENS é obrigatório'
        }),

    QTDTOTALSOBRA: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'QTDTOTALSOBRA deve ser um número inteiro',
            'number.min': 'QTDTOTALSOBRA não pode ser negativo',
            'any.required': 'QTDTOTALSOBRA é obrigatório'
        }),

    QTDTOTALFALTA: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'QTDTOTALFALTA deve ser um número inteiro',
            'number.min': 'QTDTOTALFALTA não pode ser negativo',
            'any.required': 'QTDTOTALFALTA é obrigatório'
        }),

    TXTOBSERVACAO: Joi.string().allow('', null).optional()
        .messages({
            'string.base': 'TXTOBSERVACAO deve ser uma string'
        }),

    STATIVO: Joi.string().valid('True', 'False').required()
        .messages({
            'any.only': 'STATIVO deve ser "True" ou "False"',
            'any.required': 'STATIVO é obrigatório'
        }),

    det: Joi.array().items(detItemSchema).min(1).required()
        .messages({
            'array.base': 'det deve ser um array',
            'array.min': 'det deve conter ao menos um item',
            'any.required': 'det é obrigatório'
        }),
});

const criarDetalheBalancoAvulsoSchema = Joi.object({
    INSBALANCO: Joi.number().valid(0).required()
        .messages({
            'any.only': 'INSBALANCO deve ser 0 para este fluxo',
            'any.required': 'INSBALANCO é obrigatório'
        }),

    IDEMPRESA: Joi.number().integer().required()
        .messages({
            'number.base': 'IDEMPRESA deve ser um número inteiro',
            'any.required': 'IDEMPRESA é obrigatório'
        }),

    NUMEROCOLETOR: Joi.number().integer().required()
        .messages({
            'number.base': 'NUMEROCOLETOR deve ser um número inteiro',
            'any.required': 'NUMEROCOLETOR é obrigatório'
        }),

    DSCOLETOR: Joi.string().allow('', null).default('')
        .messages({
            'string.base': 'DSCOLETOR deve ser uma string'
        }),

    IDPRODUTO: Joi.string().required()
        .messages({
            'number.base': 'IDPROsDUTO deve ser uma string',
            'any.required': 'IDPRODUTO é obrigatório'
        }),

    CODIGODEBARRAS: Joi.string().required()
        .messages({
            'string.base': 'CODIGODEBARRAS deve ser uma string',
            'any.required': 'CODIGODEBARRAS é obrigatório'
        }),

    DSPRODUTO: Joi.string().required()
        .messages({
            'string.base': 'DSPRODUTO deve ser uma string',
            'any.required': 'DSPRODUTO é obrigatório'
        }),

    TOTALCONTAGEMGERAL: Joi.number().integer().min(0).required()
        .messages({
            'number.base': 'TOTALCONTAGEMGERAL deve ser um número inteiro',
            'number.min': 'TOTALCONTAGEMGERAL não pode ser negativo',
            'any.required': 'TOTALCONTAGEMGERAL é obrigatório'
        }),

    PRECOCUSTO: Joi.number().precision(2).min(0).required()
        .messages({
            'number.base': 'PRECOCUSTO deve ser um número',
            'number.min': 'PRECOCUSTO não pode ser negativo',
            'any.required': 'PRECOCUSTO é obrigatório'
        }),

    PRECOVENDA: Joi.number().precision(2).min(0).required()
        .messages({
            'number.base': 'PRECOVENDA deve ser um número',
            'number.min': 'PRECOVENDA não pode ser negativo',
            'any.required': 'PRECOVENDA é obrigatório'
        }),
});

const balancoPostSchema = Joi.alternatives().conditional('.INSBALANCO', {
    switch: [
        { is: 1, then: criarResumoBalancoSchema },
        { is: 0, then: criarDetalheBalancoAvulsoSchema },
    ],
    otherwise: Joi.object({
        INSBALANCO: Joi.number().valid(0, 1).required()
            .messages({ 'any.only': 'INSBALANCO deve ser 0 ou 1' })
    }).unknown(true)
});

export {
    detItemSchema,
    criarResumoBalancoSchema,
    criarDetalheBalancoAvulsoSchema,
    balancoPostSchema,
};

export default criarDetalheBalancoAvulsoSchema;
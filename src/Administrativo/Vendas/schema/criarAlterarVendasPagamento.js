import Joi from 'joi';

const criarAlterarVendasPagamentoSchema = Joi.object({
    IDVENDAPAGAMENTO: Joi.string().required()
        .messages({
            'string.base': 'IDVENDAPAGAMENTO deve ser uma string.',
            'any.required': 'IDVENDAPAGAMENTO é um campo obrigatório.'
        }),

    IDVENDA: Joi.string().required()
        .messages({
            'string.base': 'IDVENDA deve ser uma string.',
            'any.required': 'IDVENDA é um campo obrigatório.'
        }),

    NITEM: Joi.number().required()
        .messages({
            'number.base': 'NITEM deve ser um numero.',
            'any.required': 'NITEM é um campo obrigatório.'
        }),

    TPAG: Joi.string().required()
        .messages({
            'string.base': 'TPAG deve ser uma string.',
            'any.required': 'TPAG é um campo obrigatório.'
        }),

    DSTIPOPAGAMENTO: Joi.string().required()
        .messages({
            'string.base': 'DSTIPOPAGAMENTO deve ser uma string.',
            'any.required': 'DSTIPOPAGAMENTO é um campo obrigatório.'
        }),

    VALORRECEBIDO: Joi.number().required()
        .messages({
            'number.base': 'VALORRECEBIDO deve ser um number.',
            'any.required': 'VALORRECEBIDO é um campo obrigatório.'
        }),

    VALORDEDUZIDO: Joi.number().allow('', null)
        .messages({
            'number.base': 'VALORDEDUZIDO deve ser um number.',
        }),

    VALORLIQUIDO: Joi.number().allow('', null)
        .messages({
            'number.base': 'VALORLIQUIDO deve ser um number.',
        }),

    DTPROCESSAMENTO: Joi.string().allow('', null)
        .messages({
            'string.base': 'DTPROCESSAMENTO deve ser uma string.',
        }),

    DTVENCIMENTO: Joi.string().allow('', null)
        .messages({
            'string.base': 'DTVENCIMENTO deve ser uma string.',
        }),

    NPARCELAS: Joi.number().allow('', null)
        .messages({
            'number.base': 'NPARCELAS deve ser um number.',
        }),

    NOTEF: Joi.string().allow('', null)
        .messages({
            'string.base': 'NOTEF deve ser uma string.',
        }),

    NOAUTORIZADOR: Joi.string().allow('', null)
        .messages({
            'string.base': 'NOAUTORIZADOR deve ser uma string.',
        }),

    NOCARTAO: Joi.string().allow('', null)
        .messages({
            'string.base': 'NOCARTAO deve ser uma string.',
        }),

    NUOPERACAO: Joi.string().allow('', null)
        .messages({
            'string.base': 'NUOPERACAO deve ser uma string.',
        }),

    NSUAUTORIZADORA: Joi.string().allow('', null)
        .messages({
            'string.base': 'NSUAUTORIZADORA deve ser uma string.',
        }),

    NUAUTORIZACAO: Joi.string().allow('', null)
        .messages({
            'string.base': 'NUAUTORIZACAO deve ser uma string.',
        }),

    STCANCELADO: Joi.string().allow('', null)
        .messages({
            'string.base': 'STCANCELADO deve ser uma string.',
        }),

    IDFUNCIONARIO: Joi.number().allow('', null)
        .messages({
            'number.base': 'IDFUNCIONARIO deve ser um number.',
        }),

})

export default criarAlterarVendasPagamentoSchema;
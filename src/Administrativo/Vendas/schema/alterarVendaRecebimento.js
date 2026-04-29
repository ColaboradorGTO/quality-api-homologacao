import Joi from 'joi';

const alterarVendaRecebimentoSchema = Joi.object({
    IDVENDA: Joi.string().required()
        .messages({
            'string.base': 'IDVENDA deve ser uma string.',
            'any.required': 'IDVENDA é um campo obrigatório.'
        }),
    VRRECDINHEIRO: Joi.number().required()
        .messages({
            'number.base': 'VRRECDINHEIRO deve ser um número.',
            'any.required': 'VRRECDINHEIRO é um campo obrigatório.'
        }),
    VRRECCONVENIO: Joi.number().required()
        .messages({
            'number.base': 'VRRECCONVENIO deve ser um numero.',
            'any.required': 'VRRECCONVENIO é um campo obrigatório.'
        }),
    VRRECCARTAO: Joi.number().required()
        .messages({
            'number.base': 'VRRECCARTAO deve ser um numero.',
            'any.required': 'VRRECCARTAO é um campo obrigatório.'
        }),

    VRRECPOS: Joi.number().required()
        .messages({
            'number.base': 'VRRECPOS deve ser um numero.',
            'any.required': 'VRRECPOS é um campo obrigatório.'
        }),
    VRRECVOUCHER: Joi.number().required()
        .messages({
            'number.base': 'VRRECVOUCHER deve ser um numero.',
            'any.required': 'VRRECVOUCHER é um campo obrigatório.'
        }),
    VRRECCHEQUE: Joi.number().required()
        .messages({
            'number.base': 'VRRECCHEQUE deve ser um numero.',
            'any.required': 'VRRECCHEQUE é um campo obrigatório.'
        }),
})

export default alterarVendaRecebimentoSchema;


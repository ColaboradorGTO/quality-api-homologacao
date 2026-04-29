import Joi from 'joi';

const alterarVendaVendedorSchema = Joi.object({
    IDVENDEDOR: Joi.number().allow(0).required()
    .messages({
        'string.base': 'IDVENDA deve ser uma string.',
        'any.required': 'IDVENDA é um campo obrigatório.'
    }),
    IDVENDADETALHE: Joi.string().required()
    .messages({
        'string.base': 'IDVENDADETALHE deve ser uma string.',
        'any.required': 'IDVENDADETALHE é um campo obrigatório.'
    }),
})

export default alterarVendaVendedorSchema;


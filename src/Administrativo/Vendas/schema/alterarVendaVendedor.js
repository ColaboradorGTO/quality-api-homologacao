import Joi from 'joi';

const alterarVendaVendedorSchema = Joi.object({
    IDVENDEDOR: Joi.number()
        .required()
        .messages({
            'number.base': 'IDVENDEDOR deve ser um número.',
            'any.required': 'IDVENDEDOR é um campo obrigatório.'
        }),

    IDVENDADETALHE: Joi.array()
        .items(Joi.string().required())
        .min(1)
        .required()
        .messages({
            'array.base': 'IDVENDADETALHE deve ser um array.',
            'array.min': 'Informe pelo menos um IDVENDADETALHE.',
            'any.required': 'IDVENDADETALHE é um campo obrigatório.'
        })
});

export default alterarVendaVendedorSchema;
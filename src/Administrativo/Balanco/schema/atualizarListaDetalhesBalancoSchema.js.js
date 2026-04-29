import Joi from 'joi';

const atualizarListaDetalhesBalancoSchema = Joi.object({
    IDDETALHEBALANCO: Joi.number().required()
        .messages({
            'number.base': 'O campo IDDETALHEBALANCO deve ser um número',
            'any.required': 'O campo IDDETALHEBALANCO é obrigatório'
        }),
    TOTALCONTAGEMGERAL: Joi.number().required()
        .messages({
            'number.base': 'O campo TOTALCONTAGEMGERAL deve ser um número',
            'any.required': 'O campo TOTALCONTAGEMGERAL é obrigatório'
        }),
})

export default atualizarListaDetalhesBalancoSchema;    
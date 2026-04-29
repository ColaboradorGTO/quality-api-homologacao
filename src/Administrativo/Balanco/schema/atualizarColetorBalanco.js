import Joi from 'joi';

const atualizarColetorBalancoSchema = Joi.object({
    IDRESUMOBALANCO: Joi.number().required()
        .messages({
            'number.base': 'O campo IDRESUMOBALANCO deve ser um número',
            'any.required': 'O campo IDRESUMOBALANCO é obrigatório'
        }),
    NUMEROCOLETOR: Joi.number().required()
        .messages({
            'number.base': 'O campo NUMEROCOLETOR deve ser um número',
            'any.required': 'O campo NUMEROCOLETOR é obrigatório'
        }),
})

export default atualizarColetorBalancoSchema;    
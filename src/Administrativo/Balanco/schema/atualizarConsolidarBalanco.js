import Joi from 'joi';

const atualizarConsolidarBalancoSchema = Joi.object({
    IDRESUMOBALANCO: Joi.number().required()
        .messages({
            'number.base': 'O campo IDRESUMOBALANCO deve ser um número',
            'any.required': 'O campo IDRESUMOBALANCO é obrigatório'
        }),
    IDEMPRESA: Joi.number().required()
        .messages({
            'number.base': 'O campo IDEMPRESA deve ser um número',
            'any.required': 'O campo IDEMPRESA é obrigatório'
        }),
})

export default atualizarConsolidarBalancoSchema;    
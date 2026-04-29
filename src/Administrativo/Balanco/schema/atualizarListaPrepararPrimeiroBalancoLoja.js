import Joi from 'joi';

const atualizarPrepararLojaPrimeiroBalancoSchema = Joi.object({

    IDEMPRESA: Joi.number().required()
        .messages({
            'number.base': 'O campo IDEMPRESA deve ser um número',
            'any.required': 'O campo IDEMPRESA é obrigatório'
        }),
})

export default atualizarPrepararLojaPrimeiroBalancoSchema;    
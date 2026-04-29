import Joi from 'joi';

const updateConfirmarPrestacaoContasSchema = Joi.object({
    IDRESUMOBALANCO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOBALANCO deve ser um número',
        'number.integer': 'IDRESUMOBALANCO deve ser um número inteiro',
        'any.required': 'IDRESUMOBALANCO é um campo obrigatório'
    }),

});

export default updateConfirmarPrestacaoContasSchema;

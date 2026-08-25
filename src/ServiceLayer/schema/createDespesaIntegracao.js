import Joi from 'joi';

const createDespesaIntegracaoSchema = Joi.object({
    IDDESPESASLOJA: Joi.number().required()
        .messages({
            'number.base': 'IDDESPESASLOJA deve ser um número',
            'any.required': 'IDDESPESASLOJA é obrigatório'
        }),
    IDFUNCIONARIO: Joi.number().required()
        .messages({
            'number.base': 'IDFUNCIONARIO deve ser um número',
            'any.required': 'IDFUNCIONARIO é obrigatório'
        })
});

export default createDespesaIntegracaoSchema;

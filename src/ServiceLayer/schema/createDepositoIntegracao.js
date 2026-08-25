import Joi from 'joi';

const createDepositoIntegracaoSchema = Joi.object({
    IDDEPOSITOLOJA: Joi.number().required()
        .messages({
            'number.base': 'IDDEPOSITOLOJA deve ser um número',
            'any.required': 'IDDEPOSITOLOJA é obrigatório'
        })
});

export default createDepositoIntegracaoSchema;

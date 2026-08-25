import Joi from 'joi';

const createPagamentoPixIntegracaoSchema = Joi.object({
    IDVENDAPAGAMENTO: Joi.number().required()
        .messages({
            'number.base': 'IDVENDAPAGAMENTO deve ser um número',
            'any.required': 'IDVENDAPAGAMENTO é obrigatório'
        })
});

export default createPagamentoPixIntegracaoSchema;

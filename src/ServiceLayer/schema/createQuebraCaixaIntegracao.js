import Joi from 'joi';

const createQuebraCaixaIntegracaoSchema = Joi.object({
    IDQUEBRACAIXA: Joi.number().required()
        .messages({
            'number.base': 'IDQUEBRACAIXA deve ser um número',
            'any.required': 'IDQUEBRACAIXA é obrigatório'
        }),
    IDFUNCIONARIO: Joi.number().required()
        .messages({
            'number.base': 'IDFUNCIONARIO deve ser um número',
            'any.required': 'IDFUNCIONARIO é obrigatório'
        })
});

export default createQuebraCaixaIntegracaoSchema;

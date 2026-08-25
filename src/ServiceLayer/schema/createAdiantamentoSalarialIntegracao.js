import Joi from 'joi';

const createAdiantamentoSalarialIntegracaoSchema = Joi.object({
    IDADIANTAMENTOSALARIO: Joi.number().required()
        .messages({
            'number.base': 'IDADIANTAMENTOSALARIO deve ser um número',
            'any.required': 'IDADIANTAMENTOSALARIO é obrigatório'
        }),
    IDFUNCIONARIO: Joi.number().required()
        .messages({
            'number.base': 'IDFUNCIONARIO deve ser um número',
            'any.required': 'IDFUNCIONARIO é obrigatório'
        })
});

export default createAdiantamentoSalarialIntegracaoSchema;

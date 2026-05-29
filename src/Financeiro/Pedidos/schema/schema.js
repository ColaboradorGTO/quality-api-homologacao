import Joi from 'joi';

const schemaPedidos = Joi.object({

    DADO: Joi.number().integer()
        .messages({
            'number.base': 'DADO deve ser um número inteiro',
            'any.required': 'DADO da empresa é obrigatório'
        }),

});

export default schemaPedidos;
import Joi from 'joi';

const identificadorSchema = Joi.alternatives().try(
    Joi.number(),
    Joi.string().trim().min(1)
).required();

const createAlterarVendasPrazoExcedidoSchema = Joi.object({
    DIASAPOSCOMPRAR: Joi.number().required()
        .messages({
            'number.base': 'DIASAPOSCOMPRAR deve ser um número',
            'any.required': 'DIASAPOSCOMPRAR é obrigatório'
        }),
    IDPRODUTO: identificadorSchema.messages({
        'alternatives.types': 'IDPRODUTO deve ser um número ou uma string',
        'any.required': 'IDPRODUTO é obrigatório'
    }),
    IDVENDA: identificadorSchema.messages({
        'alternatives.types': 'IDVENDA deve ser um número ou uma string',
        'any.required': 'IDVENDA é obrigatório'
    }),
    IDVENDADETALHE: identificadorSchema.messages({
        'alternatives.types': 'IDVENDADETALHE deve ser um número ou uma string',
        'any.required': 'IDVENDADETALHE é obrigatório'
    }),
    MOTIVOEXCECAO: Joi.string().trim().required()
        .messages({
            'string.base': 'MOTIVOEXCECAO deve ser uma string',
            'string.empty': 'MOTIVOEXCECAO é obrigatório',
            'any.required': 'MOTIVOEXCECAO é obrigatório'
        }),
    QTD: Joi.number().required()
        .messages({
            'number.base': 'QTD deve ser um número',
            'any.required': 'QTD é obrigatório'
        }),
    TIPOTROCA: Joi.string().trim().required()
        .messages({
            'string.base': 'TIPOTROCA deve ser uma string',
            'string.empty': 'TIPOTROCA é obrigatório',
            'any.required': 'TIPOTROCA é obrigatório'
        }),
    USERAUTORIZADOR: identificadorSchema.messages({
        'alternatives.types': 'USERAUTORIZADOR deve ser um número ou uma string',
        'any.required': 'USERAUTORIZADOR é obrigatório'
    }),
    VRPRODUTO: Joi.number().required()
        .messages({
            'number.base': 'VRPRODUTO deve ser um número',
            'any.required': 'VRPRODUTO é obrigatório'
        }),
    VRTOTALLIQUIDO: Joi.number().required()
        .messages({
            'number.base': 'VRTOTALLIQUIDO deve ser um número',
            'any.required': 'VRTOTALLIQUIDO é obrigatório'
        })
});

export default createAlterarVendasPrazoExcedidoSchema;

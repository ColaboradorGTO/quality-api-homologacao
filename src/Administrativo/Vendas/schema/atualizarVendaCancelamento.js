import Joi from 'joi';

const atualizarVendaCancelamentoSchema = Joi.object({
    IDVENDA: Joi.string().required()
    .messages({
        'string.base': 'IDVENDA deve ser uma string.',
        'any.required': 'IDVENDA é um campo obrigatório.'
    }),
    IDUSUARIOCANCELAMENTO: Joi.number().allow('')
    .messages({
        'number.base': 'IDUSUARIOCANCELAMENTO deve ser um número.',
    }),
    TXTMOTIVOCANCELAMENTO: Joi.string()
    .messages({
        'string.base': 'TXTMOTIVOCANCELAMENTO deve ser uma string.',
    }),

})

export default atualizarVendaCancelamentoSchema;
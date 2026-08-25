import Joi from 'joi';

const updateFaturaSchema = Joi.array()
    .items(Joi.object().min(1).unknown(true))
    .min(1)
    .required()
    .messages({
        'array.base': 'Os dados da fatura devem ser enviados em uma lista',
        'array.min': 'Informe ao menos uma fatura',
        'any.required': 'Os dados da fatura são obrigatórios'
    });

export default updateFaturaSchema;

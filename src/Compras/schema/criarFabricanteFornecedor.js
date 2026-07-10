import Joi from 'joi';

const criarFabricanteFornecedorSchema = Joi.object({
    IDFABRICANTE: Joi.number().required()
    .messages({
        'number.base': 'IDFABRICANTE deve ser um número',
        'any.required': 'IDFABRICANTE é obrigatório'
    }),
    IDFORNECEDOR: Joi.number().required()
    .messages({
        'number.base': 'IDFORNECEDOR deve ser um número',
        'any.required': 'IDFORNECEDOR é obrigatório'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default criarFabricanteFornecedorSchema;
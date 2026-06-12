import Joi from 'joi';

const criarFornecedorFabricanteSchema = Joi.object({
    IDFORNECEDOR: Joi.string().allow('').required()
    .messages({
        'string.base': 'IDFORNECEDOR deve ser uma string',
        'any.required': 'IDFORNECEDOR é obrigatório'
    }),
    IDFABRICANTE: Joi.string().allow('')
    .messages({
        'string.base': 'IDFABRICANTE deve ser uma string',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default criarFornecedorFabricanteSchema;
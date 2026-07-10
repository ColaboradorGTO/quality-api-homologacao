import Joi from 'joi';

const criarFornecedorFabricanteSchema = Joi.object({
    IDFORNECEDOR: Joi.number().allow(null)
    .messages({
        'number.base': 'IDFORNECEDOR deve ser um número',
        'any.required': 'IDFORNECEDOR é obrigatório'
    }),
    IDFABRICANTE: Joi.number().allow(null)
    .messages({
        'number.base': 'IDFABRICANTE deve ser um número',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default criarFornecedorFabricanteSchema;
import Joi from 'joi';

const atualizarFornecedorFabricanteSchema = Joi.object({
    IDFABRICANTEFORN: Joi.string().allow('')
    .messages({
        'string.base': 'IDFABRICANTEFORN deve ser uma string',
    }),
    IDFORNECEDOR: Joi.string().allow('')
    .messages({
        'string.base': 'IDFORNECEDOR deve ser uma string',
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

export default atualizarFornecedorFabricanteSchema;
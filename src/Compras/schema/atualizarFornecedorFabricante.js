import Joi from 'joi';

const atualizarFornecedorFabricanteSchema = Joi.object({
    IDFABRICANTEFORN: Joi.number().integer()
    .messages({
        'number.base': 'IDFABRICANTEFORN deve ser um número inteiro',
    }),
    IDFORNECEDOR: Joi.number().integer()
    .messages({
        'number.base': 'IDFORNECEDOR deve ser um número inteiro',
    }),
    IDFABRICANTE: Joi.number().integer()
    .messages({
        'number.base': 'IDFABRICANTE deve ser um número inteiro',
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarFornecedorFabricanteSchema;
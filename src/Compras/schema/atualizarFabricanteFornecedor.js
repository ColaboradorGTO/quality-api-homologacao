import Joi from 'joi';

const atualizarFabricanteFornecedorSchema = Joi.object({
    IDFABRICANTEFORN: Joi.number().required()
    .messages({
        'number.base': 'IDFABRICANTEFORN deve ser um número',
        'any.required': 'IDFABRICANTEFORN é obrigatório'
    }),
    IDFABRICANTE: Joi.number().required()
    .messages({
        'number.base': 'IDFABRICANTE deve ser um número'
    }),
    IDFORNECEDOR: Joi.number().required()
    .messages({
        'number.base': 'IDFORNECEDOR deve ser um número'
    }),
    STATIVO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'string.max': 'STATIVO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarFabricanteFornecedorSchema;
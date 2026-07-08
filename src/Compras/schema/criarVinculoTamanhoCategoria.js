import Joi from 'joi';

const criarVinculoTamanhoCategoriaSchema = Joi.object({
    IDCATEGORIAPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDCATEGORIAPEDIDO deve ser um número inteiro',
        'any.required': 'ID da categoria do pedido é obrigatório'
    }),
    IDTAMANHO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDTAMANHO deve ser um número inteiro',
        'any.required': 'ID do tamanho é obrigatório'
    }),
    STATIVO: Joi.string().valid('True', 'False').required()
    .messages({
        'string.base': 'STATIVO deve ser uma string',
        'any.only': 'STATIVO deve ser "True" ou "False"',
        'any.required': 'STATIVO é obrigatório'
    })
});

export default criarVinculoTamanhoCategoriaSchema; 
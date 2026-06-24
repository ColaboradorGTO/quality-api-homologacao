import Joi from 'joi';

const criarDetalhePedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
        'any.required': 'ID do resumo do pedido é obrigatório'
    }),
    IDCOR: Joi.number().integer().required()
    .messages({
        'number.base': 'IDCOR deve ser um número inteiro',
        'any.required': 'ID da cor é obrigatório'
    }),
    IDSUBGRUPOESTRUTURA: Joi.number().integer().required()
    .messages({
        'number.base': 'IDSUBGRUPOESTRUTURA deve ser um número inteiro',
        'any.required': 'ID do subgrupo de estrutura é obrigatório'
    }),
    IDCATEGORIAPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDCATEGORIAPEDIDO deve ser um número inteiro',
        'any.required': 'ID da categoria do pedido é obrigatório'
    }),
    IDTIPOTECIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDTIPOTECIDO deve ser um número inteiro',
        'any.required': 'ID do tipo de tecido é obrigatório'
    }),
    IDESTILO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDESTILO deve ser um número inteiro',
        'any.required': 'ID do estilo é obrigatório'
    }),
    IDFABRICANTE: Joi.number().integer()
    .messages({
        'number.base': 'IDFABRICANTE deve ser um número inteiro',
        'any.required': 'ID do fabricante é obrigatório'
    }),
    IDLOCALEXPOSICAO: Joi.number().integer()
    .messages({
        'number.base': 'IDLOCALEXPOSICAO deve ser um número inteiro',
        'any.required': 'ID do local de exposição é obrigatório'
    }),
    NUREF: Joi.string().allow('').max(50).optional()
    .messages({
        'string.base': 'NUREF deve ser uma string',
        'string.max': 'NUREF deve ter no máximo 50 caracteres'
    }),
    DSPRODUTO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'DSPRODUTO deve ser uma string',
        'string.max': 'DSPRODUTO deve ter no máximo 500 caracteres'
    }),
    QTDTOTAL: Joi.number().integer().optional()
    .messages({
        'number.base': 'QTDTOTAL deve ser um número inteiro',
    }),
    NUCAIXA: Joi.number().integer()
    .messages({
        'number.base': 'NUCAIXA deve ser um número inteiro',
    }),
    UND: Joi.number().integer()
    .messages({
        'number.base': 'UND deve ser um número inteiro',
    }),
    VRUNITBRUTO: Joi.number()
    .messages({
        'number.base': 'VRUNITBRUTO deve ser um número',
    }),
    DESC01: Joi.number().optional()
    .messages({
        'number.base': 'DESC01 deve ser um número',
    }),
    DESC02: Joi.number().optional()
    .messages({
        'number.base': 'DESC02 deve ser um número',
    }),
    DESC03: Joi.number().optional()
    .messages({
        'number.base': 'DESC03 deve ser um número',
    }),
    VRUNITLIQUIDO: Joi.number().optional()
    .messages({
        'number.base': 'VRUNITLIQUIDO deve ser um número',
    }),
    VRVENDA: Joi.number().optional()
    .messages({
        'number.base': 'VRVENDA deve ser um número',
    }),
    VRTOTAL: Joi.number()
    .messages({
        'number.base': 'VRTOTAL deve ser um número',
    }),
    STRECEBIDO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STRECEBIDO deve ser uma string',
        'string.max': 'STRECEBIDO deve ter no máximo 10 caracteres'
    }),
    STECOMMERCE: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STECOMMERCE deve ser uma string',
        'string.max': 'STECOMMERCE deve ter no máximo 10 caracteres'
    }),
    STREDESOCIAL: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STREDESOCIAL deve ser uma string',
        'string.max': 'STREDESOCIAL deve ter no máximo 10 caracteres'
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),
    VRCUSTOPRODATUAL: Joi.number()
    .messages({
        'number.base': 'VRCUSTOPRODATUAL deve ser um número',
    }),
    VRVENDAPRODATUAL: Joi.number()
    .messages({
        'number.base': 'VRVENDAPRODATUAL deve ser um número',
    }),
    OBSPRODUTO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'OBSPRODUTO deve ser uma string',
        'string.max': 'OBSPRODUTO deve ter no máximo 500 caracteres'
    }),
    STTRANSFORMADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STTRANSFORMADO deve ser uma string',
        'string.max': 'STTRANSFORMADO deve ter no máximo 10 caracteres'
    }),
    IDCATEGORIAS: Joi.number().integer().required()
    .messages({
        'number.base': 'IDCATEGORIAS deve ser um número inteiro',
        'any.required': 'ID da categoria é obrigatório'
    }),
    STREPOSICAO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STREPOSICAO deve ser uma string',
        'string.max': 'STREPOSICAO deve ter no máximo 10 caracteres'
    }),
    NUCODBARRAS: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'NUCODBARRAS deve ser uma string',
        'string.max': 'NUCODBARRAS deve ter no máximo 500 caracteres'
    }),
    IDPRODUTO: Joi.string().allow('').optional(),
    IDRESPCADASTRO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESPCADASTRO deve ser um número inteiro',
        'any.required': 'IDRESPCADASTRO é obrigatório'
    }),
    GRADE: Joi.array().items(
        Joi.object({
            IDDETALHEPEDIDOGRADE: Joi.number().allow(null).optional(),
            IDTAMANHO: Joi.number().allow(null).optional(),
            INDICETAMANHO: Joi.number().allow(null).optional(),
            QTD: Joi.number().allow(null).optional(),
        })
    ).optional().default([])
    .messages({
        'array.base': 'GRADE deve ser um array de objetos',
        'any.required': 'GRADE é obrigatório'
    }),
    STPEDIDOPORINTEMEDIARIO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STPEDIDOPORINTEMEDIARIO deve ser uma string',
        'string.max': 'STPEDIDOPORINTEMEDIARIO deve ter no máximo 10 caracteres'
    })
});

export default criarDetalhePedidoSchema;
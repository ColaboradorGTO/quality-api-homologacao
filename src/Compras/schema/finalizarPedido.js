import Joi from 'joi';

const atualizarFinalizandoPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().integer().required()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número inteiro',
        'any.required': 'ID do resumo do pedido é obrigatório'
    }),
    IDGRUPOEMPRESARIAL: Joi.number().integer()
    .messages({
        'number.base': 'IDGRUPOEMPRESARIAL deve ser um número inteiro'
    }),
    IDSUBGRUPOEMPRESARIAL: Joi.number().integer()
    .messages({
        'number.base': 'IDSUBGRUPOEMPRESARIAL deve ser um número inteiro',
    }),
    IDCOMPRADOR: Joi.number().integer()
    .messages({
        'number.base': 'IDCOMPRADOR deve ser um número inteiro',
    }),
    IDCONDICAOPAGAMENTO: Joi.number().integer()
    .messages({
        'number.base': 'IDCONDICAOPAGAMENTO deve ser um número inteiro',
    }),
    IDFORNECEDOR: Joi.number().integer()
    .messages({
        'number.base': 'IDFORNECEDOR deve ser um número inteiro',
    }),
    IDTRANSPORTADORA: Joi.number().integer()
    .messages({
        'number.base': 'IDTRANSPORTADORA deve ser um número inteiro',
    }),
    IDANDAMENTO: Joi.number().integer()
    .messages({
        'number.base': 'IDANDAMENTO deve ser um número inteiro',
    }),
    MODPEDIDO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'MODPEDIDO deve ser uma string',
    }),
    NOVENDEDOR: Joi.string().allow('').optional()
    .messages({
        'string.base': 'NOVENDEDOR deve ser uma string',
    }),
    EEMAILVENDEDOR: Joi.string().allow('').optional()
    .messages({
        'string.base': 'EEMAILVENDEDOR deve ser uma string',
    }),
    DTPEDIDO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTPEDIDO deve ser uma string',
    }),
    DTPREVENTREGA: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTPREVENTREGA deve ser uma string',
    }),
    TPFRETE: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPFRETE deve ser uma string',
    }),
    DESCPERC01: Joi.number()
    .messages({
        'number.base': 'DESCPERC01 deve ser um número',
    }),
    DESCPERC02: Joi.number()
    .messages({
        'number.base': 'DESCPERC02 deve ser um número',
    }),
    DESCPERC03: Joi.number()
    .messages({
        'number.base': 'DESCPERC03 deve ser um número',
    }),
    PERCCOMISSAO: Joi.number()
    .messages({
        'number.base': 'PERCCOMISSAO deve ser um número',
    }),
    VRTOTALLIQUIDO: Joi.number()
    .messages({
        'number.base': 'VRTOTALLIQUIDO deve ser um número',
    }),
    OBSPEDIDO: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'OBSPEDIDO deve ser uma string',
        'string.max': 'OBSPEDIDO deve ter no máximo 500 caracteres'
    }),
    OBSPEDIDO2: Joi.string().allow('').max(500).optional()
    .messages({
        'string.base': 'OBSPEDIDO2 deve ser uma string',
        'string.max': 'OBSPEDIDO2 deve ter no máximo 500 caracteres'
    }),
    DTFECHAMENTOPEDIDO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTFECHAMENTOPEDIDO deve ser uma string',
    }),
    DTCADASTRO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'DTCADASTRO deve ser uma string',
    }),
    TPARQUIVO: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPARQUIVO deve ser uma string',
    }),
    STDISTRIBUIDO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STDISTRIBUIDO deve ser uma string',
        'string.max': 'STDISTRIBUIDO deve ter no máximo 10 caracteres'
    }),
    STAGRUPAPRODUTO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STAGRUPAPRODUTO deve ser uma string',
        'string.max': 'STAGRUPAPRODUTO deve ter no máximo 10 caracteres'
    }),
    STCANCELADO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STCANCELADO deve ser uma string',
        'string.max': 'STCANCELADO deve ter no máximo 10 caracteres'
    }),
    TPFISCAL: Joi.string().allow('').optional()
    .messages({
        'string.base': 'TPFISCAL deve ser uma string',
        'string.max': 'TPFISCAL deve ter no máximo 10 caracteres'
    }),
    STRASCUNHO: Joi.string().allow('').max(10).optional()
    .messages({
        'string.base': 'STRASCUNHO deve ser uma string',
        'string.max': 'STRASCUNHO deve ter no máximo 10 caracteres'
    }),
});

export default atualizarFinalizandoPedidoSchema;
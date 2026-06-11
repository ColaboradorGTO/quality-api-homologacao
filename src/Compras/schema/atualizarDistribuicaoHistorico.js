import Joi from 'joi';

const atualizarDistribuicaoHistoricoSchema = Joi.object({
    IDDISTRIBUICAOCOMPRASHISTORICO: Joi.number().optional()
    .messages({
        'number.base': 'IDDISTRIBUICAOCOMPRASHISTORICO deve ser um número inteiro',
    }),
    IDPEDIDOCOMPRA: Joi.number().integer().required()
    .messages({
        'number.base': 'IDPEDIDOCOMPRA deve ser um número inteiro',
        'any.required': 'ID do pedido de compra é obrigatório'
    }),
    IDEMPRESA: Joi.number().integer()
    .messages({
        'number.base': 'IDEMPRESA deve ser um número inteiro',
    }),
    IDFILIAL: Joi.number().integer()
    .messages({
        'number.base': 'IDFILIAL deve ser um número inteiro',
    }),
    
    CODBARRAS: Joi.string().allow('').max(200).optional()
    .messages({
        'string.base': 'CODBARRAS deve ser uma string',
        'string.max': 'CODBARRAS deve ter no máximo 200 caracteres'
    }),
    QTDSUGESTAOALTERACAOHISTORICO: Joi.number().integer()
    .messages({
        'number.base': 'QTDSUGESTAOALTERACAOHISTORICO deve ser um número inteiro',
    }),
    IDUSUARIOALTERACAO: Joi.number().optional()
    .messages({
        'number.base': 'IDUSUARIOALTERACAO deve ser um número inteiro'
    }),
    IDUSUARIO: Joi.number().optional()
    .messages({
        'number.base': 'IDUSUARIO deve ser um número inteiro',
        'any.required': 'ID do usuário é obrigatório'
    }),
    FINALIZAR: Joi.number().optional()
    .messages({
        'number.base': 'FINALIZAR deve ser um número',
    }),

});

export default atualizarDistribuicaoHistoricoSchema;
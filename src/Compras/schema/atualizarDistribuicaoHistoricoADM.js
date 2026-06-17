import Joi from 'joi';

const atualizarDistribuicaoHistoricoADMSchema = Joi.object({
    IDPEDIDOCOMPRA: Joi.number().integer().required()
    .messages({
        'number.base': 'IDPEDIDOCOMPRA deve ser um número inteiro',
        'any.required': 'ID do pedido de compra é obrigatório'
    }),
    IDUSUARIOA: Joi.number().optional()
    .messages({
        'number.base': 'IDUSUARIO deve ser um número inteiro'
    }),
    FINALIZAR: Joi.number().optional()
    .messages({
        'number.base': 'FINALIZAR deve ser um número',
    }),

});

export default atualizarDistribuicaoHistoricoADMSchema;
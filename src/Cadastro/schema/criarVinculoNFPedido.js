import Joi from 'joi';

const criarVinculoNFPedidoSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number()
    .messages({
        'number.base': 'IDRESUMOPEDIDO deve ser um número',
    }),
    IDRESUMOENTRADA: Joi.number()
    .messages({
        'number.base': 'IDRESUMOENTRADA deve ser um número',
    })
});

export default criarVinculoNFPedidoSchema;
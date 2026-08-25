import Joi from 'joi';

const atualizarOrdemTransferenciaSchema = Joi.object({
    IDPRODUTO: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    QTDEXPEDICAO: Joi.number().allow(null),
    QTDRECEPCAO: Joi.number().allow(null),
    QTDDIFERENCA: Joi.number().allow(null),
    QTDAJUSTE: Joi.number().required(),
    VLRUNITVENDA: Joi.number().allow(null),
    VLRUNITCUSTO: Joi.number().allow(null),
    STFALTA: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow(null),
    STSOBRA: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow(null),
    IDSTATUSOT: Joi.number().allow(null),
    IDRESUMOOT: Joi.number().required()
});

export default atualizarOrdemTransferenciaSchema;

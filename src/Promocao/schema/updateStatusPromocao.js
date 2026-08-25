import Joi from 'joi';

const updateStatusPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).required(),
    IDEMPRESA: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null),
    IDEMPRESAPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null)
});

export default updateStatusPromocaoSchema;

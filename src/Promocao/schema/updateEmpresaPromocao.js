import Joi from 'joi';

const updateEmpresaPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    IDEMPRESA: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null),
    IDEMPRESAPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null)
});

export default updateEmpresaPromocaoSchema;

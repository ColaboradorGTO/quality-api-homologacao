import Joi from 'joi';

const updateProdutoDestinoPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    IDPRODUTODESTINO: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null)
});

export default updateProdutoDestinoPromocaoSchema;

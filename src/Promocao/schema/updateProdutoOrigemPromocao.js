import Joi from 'joi';

const updateProdutoOrigemPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    IDPRODUTOORIGEM: Joi.alternatives().try(Joi.number(), Joi.string()).allow('', null)
});

export default updateProdutoOrigemPromocaoSchema;

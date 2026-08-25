import Joi from 'joi';

const createMecanicaSchema = Joi.object({
    DESCRICAO: Joi.string().allow('', null),
    APLICACAODESTINO: Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null),
    MECANICA: Joi.string().allow('', null),
    TIPODESCONTO: Joi.string().allow('', null)
});

export default createMecanicaSchema;

import Joi from 'joi';

const criarStatusDivergenciaSchema = Joi.object({
    DESCRICAODIVERGENCIA: Joi.string().trim().required(),
    IDUSRCRIACAO: Joi.number().required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).required()
});

export default criarStatusDivergenciaSchema;

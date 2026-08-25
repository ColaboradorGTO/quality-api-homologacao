import Joi from 'joi';

const atualizarStatusDivergenciaSchema = Joi.object({
    IDSTATUSDIVERGENCIA: Joi.number().required(),
    DESCRICAODIVERGENCIA: Joi.string().trim().required(),
    STATIVO: Joi.alternatives().try(Joi.string(), Joi.boolean()).required()
});

export default atualizarStatusDivergenciaSchema;

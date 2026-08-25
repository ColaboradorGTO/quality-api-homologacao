import Joi from 'joi';
import promocaoFields from './promocaoFields.js';

const createPromocaoSubGrupoSchema = Joi.object({
    ...promocaoFields,
    IDSUBGRUPOEMDESTINO: Joi.alternatives().try(Joi.number(), Joi.string()).required(),
    IDSUBGRUPOEMORIGEM: Joi.alternatives().try(Joi.number(), Joi.string()).required()
});

export default createPromocaoSubGrupoSchema;

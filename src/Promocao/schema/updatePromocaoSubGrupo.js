import Joi from 'joi';
import promocaoFields from './promocaoFields.js';

const updatePromocaoSubGrupoSchema = Joi.object({
    ...promocaoFields,
    IDRESUMOPROMOCAOMARKETING: Joi.alternatives().try(Joi.number(), Joi.string()).required()
});

export default updatePromocaoSubGrupoSchema;

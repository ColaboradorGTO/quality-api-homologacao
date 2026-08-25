import Joi from 'joi';

const updateDetalheFaturaSchema = Joi.object({
    IDDETALHEFATURA: Joi.number().integer().required(),
    TXTMOTIVOCANCELAMENTO: Joi.string().trim().required(),
    STCANCELADO: Joi.string().trim().required(),
    IDUSRCACELAMENTO: Joi.number().integer().required()
});

export default updateDetalheFaturaSchema;

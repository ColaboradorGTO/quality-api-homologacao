import Joi from 'joi';

const createDetalheFaturaSchema = Joi.object({
    IDEMPRESA: Joi.number().integer().required(),
    IDFUNCIONARIO: Joi.number().integer().required(),
    IDDETALHEFATURALOCAL: Joi.number().integer().allow(null),
    IDCAIXAWEB: Joi.number().integer().allow(null),
    IDCAIXALOCAL: Joi.number().integer().allow(null),
    NUESTABELECIMENTO: Joi.string().allow('', null),
    NUCARTAO: Joi.string().allow('', null),
    DTPROCESSAMENTO: Joi.string().allow('', null),
    HRPROCESSAMENTO: Joi.string().allow('', null),
    NUNSU: Joi.string().allow('', null),
    NUNSUHOST: Joi.string().allow('', null),
    IDMOVIMENTOCAIXAWEB: Joi.alternatives().try(Joi.string(), Joi.number()).allow(null),
    NUCODAUTORIZACAO: Joi.string().trim().required(),
    VRRECEBIDO: Joi.number().allow(null),
    DTHRMIGRACAO: Joi.string().allow('', null),
    STCANCELADO: Joi.string().allow('', null),
    IDUSRCACELAMENTO: Joi.number().integer().allow(null)
});

export default createDetalheFaturaSchema;

import Joi from 'joi';

const updateFuncionarioDepartamentoSchema = Joi.object({
    ID: Joi.number().required(),
    DEPARTAMENTO: Joi.string().allow('', null)
});

export default updateFuncionarioDepartamentoSchema;

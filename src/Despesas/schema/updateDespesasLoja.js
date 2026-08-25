import Joi from "joi";

const updateDespesasLojaSchema = Joi.array()
    .items(Joi.object().min(1).unknown(true))
    .min(1)
    .required();

export default updateDespesasLojaSchema;

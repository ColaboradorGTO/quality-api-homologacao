import Joi from "joi";

const ExtratoSchema = Joi.object({
    DADOS: Joi.number().allow()
    .messages({
        "number.base": "O DADOS deve ser um número"
    }),
});

export default ExtratoSchema;
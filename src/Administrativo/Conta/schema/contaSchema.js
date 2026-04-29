import Joi from "joi";

const ContaSchema = Joi.object({
    DADOS: Joi.number().allow()
    .messages({
        "number.base": "O DADOS deve ser um número"
    }),
});

export default ContaSchema;
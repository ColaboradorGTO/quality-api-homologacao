import Joi from "joi";

const nomeSchema = Joi.object({
    DADO: Joi.number().integer().required()
        .messages({
            "any.required": "O DADO é obrigatório",
            "number.base": "O DADO deve ser um número"
        }),
});

export default nomeSchema;

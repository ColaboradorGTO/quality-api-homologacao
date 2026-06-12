import Joi from "joi";

const detalhesSchema = Joi.object({
    DADO: Joi.string().required()
        .messages({
            "any.required": "DADO é obrigatório",
            "string.base": "DADO  deve ser uma string"
        }),
});


export default detalhesSchema;
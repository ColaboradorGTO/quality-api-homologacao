import Joi from "joi";

const nomeSchema = Joi.object({
    DADOS: Joi.string().required()
        .messages({
            "any.required": "DADOS é obrigatório",
            "string.base": "DADOS  deve ser uma string"
        }),
});


export default nomeSchema;
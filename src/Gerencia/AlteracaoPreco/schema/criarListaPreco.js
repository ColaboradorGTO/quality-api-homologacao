import Joi from "joi";

const schemaGerencia = Joi.object({
    DADOS: Joi.string().required()
        .messages({
            "any.required": "DADOS é obrigatório",
            "string.base": "DADOS  deve ser uma string"
        }),

});


export default schemaGerencia;
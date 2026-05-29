import Joi from "joi";

const schemaFecharCaixaZerado = Joi.object({

    ID: Joi.string().required()
        .messages({
            "any.required": "ID é obrigatório",
            "string.base": "ID deve ser uma string"
        }),
});


export default schemaFecharCaixaZerado;


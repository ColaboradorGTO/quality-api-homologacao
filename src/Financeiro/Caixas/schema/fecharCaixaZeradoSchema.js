import Joi from "joi";

const fechaCaixaZeradoSchema = Joi.object({
    ID: Joi.string().required()
        .messages({
            "any.required": "ID é obrigatório",
            "string.base": "ID  deve ser uma string"
        }),
});


export default fechaCaixaZeradoSchema;
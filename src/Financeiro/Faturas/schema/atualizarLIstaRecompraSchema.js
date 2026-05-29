import Joi from "joi";

const schemaAtualizarListaRecompra = Joi.object({
    IDDETALHEFATURA: Joi.number().required()
        .messages({
            "any.required": "IDDETALHEFATURA é obrigatório",
            "number.base": "IDDETALHEFATURA  deve ser um número"
        }),

    STRECOMPRA: Joi.string().required()
        .messages({
            "any.required": "STRECOMPRA é obrigatório",
            "string.base": "STRECOMPRA  deve ser uma string"
        }),

});


export default schemaAtualizarListaRecompra;
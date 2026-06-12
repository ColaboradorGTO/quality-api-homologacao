import Joi from "joi";

const schemaAtualizarListaFatura = Joi.object({
    NUCODAUTORIZACAO: Joi.string().required()
        .messages({
            "any.required": "NUCODAUTORIZACAO é obrigatório",
            "string.base": "NUCODAUTORIZACAO  deve ser uma string"
        }),

    VRRECEBIDO: Joi.number().required()
        .messages({
            "any.required": "VRRECEBIDO é obrigatório",
            "number.base": "VRRECEBIDO  deve ser uma numero"
        }),

    IDDETALHEFATURA: Joi.number().required()
        .messages({
            "any.required": "IDDETALHEFATURA é obrigatório",
            "number.base": "IDDETALHEFATURA  deve ser uma numero"
        }),


});


export default schemaAtualizarListaFatura;
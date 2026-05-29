import Joi from "joi";

const schemaAtualizarStatusFatura = Joi.object({
    STCONFERIDO: Joi.string().required()
        .messages({
            "any.required": "STCONFERIDO é obrigatório",
            "string.base": "STCONFERIDO  deve ser uma string"
        }),

    DATA_COMPENSACAO: Joi.string().required()
        .messages({
            "any.required": "DATA_COMPENSACAO é obrigatório",
            "string.base": "DATA_COMPENSACAO  deve ser uma string"
        }),

    IDDETALHEFATURA: Joi.number().required()
        .messages({
            "any.required": "IDDETALHEFATURA é obrigatório",
            "number.base": "IDDETALHEFATURA  deve ser uma numero"
        }),


});


export default schemaAtualizarStatusFatura;
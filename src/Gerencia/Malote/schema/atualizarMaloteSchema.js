import Joi from "joi";

const schemaAtualizarMalotesPorLoja = Joi.object({
    IDMALOTE: Joi.number().required()
        .messages({
            "any.required": "IDMALOTE é obrigatório",
            "number.base": "IDMALOTE  deve ser um numero"
        }),

    IDUSERULTIMAALTERACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSERULTIMAALTERACAO é obrigatório",
            "number.base": "IDUSERULTIMAALTERACAO  deve ser um numero"
        }),

    STATUS: Joi.string().allow('')
        .messages({
            "any.required": "STATUS é obrigatório",
            "string.base": "STATUS deve ser uma string"
        }),

});

export default schemaAtualizarMalotesPorLoja;
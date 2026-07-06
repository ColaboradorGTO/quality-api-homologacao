import Joi from "joi";

const schemaAtualizarVendasPixStatusConferido = Joi.object({
    STCONFERIDO: Joi.string().required()
        .messages({
            "any.required": "STCONFERIDO é obrigatório",
            "string.base": "STCONFERIDO  deve ser uma string"
        }),

    DATA_COMPENSACAO: Joi.string().required()
        .messages({
            "any.required": "DATA_COMPENSACAO é obrigatório",
            "string.base": "DATA_COMPENSACAO  deve ser um string"
        }),

    IDVENDA: Joi.string().required()
        .messages({
            "any.required": "IDVENDA é obrigatório",
            "string.base": "IDVENDA deve ser uma string"
        }),
});


export default schemaAtualizarVendasPixStatusConferido;
import Joi from "joi";

const schemaStatusDespesaLoja = Joi.object({
    STCANCELADO: Joi.string().required()
        .messages({
            "any.required": "STCANCELADO é obrigatório",
            "string.base": "STCANCELADO  deve ser uma string"
        }),

    IDDESPESASLOJA: Joi.number().required()
        .messages({
            "any.required": "IDDESPESASLOJA é obrigatório",
            "number.base": "IDDESPESASLOJA  deve ser um número"
        }),
});

export default schemaStatusDespesaLoja;
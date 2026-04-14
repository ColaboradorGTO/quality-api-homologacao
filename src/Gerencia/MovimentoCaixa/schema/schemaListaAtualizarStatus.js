import Joi from "joi";

const schemaAtualizarStatus = Joi.object({
    IDSUPERVISOR: Joi.number().required()
        .messages({
            "any.required": "IDSUPERVISOR é obrigatório",
            "number.base": "IDSUPERVISOR  deve ser um numero"
        }),

    STCONFERIDO: Joi.string().required()
        .messages({
            "any.required": "STCONFERIDO é obrigatório",
            "string.base": "STCONFERIDO  deve ser uma string"
        }),

    ID: Joi.string().required()
        .messages({
            "any.required": "ID é obrigatório",
            "string.base": "ID deve ser uma string"
        }),

});


export default schemaAtualizarStatus;
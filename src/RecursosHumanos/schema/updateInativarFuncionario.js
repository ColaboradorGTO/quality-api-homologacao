import Joi from "joi";

const upadateInativarFuncionarioSchema = Joi.object({

    DATAULTIMAALTERACAO: Joi.string().required()
        .messages({
            "string.base": "DATAULTIMAALTERACAO must be a string",
            "any.required": "DATAULTIMAALTERACAO is required field"
        }),

    DATA_DEMISSAO: Joi.string().allow('', null)
        .messages({
            "string.base": "DATA_DEMISSAO must be a string",
            "any.required": "DATA_DEMISSAO is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),

    ID: Joi.number().required()
        .messages({
            "number.base": "ID must be a number",
            "any.required": "ID is required field"
        }),
});

export default upadateInativarFuncionarioSchema;


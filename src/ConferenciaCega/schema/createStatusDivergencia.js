import Joi from "joi";

const createStatusDivergenciaSchema = Joi.object({

    DESCRICAODIVERGENCIA: Joi.string().required()
        .messages({
            "string.base": "DESCRICAODIVERGENCIA must be a string",
            "any.required": "DESCRICAODIVERGENCIA is required field"
        }),

    IDUSRCRIACAO: Joi.number().required()
        .messages({
            "number.base": "IDPRODUTO must be a number",
            "any.required": "IDPRODUTO is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),
});

export default createStatusDivergenciaSchema;
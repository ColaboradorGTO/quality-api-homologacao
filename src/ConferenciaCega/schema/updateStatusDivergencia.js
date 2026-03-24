import Joi from "joi";

const updateStatusDivergenciaSchema = Joi.object({

    DESCRICAODIVERGENCIA: Joi.string().required()
        .messages({
            "string.base": "DESCRICAODIVERGENCIA must be a string",
            "any.required": "DESCRICAODIVERGENCIA is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
        }),

    IDSTATUSDIVERGENCIA: Joi.number().required()
        .messages({
            "number.base": "IDSTATUSDIVERGENCIA must be a number",
            "any.required": "IDSTATUSDIVERGENCIA is required field"
        }),

});

export default updateStatusDivergenciaSchema;
import Joi from "joi";

const updateStatusConferidoSchema = Joi.object({
    IDDEPOSITOLOJA: Joi.number().required()
        .messages({
            "number.base": "IDDEPOSITOLOJA must be a number",
            "any.required": "IDDEPOSITOLOJA is required field"
        }),

    STCONFERIDO: Joi.string().required()
        .messages({
            "string.base": "STCONFERIDO must be a string",
            "any.required": "STCONFERIDO is required field"
        }),

    DTCOMPENSACAO: Joi.string().allow("").required()
        .messages({
            "string.base": "DTCOMPENSACAO must be a string",
            "any.required": "DTCOMPENSACAO is required field"
        }),
});

export default updateStatusConferidoSchema;

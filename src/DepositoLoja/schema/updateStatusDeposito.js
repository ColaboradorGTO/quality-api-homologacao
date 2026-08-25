import Joi from "joi";

const updateStatusDepositoSchema = Joi.object({
    IDDEPOSITOLOJA: Joi.number().required()
        .messages({
            "number.base": "IDDEPOSITOLOJA must be a number",
            "any.required": "IDDEPOSITOLOJA is required field"
        }),

    STCANCELADO: Joi.string().required()
        .messages({
            "string.base": "STCANCELADO must be a string",
            "any.required": "STCANCELADO is required field"
        }),
});

export default updateStatusDepositoSchema;

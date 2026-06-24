import Joi from "joi";

const updateAdiantamentoStatusSchema = Joi.object({

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),
        
    IDADIANTAMENTOSALARIO: Joi.number().required()
        .messages({
            "number.base": "IDADIANTAMENTOSALARIO must be a number",
            "any.required": "IDADIANTAMENTOSALARIO is required field"
        }),
});

export default updateAdiantamentoStatusSchema;
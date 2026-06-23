import Joi from "joi";

const updateStatusQuebraCaixaSchema = Joi.object({

    IDQUEBRACAIXA: Joi.number().required()
        .messages({
            "number.base": "IDQUEBRACAIXA must be a number",
            "any.required": "IDQUEBRACAIXA is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),

});

export default updateStatusQuebraCaixaSchema;
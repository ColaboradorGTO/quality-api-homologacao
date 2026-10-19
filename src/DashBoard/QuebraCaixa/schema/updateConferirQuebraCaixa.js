import Joi from "joi";

const updateConferirQuebraCaixaSchema = Joi.object({

    IDQUEBRACAIXA: Joi.number().required()
        .messages({
            "number.base": "IDQUEBRACAIXA must be a number",
            "any.required": "IDQUEBRACAIXA is required field"
        }),

    STCONFERIDO: Joi.string().required()
        .messages({
            "string.base": "STCONFERIDO must be a string",
            "any.required": "STCONFERIDO is required field"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),


});

export default updateConferirQuebraCaixaSchema;
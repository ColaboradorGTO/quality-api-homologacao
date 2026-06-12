import Joi from "joi";

const schema = Joi.object({

    DADOS: Joi.number().required()
        .messages({
            "number.base": "DADOS must be a number",
            "any.required": "DADOS is required field"
        }),
});

export default schema;
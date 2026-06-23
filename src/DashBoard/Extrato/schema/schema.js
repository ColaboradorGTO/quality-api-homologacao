import Joi from "joi";

const schema = Joi.object({

    DADOS: Joi.number().required()
        .messages({
            "any.required": "DADOS é obrigatório",
            "number.base": "DADOS deve ser uma número"
        }),
});


export default schema;


import Joi from "joi";

const FaturaSchema = Joi.object({
    DADOS: Joi.number().allow()
        .messages({
            "number.base": "DADOS deve ser um número"
        }),
});

export default FaturaSchema;
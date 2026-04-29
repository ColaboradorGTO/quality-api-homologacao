import Joi from "joi";

const estoqueSchema = Joi.object({
    DADOS: Joi.number().required()
        .messages({
            "any.required": "O DADOS é obrigatório",
            "number.base": "O DADOS  deve ser um número"
        }),
})

export default estoqueSchema;
import Joi from "joi";

const criarMenuFilhoSchema = Joi.object({
    DSNOME: Joi.string().required()
        .messages({
            "any.required": "O DSNOME obrigatório",
            "string.base": "O DSNOME deve ser uma string"
        }),
    IDMENUPAI: Joi.number().required()
        .messages({
            "any.required": "O IDMENUPAI obrigatório",
            "number.base": "IDMENUPAI deve ser um number"
        }),
    URL: Joi.string().required()
        .messages({
            "any.required": "O URL obrigatório",
            "string.base": "URL deve ser uma string"
        }),

})

export default criarMenuFilhoSchema;


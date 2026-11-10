import Joi from "joi";

const atualizarPerfilUsuarioSchema = Joi.object({
    ADMINISTRADOR: Joi.string().required()
        .messages({
            "any.required": "O ADMINISTRADOR obrigatório",
            "string.base": "ADMINISTRADOR deve ser uma string"
        }),
    CRIAR: Joi.string().required()
        .messages({
            "any.required": "O CRIAR obrigatório",
            "string.base": "O CRIAR deve ser uma string"
        }),
    ALTERAR: Joi.string().required()
        .messages({
            "any.required": "O ALTERAR obrigatório",
            "number.base": "ALTERAR deve ser uma string"
        }),
    N1: Joi.string().required()
        .messages({
            "any.required": "O N1 obrigatório",
            "string.base": "N1 deve ser uma string"
        }),

    N2: Joi.string().required()
        .messages({
            "any.required": "O N2 obrigatório",
            "string.base": "N2 deve ser uma string"
        }),

    N3: Joi.string().required()
        .messages({
            "any.required": "O N3 obrigatório",
            "string.base": "N3 deve ser uma string"
        }),

    N4: Joi.string().required()
        .messages({
            "any.required": "O N4 obrigatório",
            "string.base": "N4 deve ser uma string"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "any.required": "O STATIVO obrigatório",
            "string.base": "STATIVO deve ser uma string"
        }),
    IDPERFIL: Joi.number().required()
        .messages({
            "any.required": "O IDPERFIL obrigatório",
            "number.base": "IDPERFIL deve ser um numero"
        }),

})

export default atualizarPerfilUsuarioSchema;


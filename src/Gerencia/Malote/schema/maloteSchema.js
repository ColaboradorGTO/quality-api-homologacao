import Joi from "joi";

const schemaMalotesPorLoja = Joi.object({
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA  deve ser um numero"
        }),

    DATAMOVIMENTOCAIXA: Joi.string().required()
        .messages({
            "any.required": "DATAMOVIMENTOCAIXA é obrigatório",
            "string.base": "DATAMOVIMENTOCAIXA  deve ser uma string"
        }),

    VRDINHEIRO: Joi.number().required()
        .messages({
            "any.required": "VRDINHEIRO é obrigatório",
            "number.base": "VRDINHEIRO deve ser uma número"
        }),

    VRCARTAO: Joi.number().required()
        .messages({
            "any.required": "VRCARTAO é obrigatório",
            "number.base": "VRCARTAO deve ser uma número"
        }),

    VRPOS: Joi.number().required()
        .messages({
            "any.required": "VRPOS é obrigatório",
            "number.base": "VRPOS deve ser um numero"
        }),

    VRPIX: Joi.number().required()
        .messages({
            "any.required": "VRPIX é obrigatório",
            "number.base": "VRPIX deve ser um numero"
        }),
    VRCONVENIO: Joi.number().required()
        .messages({
            "any.required": "VRCONVENIO é obrigatório",
            "number.base": "VRCONVENIO deve ser um numero"
        }),

    VRVOUCHER: Joi.number().required()
        .messages({
            "any.required": "VRVOUCHER é obrigatório",
            "number.base": "VRVOUCHER deve ser um numero"
        }),

    VRFATURA: Joi.number().required()
        .messages({
            "any.required": "VRFATURA é obrigatório",
            "number.base": "VRFATURA deve ser um numero"
        }),

    VRFATURAPIX: Joi.number().required()
        .messages({
            "any.required": "VRFATURAPIX é obrigatório",
            "number.base": "VRFATURAPIX deve ser um numero"
        }),

    VRDESPESA: Joi.number().required()
        .messages({
            "any.required": "VRDESPESA é obrigatório",
            "number.base": "VRDESPESA deve ser um numero"
        }),

    VRTOTALRECEBIDO: Joi.number().required()
        .messages({
            "any.required": "VRTOTALRECEBIDO é obrigatório",
            "number.base": "VRTOTALRECEBIDO deve ser um numero"
        }),

    VRDISPONIVEL: Joi.number().required()
        .messages({
            "any.required": "VRDISPONIVEL é obrigatório",
            "number.base": "VRDISPONIVEL deve ser um numero"
        }),

    OBSERVACAOLOJA: Joi.string().required()
        .messages({
            "any.required": "OBSERVACAOLOJA é obrigatório",
            "string.base": "OBSERVACAOLOJA deve ser uma string"
        }),

    IDUSERCRIACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSERCRIACAO é obrigatório",
            "number.base": "IDUSERCRIACAO deve ser um numero"
        }),

    IDUSERULTIMAALTERACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSERULTIMAALTERACAO é obrigatório",
            "number.base": "IDUSERULTIMAALTERACAO deve ser um numero"
        }),

    IDUSERENVIO: Joi.number().required()
        .messages({
            "any.required": "IDUSERENVIO é obrigatório",
            "number.base": "IDUSERENVIO deve ser um numero"
        }),
});

export default schemaMalotesPorLoja;
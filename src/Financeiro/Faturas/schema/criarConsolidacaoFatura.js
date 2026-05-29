import Joi from "joi";

const schemaCriarConsolidacaoFatura = Joi.object({
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA  deve ser um numero"
        }),

    DTPROCESSAMENTO: Joi.string().required()
        .messages({
            "any.required": "DTPROCESSAMENTO é obrigatório",
            "number.base": "DTPROCESSAMENTO  deve ser uma string"
        }),

    QTDTOTALFATURAS: Joi.number().required()
        .messages({
            "any.required": "QTDTOTALFATURAS é obrigatório",
            "string.base": "QTDTOTALFATURAS  deve ser um numero"
        }),

    VRTOTALRECEBIDO: Joi.number().required()
        .messages({
            "any.required": "VRTOTALRECEBIDO é obrigatório",
            "string.base": "VRTOTALRECEBIDO  deve ser um numero"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "any.required": "IDFUNCIONARIO é obrigatório",
            "string.base": "IDFUNCIONARIO  deve ser um numero"
        }),

});

export default schemaCriarConsolidacaoFatura;
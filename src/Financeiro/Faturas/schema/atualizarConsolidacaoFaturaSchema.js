import Joi from "joi";

const schemaConsolidacaoFatura = Joi.object({
    IDCONSOLIDACAOFATURA: Joi.number().required()
        .messages({
            "any.required": "IDCONSOLIDACAOFATURA é obrigatório",
            "number.base": "IDCONSOLIDACAOFATURA  deve ser um numero"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "any.required": "IDFUNCIONARIO é obrigatório",
            "number.base": "IDFUNCIONARIO  deve ser um numero"
        }),

    STCANCELADO: Joi.string().required()
        .messages({
            "any.required": "STCANCELADO é obrigatório",
            "string.base": "STCANCELADO  deve ser uma string"
        }),

    TXTMOTIVOCANCELAMENTO: Joi.string().required()
        .messages({
            "any.required": "TXTMOTIVOCANCELAMENTO é obrigatório",
            "string.base": "TXTMOTIVOCANCELAMENTO  deve ser uma string"
        }),

});

export default schemaConsolidacaoFatura;
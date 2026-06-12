import Joi from "joi";

const schemaAtualizarListaAjusteExtrato = Joi.object({
    DSHISTORIO: Joi.string().required()
        .messages({
            "any.required": "DSHISTORIO é obrigatório",
            "string.base": "DSHISTORIO  deve ser uma string"
        }),

    VRDEBITO: Joi.number().required()
        .messages({
            "any.required": "VRDEBITO é obrigatório",
            "number.base": "VRDEBITO  deve ser um number"
        }),

    VRCREDITO: Joi.number().required()
        .messages({
            "any.required": "VRCREDITO é obrigatório",
            "number.base": "VRCREDITO deve ser uma número"
        }),

    IDOPERADOR: Joi.number().required()
        .messages({
            "any.required": "IDOPERADOR é obrigatório",
            "number.base": "IDOPERADOR deve ser uma número"
        }),

    DATACADASTRO: Joi.string()
        .messages({
            "string.base": "DATACADASTRO deve ser uma string"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "any.required": "STATIVO é obrigatório",
            "string.base": "STATIVO deve ser uma string"
        }),
    STCANCELADO: Joi.string().required()
        .messages({
            "any.required": "STCANCELADO é obrigatório",
            "string.base": "STCANCELADO deve ser uma string"
        }),

    IDAJUSTEEXTRATO: Joi.number().required()
        .messages({
            "any.required": "IDAJUSTEEXTRATO é obrigatório",
            "number.base": "IDAJUSTEEXTRATO deve ser um numero"
        }),
});


export default schemaAtualizarListaAjusteExtrato;
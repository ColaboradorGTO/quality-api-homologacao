import Joi from "joi";

const schemaListaAjusteExtrato = Joi.object({
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA  deve ser um numero"
        }),

    HISTORICO: Joi.string().required()
        .messages({
            "any.required": "HISTORICO é obrigatório",
            "number.base": "HISTORICO  deve ser uma string"
        }),

    VRDEBITO: Joi.number().required()
        .messages({
            "any.required": "VRDEBITO é obrigatório",
            "number.base": "VRDEBITO deve ser uma número"
        }),

    VRCREDITO: Joi.number().required()
        .messages({
            "any.required": "VRCREDITO é obrigatório",
            "number.base": "VRCREDITO deve ser uma número"
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
    IDOPERADOR: Joi.number().required()
        .messages({
            "any.required": "IDOPERADOR é obrigatório",
            "number.base": "IDOPERADOR deve ser uma número"
        }),

    DATACADASTRO: Joi.string().required()
        .messages({
            "any.required": "DATACADASTRO é obrigatório", 
            "string.base": "DATACADASTRO deve ser uma string"
        }),

});


export default schemaListaAjusteExtrato;
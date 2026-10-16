import Joi from "joi";

const schemaCriarConsolidacaoFaturaSAP = Joi.object({
    IDS_CONSOLIDACOES: Joi.string().required()
        .messages({
            "any.required": "IDS_CONSOLIDACOES é obrigatório",
            "string.base": "IDS_CONSOLIDACOES  deve ser uma string"
        }),


    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "any.required": "IDFUNCIONARIO é obrigatório",
            "number.base": "IDFUNCIONARIO  deve ser um numero"
        }),

});

export default schemaCriarConsolidacaoFaturaSAP;
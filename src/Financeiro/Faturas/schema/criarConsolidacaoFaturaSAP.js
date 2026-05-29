import Joi from "joi";

const schemaCriarConsolidacaoFaturaSAP = Joi.object({
    IDS_CONSOLIDACOES: Joi.number().required()
        .messages({
            "any.required": "IDS_CONSOLIDACOES é obrigatório",
            "number.base": "IDS_CONSOLIDACOES  deve ser um numero"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "any.required": "IDFUNCIONARIO é obrigatório",
            "number.base": "IDFUNCIONARIO  deve ser um numero"
        }),

});

export default schemaCriarConsolidacaoFaturaSAP;
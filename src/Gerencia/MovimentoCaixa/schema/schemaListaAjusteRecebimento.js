import Joi from "joi";

const schemaListaAjusteRecebimento = Joi.object({
    ID: Joi.string().required()
        .messages({
            "any.required": "ID é obrigatório",
            "string.base": "ID  deve ser uma string"
        }),

    VRAJUSTDINHEIRO: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTDINHEIRO  deve ser um numero"
        }),

    VRAJUSTTEF: Joi.number().allow(null, '')
        .messages({
            "number.base": "IDVRAJUSTTEF deve ser um numero"
        }),

    VRAJUSTPOS: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTPOS deve ser um numero"
        }),

    VRAJUSTFATURA: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTFATURA deve ser um numero"
        }),

    VRAJUSTVOUCHER: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTVOUCHER deve ser um numero"
        }),

    VRAJUSTCONVENIO: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTCONVENIO deve ser um numero"
        }),

    VRAJUSTPIX: Joi.number().allow(null, '')
        .messages({
            "string.base": "VRAJUSTPIX deve ser uma string"
        }),

    VRAJUSTPL: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRAJUSTPL deve ser um numero"
        }),

    VRQUEBRACAIXA: Joi.number().allow(null, '')
        .messages({
            "number.base": "VRQUEBRACAIXA deve ser um numero"
        }),

    TXT_OBS: Joi.string().required()
        .messages({
            "any.required": "TXT_OBS é obrigatório",
            "string.base": "TXT_OBS deve ser uma string"
        }),

});

export default schemaListaAjusteRecebimento;

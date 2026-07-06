import Joi from "joi";

const schemaCreateIntegracaoDespesa = Joi.object({
    IDDESPESASLOJA: Joi.number().required()
        .messages({
            "any.required": "IDDESPESASLOJA é obrigatório",
            "string.base": "IDDESPESASLOJA  deve ser uma numero"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "any.required": "IDFUNCIONARIO é obrigatório",
            "number.base": "IDFUNCIONARIO  deve ser um número"
        }),
});

export default schemaCreateIntegracaoDespesa;
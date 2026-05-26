import Joi from "joi";

const schemaAtualizarDepositoLoja = Joi.object({
    IDDEPOSITOLOJA: Joi.number().required()
        .messages({
            "any.required": "IDDEPOSITOLOJA é obrigatório",
            "number.base": "IDDEPOSITOLOJA  deve ser um número"
        }),
});


export default schemaAtualizarDepositoLoja;
import Joi from "joi";

const schemaAdiantamentoStatus = Joi.object({


    IDADIANTAMENTOSALARIO: Joi.number().required()
        .messages({
            "any.required": "IDADIANTAMENTOSALARIO é obrigatório",
            "number.base": "IDADIANTAMENTOSALARIO deve ser uma número"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "any.required": "STATIVO é obrigatório",
            "number.base": "STATIVO  deve ser uma string"
        }),

});


export default schemaAdiantamentoStatus;


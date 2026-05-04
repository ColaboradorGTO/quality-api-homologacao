import Joi from "joi";

const atualizarFuncionarioDepartamentoSchema = Joi.object({
    DEPARTAMENTO: Joi.string().required()
        .messages({
            "any.required": "O DEPARTAMENTO obrigatório",
            "string.base": "O DEPARTAMENTO deve ser uma string"
        }),
    ID: Joi.number().required()
        .messages({
            "any.required": "O ID é obrigatório",
            "number.base": "ID deve ser um number"
        }),

})

export default atualizarFuncionarioDepartamentoSchema;


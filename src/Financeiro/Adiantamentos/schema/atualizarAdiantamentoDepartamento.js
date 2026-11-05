import Joi from "joi";
import schemaCriarAdiantamentoDepartamento from "./criarAdiantamentoDepartamento.js";

// Mesmas regras do cadastro (incluindo os campos novos da Provisão Financeira),
// trocando os campos de criação pelos de alteração.
const schemaAtualizarAdiantamentoDepartamento = schemaCriarAdiantamentoDepartamento
    .fork(['IDUSUARIOCRIACAO', 'DATACRIACAO'], (campo) => campo.optional().strip())
    .keys({
        IDADIANTAMENTO: Joi.number().required()
            .messages({
                "any.required": "IDADIANTAMENTO é obrigatório",
                "number.base": "IDADIANTAMENTO deve ser uma número"
            }),
        STATUS: Joi.string().allow('')
            .messages({
                "string.base": "STATUS  deve ser uma string"
            }),
        IDUSUARIOALTERACAO: Joi.number().required()
            .messages({
                "any.required": "IDUSUARIOALTERACAO é obrigatório",
                "number.base": "IDUSUARIOALTERACAO  deve ser um número"
            }),
    });


export default schemaAtualizarAdiantamentoDepartamento;

import Joi from "joi";

const createAdiantamentoSalarialSchema = Joi.object({

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA must be a number",
            "any.required": "IDEMPRESA is required field"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),
        
    TXTMOTIVO: Joi.string().required()
        .messages({
            "string.base": "TXTMOTIVO must be a string",
            "any.required": "TXTMOTIVO is required field"
        }),

    VRVALORDESCONTO: Joi.number().required()
        .messages({
            "number.base": "VRVALORDESCONTO must be a number",
            "any.required": "VRVALORDESCONTO is required field"
        }),

    DTLANCAMENTO: Joi.string().required()
        .messages({
            "string.base": "DTLANCAMENTO must be a string",
            "any.required": "DTLANCAMENTO is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),

    IDUSR: Joi.number().required()
        .messages({
            "number.base": "IDUSR must be a number",
            "any.required": "IDUSR is required field"
        })

});

export default createAdiantamentoSalarialSchema;
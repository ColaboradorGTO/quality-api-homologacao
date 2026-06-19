import Joi from "joi";

const createQuebraCaixaSchema = Joi.object({

    IDCAIXAWEB: Joi.number().required()
        .messages({
            "number.base": "IDCAIXAWEB must be a number",
            "any.required": "IDCAIXAWEB is required field"
        }),

    IDMOVIMENTOCAIXA: Joi.string().required()
        .messages({
            "string.base": "IDMOVIMENTOCAIXA must be a string",
            "any.required": "IDMOVIMENTOCAIXA is required field"
        }),

    IDGERENTE: Joi.number().required()
        .messages({
            "number.base": "IDGERENTE must be a number",
            "any.required": "IDGERENTE is required field"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "string.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),

    DTLANCAMENTO: Joi.string().required()
        .messages({
            "string.base": "DTLANCAMENTO must be a string",
            "any.required": "DTLANCAMENTO is required field"
        }),

    VRQUEBRASISTEMA: Joi.number().required()
        .messages({
            "string.base": "VRQUEBRASISTEMA must be a number",
            "any.required": "VRQUEBRASISTEMA is required field"
        }),

    VRQUEBRAEFETIVADO: Joi.number().required()
        .messages({
            "string.base": "VRQUEBRAEFETIVADO must be a number",
            "any.required": "VRQUEBRAEFETIVADO is required field"
        }),

    TXTHISTORICO: Joi.string().required()
        .messages({
            "string.base": "TXTHISTORICO must be a string",
            "any.required": "TXTHISTORICO is required field"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        })



});

export default createQuebraCaixaSchema;
import Joi from "joi";

const updateVinculoAlvaraEmpresaSchema = Joi.object({

    IDSTATUSANDAMENTO: Joi.number()
        .required()
        .messages({
            "number.base": "IDSTATUSANDAMENTO must be a number",
            "any.required": "IDSTATUSANDAMENTO is required field"
        }),

    DTINICIOCOMPETENCIA: Joi.string()
        .required()
        .messages({
            "string.base": "DTINICIOCOMPETENCIA must be a valid date",
            "any.required": "DTINICIOCOMPETENCIA is required field"
        }),

    DTFIMCOMPETENCIA: Joi.string()
        .required()
        .messages({
            "string.base": "DTFIMCOMPETENCIA must be a valid date",
            "any.required": "DTFIMCOMPETENCIA is required field"
        }),

    DESCRICAODETALHEANDAMENTO: Joi.string()
        .allow("", null)
        .messages({
            "string.base": "DESCRICAODETALHEANDAMENTO must be a string"
        }),

    METRAGEMEMPRESA: Joi.number()
        .required()
        .messages({
            "number.base": "METRAGEMEMPRESA must be a number",
            "any.required": "METRAGEMEMPRESA is required field"
        }),

    STATIVO: Joi.string()
        .required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),

    IDFUNCIONARIO: Joi.number()
        .required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),
        
    NUMEROPROJETOAPROVADO: Joi.string().allow("")
        .messages({
            "string.base": "NUMEROPROJETOAPROVADO must be a string",
        }),

    IDVINCULO: Joi.number()
        .required()
        .messages({
            "number.base": "IDVINCULO must be a number",
            "any.required": "IDVINCULO is required field"
        }),

    ARQUIVOSALVARA: Joi.array()
        .messages({
            "array.base": "ARQUIVOSALVARA must be an array"
        })

    /* ARQUIVOSALVARA: Joi.array()
        .items(
            Joi.object({
                NOMEARQUIVO: Joi.string().required(),
                BASE64: Joi.string().required()
            })
        )
        .optional() */
});

export default updateVinculoAlvaraEmpresaSchema;
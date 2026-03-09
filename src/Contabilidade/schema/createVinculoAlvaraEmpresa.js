import Joi from "joi";

const createVinculoAlvaraEmpresaSchema = Joi.object({

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA must be a number",
            "any.required": "IDEMPRESA is required field"
        }),

    IDALVARA: Joi.number().required()
        .messages({
            "number.base": "IDALVARA must be a number",
            "any.required": "IDALVARA is required field"
        }),

    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),

    DTINICIOCOMPETENCIA: Joi.string().required()
        .messages({
            "string.base": "DTINICIOCOMPETENCIA must be a string",
            "any.required": "DTINICIOCOMPETENCIA is required field"
        }),

    DTFIMCOMPETENCIA: Joi.string().required()
        .messages({
            "string.base": "DTFIMCOMPETENCIA must be a string",
            "any.required": "DTFIMCOMPETENCIA is required field"
        }),

    IDSTATUSANDAMENTO: Joi.number().required()
        .messages({
            "number.base": "IDSTATUSANDAMENTO must be a number",
            "any.required": "IDSTATUSANDAMENTO is required field"
        }),

    DESCRICAODETALHEANDAMENTO: Joi.string().required()
        .messages({
            "string.base": "DESCRICAODETALHEANDAMENTO must be a string",
            "any.required": "DESCRICAODETALHEANDAMENTO is required field"
        }),

    METRAGEMEMPRESA: Joi.number().required()
        .messages({
            "number.base": "METRAGEMEMPRESA must be a number",
            "any.required": "METRAGEMEMPRESA is required field"
        }),

    NUMEROPROJETOAPROVADO: Joi.string().allow(null ,"")
        .messages({
            "string.base": "NUMEROPROJETOAPROVADO must be a string",
        }),
        
    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),

    ARQUIVOSALVARA: Joi.array()
        .messages({
            "array.base": "ARQUIVOSALVARA must be an array"
        })

});

export default createVinculoAlvaraEmpresaSchema;
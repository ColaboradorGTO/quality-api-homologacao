/* import Joi from "joi";

const updateArquivosAlvaraSchema = Joi.array().items(

    Joi.object({

        IDVINCULOALVARAEMPRESA: Joi.number()
            .required()
            .messages({
                "number.base": "IDVINCULOALVARAEMPRESA must be a number",
                "any.required": "IDVINCULOALVARAEMPRESA is required field"
            }),

        IDFUNCIONARIO: Joi.number()
            .required()
            .messages({
                "number.base": "IDFUNCIONARIO must be a number",
                "any.required": "IDFUNCIONARIO is required field"
            }),

        ARQUIVOSALVARA: Joi.array()
            .items(
                Joi.object({

                    ARQUIVOBASE64: Joi.string()
                        .required()
                        .messages({
                            "string.base": "ARQUIVOBASE64 must be a string",
                            "any.required": "ARQUIVOBASE64 is required field"
                        }),

                    NOMEARQUIVO: Joi.string()
                        .required()
                        .messages({
                            "string.base": "NOMEARQUIVO must be a string",
                            "any.required": "NOMEARQUIVO is required field"
                        }),

                    TIPOARQUIVO: Joi.string()
                        .required()
                        .messages({
                            "string.base": "TIPOARQUIVO must be a string",
                            "any.required": "TIPOARQUIVO is required field"
                        })

                })
            )
            .required()
            .messages({
                "array.base": "ARQUIVOSALVARA must be an array",
                "any.required": "ARQUIVOSALVARA is required field"
            })

    })

);

export default updateArquivosAlvaraSchema; */




import Joi from "joi";

const updateArquivosAlvaraSchema = Joi.object({

    IDVINCULOALVARAEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDVINCULOALVARAEMPRESA must be a number",
            "any.required": "IDVINCULOALVARAEMPRESA is required field"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),

    IDARQUIVOSALVARA: Joi.number().required()
        .messages({
            "number.base": "IDARQUIVOSALVARA must be a number",
            "any.required": "IDARQUIVOSALVARA is required field"
        }),

    ARQUIVOSALVARA: Joi.array()
        .messages({
            "array.base": "ARQUIVOSALVARA must be an array"
        })

});

export default updateArquivosAlvaraSchema;
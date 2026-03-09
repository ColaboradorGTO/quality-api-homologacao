import Joi from "joi";

const createArquivosAlvaraSchema = Joi.object({

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

    ARQUIVOSALVARA: Joi.array()
        .messages({
            "array.base": "ARQUIVOSALVARA must be an array"
        })

});

export default createArquivosAlvaraSchema;
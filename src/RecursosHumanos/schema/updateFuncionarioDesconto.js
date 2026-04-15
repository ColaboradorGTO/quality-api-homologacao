import Joi from "joi";

const updateFuncionarioDescontoSchema = Joi.object({

    DTINICIODESC: Joi.string().required()
        .messages({
            "string.base": "DTINICIODESC must be a string",
            "any.required": "DTINICIODESC is required field"
        }),

    DTFIMDESC: Joi.string().required()
        .messages({
            "string.base": "DTFIMDESC must be a string",
            "any.required": "DTFIMDESC is required field"
        }),

    PERCDESCUSUAUTORIZADO: Joi.number().required()
        .messages({
            "number.base": "PERCDESCUSUAUTORIZADO must be a number",
            "any.required": "PERCDESCUSUAUTORIZADO is required field"
        }),

    TXTMOTIVODESCONTO: Joi.string().required()
        .messages({
            "string.base": "TXTMOTIVODESCONTO must be a string",
            "any.required": "TXTMOTIVODESCONTO is required field"
        }),

    IDFUNCALTERACAO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCALTERACAO must be a number",
            "any.required": "IDFUNCALTERACAO is required field"
        }),

    ID: Joi.number().required()
        .messages({
            "number.base": "ID must be a number",
            "any.required": "ID is required field"
        }),
});

export default updateFuncionarioDescontoSchema;

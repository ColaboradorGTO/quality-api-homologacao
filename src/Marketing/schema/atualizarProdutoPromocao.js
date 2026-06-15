import Joi from 'joi';

export const atualizarProdutoPromocaoSchema = Joi.object({
    IDPRODUTO: Joi.string().required()
        .messages({
            'string.base': 'IDPRODUTO deve ser uma string',
            'any.required': 'IDPRODUTO é obrigatório',
        }),

    IDGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            'number.base': 'IDGRUPOEMPRESARIAL deve ser um número',
            'any.required': 'IDGRUPOEMPRESARIAL é obrigatório',
        }),

    NUNCM: Joi.number().required()
        .messages({
            'number.base': 'NUNCM deve ser um número',
            'any.required': 'NUNCM é obrigatório',
        }),

    NUCEST: Joi.string().required()
        .messages({
            'string.base': 'NUCEST deve ser uma string',
            'any.required': 'NUCEST é obrigatório',
        }),

    NUCST_ICMS: Joi.string().required()
        .messages({
            'string.base': 'NUCST_ICMS deve ser uma string',
            'any.required': 'NUCST_ICMS é obrigatório',
        }),

    NUCFOP: Joi.string().required()
        .messages({
            'string.base': 'NUCFOP deve ser uma string',
            'any.required': 'NUCFOP é obrigatório',
        }),

    PERC_OUT: Joi.string().required()
        .messages({
            'string.base': 'PERC_OUT deve ser uma string',
            'any.required': 'PERC_OUT é obrigatório',
        }),

    NUCODBARRAS: Joi.string().required()
        .messages({
            'string.base': 'NUCODBARRAS deve ser uma string',
            'any.required': 'NUCODBARRAS é obrigatório',
        }),

    DSNOME: Joi.string().required()
        .messages({
            'string.base': 'DSNOME deve ser uma string',
            'any.required': 'DSNOME é obrigatório',
        }),

    STGRADE: Joi.number().required()
        .messages({
            'number.base': 'STGRADE deve ser um número',
            'any.required': 'STGRADE é obrigatório',
        }),

    UND: Joi.string().required()
        .messages({
            'string.base': 'UND deve ser uma string',
            'any.required': 'UND é obrigatório',
        }),

    PRECOCUSTO: Joi.number().required()
        .messages({
            'number.base': 'PRECOCUSTO deve ser um número',
            'any.required': 'PRECOCUSTO é obrigatório',
        }),

    PRECOVENDA: Joi.number().required()
        .messages({
            'number.base': 'PRECOVENDA deve ser um número',
            'any.required': 'PRECOVENDA é obrigatório',
        }),

    QTDENTRADA: Joi.number().required()
        .messages({
            'number.base': 'QTDENTRADA deve ser um número',
            'any.required': 'QTDENTRADA é obrigatório',
        }),

    QTDCOMERCIALIZADA: Joi.number().required()
        .messages({
            'number.base': 'QTDCOMERCIALIZADA deve ser um número',
            'any.required': 'QTDCOMERCIALIZADA é obrigatório',
        }),

    QTDPERDA: Joi.number().required()
        .messages({
            'number.base': 'QTDPERDA deve ser um número',
            'any.required': 'QTDPERDA é obrigatório',
        }),

    QTDDISPONIVEL: Joi.number().required()
        .messages({
            'number.base': 'QTDDISPONIVEL deve ser um número',
            'any.required': 'QTDDISPONIVEL é obrigatório',
        }),

    PERCICMS: Joi.number().required()
        .messages({
            'number.base': 'PERCICMS deve ser um número',
            'any.required': 'PERCICMS é obrigatório',
        }),

    PERCISS: Joi.number().required()
        .messages({
            'number.base': 'PERCISS deve ser um número',
            'any.required': 'PERCISS é obrigatório',
        }),

    PERCPIS: Joi.number().required()
        .messages({
            'number.base': 'PERCPIS deve ser um número',
            'any.required': 'PERCPIS é obrigatório',
        }),

    PERCCOFINS: Joi.number().required()
        .messages({
            'number.base': 'PERCCOFINS deve ser um número',
            'any.required': 'PERCCOFINS é obrigatório',
        }),

    COD_CSOSN: Joi.string().required()
        .messages({
            'string.base': 'COD_CSOSN deve ser uma string',
            'any.required': 'COD_CSOSN é obrigatório',
        }),

    PERCCSOSC: Joi.number().required()
        .messages({
            'number.base': 'PERCCSOSC deve ser um número',
            'any.required': 'PERCCSOSC é obrigatório',
        }),

    NUCST_IPI: Joi.string().required()
        .messages({
            'string.base': 'NUCST_IPI deve ser uma string',
            'any.required': 'NUCST_IPI é obrigatório',
        }),

    NUCST_PIS: Joi.string().required()
        .messages({
            'string.base': 'NUCST_PIS deve ser uma string',
            'any.required': 'NUCST_PIS é obrigatório',
        }),

    NUCST_COFINS: Joi.string().required()
        .messages({
            'string.base': 'NUCST_COFINS deve ser uma string',
            'any.required': 'NUCST_COFINS é obrigatório',
        }),

    PERCIPI: Joi.number().required()
        .messages({
            'number.base': 'PERCIPI deve ser um número',
            'any.required': 'PERCIPI é obrigatório',
        }),

    DTULTALTERACAO: Joi.date().required()
        .messages({
            'date.base': 'DTULTALTERACAO deve ser uma data válida',
            'any.required': 'DTULTALTERACAO é obrigatório',
        }),

    STPESAVEL: Joi.number().required()
        .messages({
            'number.base': 'STPESAVEL deve ser um número',
            'any.required': 'STPESAVEL é obrigatório',
        }),

    GRP_MATERIAIS: Joi.number().required()
        .messages({
            'number.base': 'GRP_MATERIAIS deve ser um número',
            'any.required': 'GRP_MATERIAIS é obrigatório',
        }),
});
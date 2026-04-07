/* import Joi from "joi";

const atualizarOTSchema =
    Joi.object({

        IDRESUMOOT: Joi.number().required()
            .messages({
                "number.base": "IDRESUMOOT must be a number",
                "any.required": "IDRESUMOOT is required field"
            }),

        IDPRODUTO: Joi.string()
            .messages({
                "string.base": "IDPRODUTO must be a string",
            }),

        IDEMPRESAORIGEM: Joi.number()
            .messages({
                "number.base": "IDEMPRESAORIGEM must be a number",
            }),

        IDEMPRESADESTINO: Joi.number()
            .messages({
                "number.base": "IDEMPRESADESTINO must be a number",
            }),

        IDOPERADOREXPEDICAO: Joi.number()
            .messages({
                "number.base": "IDOPERADOREXPEDICAO must be a number",

            }),

        NUTOTALITENS: Joi.number()
            .messages({
                "number.base": "NUTOTALITENS must be a number",
            }),

        QTDTOTALITENS: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENS must be a number",
            }),

        QTDTOTALITENSRECEPCIONADO: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSRECEPCIONADO must be a number",
            }),

        QTDTOTALITENSDIVERGENCIA: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSDIVERGENCIA must be a number",
            }),

        NUTOTALVOLUMES: Joi.number()
            .messages({
                "number.base": "NUTOTALVOLUMES must be a number",
            }),

        TPVOLUME: Joi.string().allow("")
            .messages({
                "string.base": "TPVOLUME must be a string",
            }),

        VRTOTALCUSTO: Joi.number()
            .messages({
                "number.base": "VRTOTALCUSTO must be a number",
            }),

        VRTOTALVENDA: Joi.number()
            .messages({
                "number.base": "VRTOTALVENDA must be a number",
            }),

        DTRECEPCAO: Joi.date().allow(null || '')
            .messages({
                "date.base": "DTRECEPCAO must be a valid date",
            }),

        IDOPERADORRECEPTOR: Joi.number().allow(null)
            .messages({
                "number.base": "IDOPERADORRECEPTOR must be a number",
            }),

        DSOBSERVACAO: Joi.string().allow("")
            .messages({
                "string.base": "DSOBSERVACAO must be a string",
            }),

        IDUSRCANCELAMENTO: Joi.number().integer().allow(null)
            .messages({
                "number.base": "IDUSRCANCELAMENTO must be a number",
            }),

        IDSTDIVERGENCIA: Joi.number().integer().allow(null)
            .messages({
                "number.base": "IDSTDIVERGENCIA must be a number",
            }),

        OBSDIVERGENCIA: Joi.string().allow("")
            .messages({
                "string.base": "OBSDIVERGENCIA must be a string",
            }),

        STEMISSAONFE: Joi.string().allow("")
            .messages({
                "string.base": "STEMISSAONFE must be a string",
            }),

        NUMERONFE: Joi.string().allow("")
            .messages({
                "string.base": "NUMERONFE must be a string",
            }),

        STENTRADAINVENTARIO: Joi.string().allow("")
            .messages({
                "string.base": "STENTRADAINVENTARIO must be a string",
            }),

        QTDCONFERENCIA: Joi.number()
            .messages({
                "number.base": "QTDCONFERENCIA must be a number",
            }),

        IDSTATUSOT: Joi.number()
            .messages({
                "number.base": "IDSTATUSOT must be a number",
            }),

        IDUSRAJUSTE: Joi.number().allow(null)
            .messages({
                "number.base": "IDUSRAJUSTE must be a number",
            }),

        DTAJUSTE: Joi.date().allow(null, '')
            .messages({
                "date.base": "DTAJUSTE must be a valid date",
            }),

        QTDTOTALITENSAJUSTE: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSAJUSTE must be a number",
            }),


        dadosdetalheot: Joi.array()
            .messages({
                "array.base": "dadosdetalheot must be an array",
            }),
    });

export default atualizarOTSchema;
 */

import Joi from "joi";

const atualizarOTSchema = Joi.array().items(

    Joi.object({

        IDRESUMOOT: Joi.number().required()
            .messages({
                "number.base": "IDRESUMOOT must be a number",
                "any.required": "IDRESUMOOT is required field"
            }),

        IDPRODUTO: Joi.string()
            .messages({
                "string.base": "IDPRODUTO must be a string",
            }),

        IDEMPRESAORIGEM: Joi.number()
            .messages({
                "number.base": "IDEMPRESAORIGEM must be a number",
            }),

        IDEMPRESADESTINO: Joi.number()
            .messages({
                "number.base": "IDEMPRESADESTINO must be a number",
            }),

        IDOPERADOREXPEDICAO: Joi.number()
            .messages({
                "number.base": "IDOPERADOREXPEDICAO must be a number",

            }),

        NUTOTALITENS: Joi.number()
            .messages({
                "number.base": "NUTOTALITENS must be a number",
            }),

        QTDTOTALITENS: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENS must be a number",
            }),

        QTDTOTALITENSRECEPCIONADO: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSRECEPCIONADO must be a number",
            }),

        QTDTOTALITENSDIVERGENCIA: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSDIVERGENCIA must be a number",
            }),

        NUTOTALVOLUMES: Joi.number()
            .messages({
                "number.base": "NUTOTALVOLUMES must be a number",
            }),

        TPVOLUME: Joi.string().allow("")
            .messages({
                "string.base": "TPVOLUME must be a string",
            }),

        VRTOTALCUSTO: Joi.number()
            .messages({
                "number.base": "VRTOTALCUSTO must be a number",
            }),

        VRTOTALVENDA: Joi.number()
            .messages({
                "number.base": "VRTOTALVENDA must be a number",
            }),

        DTRECEPCAO: Joi.date().allow(null || '')
            .messages({
                "date.base": "DTRECEPCAO must be a valid date",
            }),

        IDOPERADORRECEPTOR: Joi.number().allow(null)
            .messages({
                "number.base": "IDOPERADORRECEPTOR must be a number",
            }),

        DSOBSERVACAO: Joi.string().allow("")
            .messages({
                "string.base": "DSOBSERVACAO must be a string",
            }),

        IDUSRCANCELAMENTO: Joi.number().integer().allow(null)
            .messages({
                "number.base": "IDUSRCANCELAMENTO must be a number",
            }),

        IDSTDIVERGENCIA: Joi.number().integer().allow(null)
            .messages({
                "number.base": "IDSTDIVERGENCIA must be a number",
            }),

        OBSDIVERGENCIA: Joi.string().allow("")
            .messages({
                "string.base": "OBSDIVERGENCIA must be a string",
            }),

        STEMISSAONFE: Joi.string().allow("")
            .messages({
                "string.base": "STEMISSAONFE must be a string",
            }),

        NUMERONFE: Joi.string().allow("")
            .messages({
                "string.base": "NUMERONFE must be a string",
            }),

        STENTRADAINVENTARIO: Joi.string().allow("")
            .messages({
                "string.base": "STENTRADAINVENTARIO must be a string",
            }),

        QTDCONFERENCIA: Joi.number()
            .messages({
                "number.base": "QTDCONFERENCIA must be a number",
            }),

        IDSTATUSOT: Joi.number()
            .messages({
                "number.base": "IDSTATUSOT must be a number",
            }),

        IDUSRAJUSTE: Joi.number().allow(null)
            .messages({
                "number.base": "IDUSRAJUSTE must be a number",
            }),

        DTAJUSTE: Joi.date().allow(null, '')
            .messages({
                "date.base": "DTAJUSTE must be a valid date",
            }),

        QTDTOTALITENSAJUSTE: Joi.number()
            .messages({
                "number.base": "QTDTOTALITENSAJUSTE must be a number",
            }),


        dadosdetalheot: Joi.array()
            .messages({
                "array.base": "dadosdetalheot must be an array",
            }),
    }));

export default atualizarOTSchema;


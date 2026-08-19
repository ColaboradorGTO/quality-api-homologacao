import Joi from "joi";
const schemaAtualizarProdutoAvulso = Joi.object({
    IDPRODUTO: Joi.string().required()
        .messages({
            "any.required": "IDPRODUTO é obrigatório",
            "string.base": "IDPRODUTO deve ser uma string"
        }),

    DSNOME: Joi.string().optional().allow(null)
        .messages({
            "string.base": "DSNOME deve ser uma string"
        }),

    IDGRUPOEMPRESARIAL: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um number"
        }),

    NUNCM: Joi.string().optional().allow(null)
        .messages({
            "string.base": "NUNCM deve ser uma string"
        }),

    IDUND: Joi.string().optional().allow(null)
        .messages({
            "string.base": "IDUND deve ser uma string"
        }),

    UND: Joi.string().optional().allow(null)
        .messages({
            "string.base": "UND deve ser uma string"
        }),

    PRECOCUSTO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "PRECOCUSTO deve ser um number"
        }),

    PRECOVENDA: Joi.number().optional().allow(null)
        .messages({
            "number.base": "PRECOVENDA deve ser um number"
        }),

    IDSUBGRUPO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDSUBGRUPO deve ser um number"
        }),

    IDFABRICANTE: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDFABRICANTE deve ser um number"
        }),

    IDFORNECEDOR: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDFORNECEDOR deve ser um number"
        }),

    NUREFERENCIA: Joi.string().optional().allow(null)
        .messages({
            "string.base": "NUREFERENCIA deve ser uma string"
        }),

    IDCOR: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDCOR deve ser um number"
        }),

    IDTAMANHO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDTAMANHO deve ser um number"
        }),

    IDCATEGORIAPEDIDO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDCATEGORIAPEDIDO deve ser um number"
        }),

    IDTIPOTECIDO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDTIPOTECIDO deve ser um number"
        }),

    IDESTILO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDESTILO deve ser um number"
        }),

    IDLOCALEXPOSICAO: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDLOCALEXPOSICAO deve ser um number"
        }),

    IDCATEGORIAS: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDCATEGORIAS deve ser um number"
        }),

    IDTIPOPRODUTOFISCAL: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDTIPOPRODUTOFISCAL deve ser um number"
        }),

    IDFONTEPRODUTOFISCAL: Joi.number().optional().allow(null)
        .messages({
            "number.base": "IDFONTEPRODUTOFISCAL deve ser um number"
        }),

    STECOMMERCE: Joi.string().optional().allow('')
        .messages({
            "string.base": "STECOMMERCE deve ser uma string"
        }),

    STREDESOCIAL: Joi.string().optional().allow('')
        .messages({
            "string.base": "STREDESOCIAL deve ser uma string"
        })

});

export default schemaAtualizarProdutoAvulso;
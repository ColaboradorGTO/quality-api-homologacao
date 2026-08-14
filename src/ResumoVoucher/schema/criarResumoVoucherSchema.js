import Joi from "joi";

const valorMonetario = Joi.number().min(0).required();

const detalheVoucherSchema = Joi.object({
    IDPRODUTO: Joi.string().trim().required()
        .messages({
            "any.required": "O campo IDPRODUTO é obrigatório",
            "string.base": "O campo IDPRODUTO deve ser uma string",
            "string.empty": "O campo IDPRODUTO é obrigatório"
        }),

    QTD: Joi.number().positive().required()
        .messages({
            "any.required": "O campo QTD é obrigatório",
            "number.base": "O campo QTD deve ser um número",
            "number.positive": "O campo QTD deve ser maior que zero"
        }),

    VRUNIT: valorMonetario.messages({
        "any.required": "O campo VRUNIT é obrigatório",
        "number.base": "O campo VRUNIT deve ser um número",
        "number.min": "O campo VRUNIT não pode ser negativo"
    }),

    VRTOTALBRUTO: valorMonetario.messages({
        "any.required": "O campo VRTOTALBRUTO é obrigatório",
        "number.base": "O campo VRTOTALBRUTO deve ser um número",
        "number.min": "O campo VRTOTALBRUTO não pode ser negativo"
    }),

    VRDESCONTO: valorMonetario.messages({
        "any.required": "O campo VRDESCONTO é obrigatório",
        "number.base": "O campo VRDESCONTO deve ser um número",
        "number.min": "O campo VRDESCONTO não pode ser negativo"
    }),

    VRTOTALLIQUIDO: valorMonetario.messages({
        "any.required": "O campo VRTOTALLIQUIDO é obrigatório",
        "number.base": "O campo VRTOTALLIQUIDO deve ser um número",
        "number.min": "O campo VRTOTALLIQUIDO não pode ser negativo"
    }),

    STATIVO: Joi.string().valid('True', 'False').required()
        .messages({
            "any.required": "O campo STATIVO é obrigatório",
            "string.base": "O campo STATIVO deve ser uma string",
            "any.only": "O campo STATIVO deve ser True ou False"
        }),

    STCANCELADO: Joi.string().valid('True', 'False').required()
        .messages({
            "any.required": "O campo STCANCELADO é obrigatório",
            "string.base": "O campo STCANCELADO deve ser uma string",
            "any.only": "O campo STCANCELADO deve ser True ou False"
        })
});

const produtoVoucherSchema = Joi.object({
    IDVENDADETALHE: Joi.string().trim().required()
        .messages({
            "any.required": "O campo IDVENDADETALHE é obrigatório",
            "string.base": "O campo IDVENDADETALHE deve ser uma string",
            "string.empty": "O campo IDVENDADETALHE é obrigatório"
        }),

    STTROCA: Joi.string().valid('True', 'False').required()
        .messages({
            "any.required": "O campo STTROCA é obrigatório",
            "string.base": "O campo STTROCA deve ser uma string",
            "any.only": "O campo STTROCA deve ser True ou False"
        }),

    QTD: Joi.number().positive().required()
        .messages({
            "any.required": "O campo QTD é obrigatório",
            "number.base": "O campo QTD deve ser um número",
            "number.positive": "O campo QTD deve ser maior que zero"
        }),

    VRTOTALBRUTO: valorMonetario.messages({
        "any.required": "O campo VRTOTALBRUTO é obrigatório",
        "number.base": "O campo VRTOTALBRUTO deve ser um número",
        "number.min": "O campo VRTOTALBRUTO não pode ser negativo"
    }),

    VDESC: valorMonetario.messages({
        "any.required": "O campo VDESC é obrigatório",
        "number.base": "O campo VDESC deve ser um número",
        "number.min": "O campo VDESC não pode ser negativo"
    }),

    VRTOTALLIQUIDO: valorMonetario.messages({
        "any.required": "O campo VRTOTALLIQUIDO é obrigatório",
        "number.base": "O campo VRTOTALLIQUIDO deve ser um número",
        "number.min": "O campo VRTOTALLIQUIDO não pode ser negativo"
    })
});

const criarResumoVoucherSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório",
            "number.base": "O campo IDGRUPOEMPRESARIAL deve ser um número",
            "number.integer": "O campo IDGRUPOEMPRESARIAL deve ser um número inteiro",
            "number.positive": "O campo IDGRUPOEMPRESARIAL deve ser maior que zero"
        }),

    IDEMPRESAORIGEM: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDEMPRESAORIGEM é obrigatório",
            "number.base": "O campo IDEMPRESAORIGEM deve ser um número",
            "number.integer": "O campo IDEMPRESAORIGEM deve ser um número inteiro",
            "number.positive": "O campo IDEMPRESAORIGEM deve ser maior que zero"
        }),

    IDCAIXAORIGEM: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDCAIXAORIGEM é obrigatório",
            "number.base": "O campo IDCAIXAORIGEM deve ser um número",
            "number.integer": "O campo IDCAIXAORIGEM deve ser um número inteiro",
            "number.positive": "O campo IDCAIXAORIGEM deve ser maior que zero"
        }),

    IDNFEDEVOLUCAO: Joi.number().integer().min(0).required()
        .messages({
            "any.required": "O campo IDNFEDEVOLUCAO é obrigatório",
            "number.base": "O campo IDNFEDEVOLUCAO deve ser um número",
            "number.integer": "O campo IDNFEDEVOLUCAO deve ser um número inteiro",
            "number.min": "O campo IDNFEDEVOLUCAO não pode ser negativo"
        }),

    IDUSRINVOUCHER: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDUSRINVOUCHER é obrigatório",
            "number.base": "O campo IDUSRINVOUCHER deve ser um número",
            "number.integer": "O campo IDUSRINVOUCHER deve ser um número inteiro",
            "number.positive": "O campo IDUSRINVOUCHER deve ser maior que zero"
        }),

    IDVENDEDOR: Joi.number().integer().min(0).required()
        .messages({
            "any.required": "O campo IDVENDEDOR é obrigatório",
            "number.base": "O campo IDVENDEDOR deve ser um número",
            "number.integer": "O campo IDVENDEDOR deve ser um número inteiro",
            "number.min": "O campo IDVENDEDOR não pode ser negativo"
        }),

    IDCLIENTE: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDCLIENTE é obrigatório",
            "number.base": "O campo IDCLIENTE deve ser um número",
            "number.integer": "O campo IDCLIENTE deve ser um número inteiro",
            "number.positive": "O campo IDCLIENTE deve ser maior que zero"
        }),

    NUCPF: Joi.string().trim().pattern(/^\d{11}$/).required()
        .messages({
            "any.required": "O campo NUCPF é obrigatório",
            "string.base": "O campo NUCPF deve ser uma string",
            "string.empty": "O campo NUCPF é obrigatório",
            "string.pattern.base": "O campo NUCPF deve conter 11 dígitos"
        }),

    VRVOUCHER: Joi.number().positive().required()
        .messages({
            "any.required": "O campo VRVOUCHER é obrigatório",
            "number.base": "O campo VRVOUCHER deve ser um número",
            "number.positive": "O campo VRVOUCHER deve ser maior que zero"
        }),

    IDRESUMOVENDAWEB: Joi.string().trim().required()
        .messages({
            "any.required": "O campo IDRESUMOVENDAWEB é obrigatório",
            "string.base": "O campo IDRESUMOVENDAWEB deve ser uma string",
            "string.empty": "O campo IDRESUMOVENDAWEB é obrigatório"
        }),

    STTIPOTROCA: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo STTIPOTROCA é obrigatório",
            "string.base": "O campo STTIPOTROCA deve ser uma string"
        }),

    MOTIVOTROCA: Joi.string().trim().allow('').required()
        .messages({
            "any.required": "O campo MOTIVOTROCA é obrigatório",
            "string.base": "O campo MOTIVOTROCA deve ser uma string"
        }),

    IDUSRLIBERACAOCRIACAO: Joi.number().integer().positive().required()
        .messages({
            "any.required": "O campo IDUSRLIBERACAOCRIACAO é obrigatório",
            "number.base": "O campo IDUSRLIBERACAOCRIACAO deve ser um número",
            "number.integer": "O campo IDUSRLIBERACAOCRIACAO deve ser um número inteiro",
            "number.positive": "O campo IDUSRLIBERACAOCRIACAO deve ser maior que zero"
        }),

    detVoucher: Joi.array().items(detalheVoucherSchema).min(1).required()
        .messages({
            "any.required": "O campo detVoucher é obrigatório",
            "array.base": "O campo detVoucher deve ser um array",
            "array.min": "O campo detVoucher deve possuir pelo menos um produto"
        }),

    produtosVoucher: Joi.array().items(produtoVoucherSchema).min(1).required()
        .messages({
            "any.required": "O campo produtosVoucher é obrigatório",
            "array.base": "O campo produtosVoucher deve ser um array",
            "array.min": "O campo produtosVoucher deve possuir pelo menos um produto"
        })
});

export default criarResumoVoucherSchema;

import Joi from "joi";

const atualizarPerfilUsuarioMenuSchema = Joi.object({
    IDUSUARIO: Joi.number().required()
        .messages({
            "any.required": "O IDUSUARIO obrigatório",
            "number.base": "O IDUSUARIO deve ser um número"
        }),
    CRIAR: Joi.string()
        .messages({
            "string.base": "CRIAR deve ser um string"
        }),
    ALTERAR: Joi.string()
        .messages({
            "string.base": "ALTERAR deve ser uma string"
        }),
    IDMODULOADMINISTRATIVO: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOADMINISTRATIVO deve ser uma string"
        }),
    IDMODULOCOMERCIAL: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOCOMERCIAL deve ser uma string"
        }),
    IDMODULOCONTABILIDADE: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOCONTABILIDADE deve ser uma string"
        }),
    IDMODULOFINANCEIRO: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOFINANCEIRO deve ser uma string"
        }),
    IDMODULOGERENCIA: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOGERENCIA deve ser uma string"
        }),
    IDMODULOINFORMATICA: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOINFORMATICA deve ser uma string"
        }),
    IDMODULOMARKETING: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOMARKETING deve ser uma string"
        }),
    IDMODULOCOMPRAS: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOCOMPRAS deve ser uma string"
        }),
    IDMODULOCADASTRO: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOCADASTRO deve ser uma string"
        }),
    IDMODULOEXPEDICAO: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOEXPEDICAO deve ser uma string"
        }),
    IDMODULOCOMPRASADM: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOCOMPRASADM  deve ser uma string"
        }),
    IDMODULOETIQUETAGEM: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOETIQUETAGEM deve ser uma string"
        }),
    IDMODULOCONFERENCIACEGA: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULOCONFERENCIACEGA deve ser uma string"
        }),
    IDMODULOVOUCHER: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOVOUCHER uma string"
        }),
    IDMODULOMALOTE: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULOMALOTE deve ser uma string"
        }),
    IDMODULORH: Joi.string().allow('')
        .messages({
            "string.base": "O IDMODULORH deve ser uma string"
        }),
    IDUSERULTIMAALTERACAO: Joi.string().allow('')
        .messages({
            "string.base": "A IDUSERULTIMAALTERACAO deve ser uma string"
        }),
    IDPERMISSAO: Joi.string().allow('')
        .messages({
            "string.base": "A IDPERMISSAO deve ser uma string"
        }),

    IDMODULORESUMOVENDAS: Joi.string().allow('')
        .messages({
            "string.base": "A IDMODULORESUMOVENDAS deve ser um string"
        }),

    IDMODULOPROMOCAO: Joi.string().allow('')
        .messages({
            "string.base": "IDMODULOPROMOCAO deve ser um string"
        }),

    ADMINISTRADOR: Joi.string().allow('')
        .messages({
            "string.base": "ADMINISTRADOR deve ser uma string"
        }),

    N4: Joi.string()
        .messages({
            "string.base": "N4 deve ser uma string"
        }),

    N3: Joi.string()
        .messages({
            "string.base": " N3 deve ser uma string"
        }),

    N2: Joi.string()
        .messages({
            "string.base": "A N2 deve ser uma string"
        }),

    N1: Joi.string()
        .messages({
            "number.base": "A N1 deve ser uma string"
        }),

    IDMENU: Joi.number()
        .messages({
            "number.base": "A IDMENU deve ser um número"
        }),

    IDMENUFILHO: Joi.number()
        .messages({
            "number.base": "A IDMENUFILHO deve ser um número"
        }),
})

export default atualizarPerfilUsuarioMenuSchema;

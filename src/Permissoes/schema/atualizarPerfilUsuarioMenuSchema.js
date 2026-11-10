
import Joi from "joi";

const atualizarPerfilUsuarioMenuSchema = Joi.object({
    IDUSUARIO: Joi.number().required()
        .messages({
            "any.required": "O IDUSUARIO é obrigatório",
            "number.base": "O IDUSUARIO deve ser um número"
        }),

    CRIAR: Joi.string().allow('', null),
    ALTERAR: Joi.string().allow('', null),
    STATIVO: Joi.string().allow('', null),

    IDMODULO: Joi.string().allow('', null),
    IDMODULOADMINISTRATIVO: Joi.string().allow('', null),
    IDMODULOCOMERCIAL: Joi.string().allow('', null),
    IDMODULOCONTABILIDADE: Joi.string().allow('', null),
    IDMODULOFINANCEIRO: Joi.string().allow('', null),
    IDMODULOGERENCIA: Joi.string().allow('', null),
    IDMODULOINFORMATICA: Joi.string().allow('', null),
    IDMODULOMARKETING: Joi.string().allow('', null),
    IDMODULOCOMPRAS: Joi.string().allow('', null),
    IDMODULOCADASTRO: Joi.string().allow('', null),
    IDMODULOEXPEDICAO: Joi.string().allow('', null),
    IDMODULOCOMPRASADM: Joi.string().allow('', null),
    IDMODULOETIQUETAGEM: Joi.string().allow('', null),
    IDMODULOCONFERENCIACEGA: Joi.string().allow('', null),
    IDMODULOVOUCHER: Joi.string().allow('', null),
    IDMODULOMALOTE: Joi.string().allow('', null),
    IDMODULORH: Joi.string().allow('', null),
    IDMODULORESUMOVENDAS: Joi.string().allow('', null),
    IDMODULOPROMOCAO: Joi.string().allow('', null),
    IDMODULOPROVISAOFINANCEIRA: Joi.string().allow('', null),

    IDUSERULTIMAALTERACAO: Joi.string().allow('', null),
    IDPERMISSAO: Joi.string().allow('', null),

    ADMINISTRADOR: Joi.string().allow('', null),

    N4: Joi.string().allow('', null),
    N3: Joi.string().allow('', null),
    N2: Joi.string().allow('', null),
    N1: Joi.string().allow('', null),

    IDMENU: Joi.number().allow(null)
        .messages({
            "number.base": "O IDMENU deve ser um número"
        }),

    IDMENUFILHO: Joi.alternatives().try(
        Joi.number(),
        Joi.array().items(Joi.number())
    ).required()
        .messages({
            "any.required": "O IDMENUFILHO é obrigatório",
            "number.base": "O IDMENUFILHO deve ser um número",
            "alternatives.types": "O IDMENUFILHO deve ser um número ou uma lista de números"
        })
});

export default atualizarPerfilUsuarioMenuSchema;



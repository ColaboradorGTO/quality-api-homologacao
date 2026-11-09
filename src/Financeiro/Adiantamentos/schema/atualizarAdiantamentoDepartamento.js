import Joi from "joi";

const schemaAtualizarAdiantamentoDepartamento = Joi.object({
    STATUS: Joi.string().required()
        .messages({
            "string.base": "STATUS deve ser uma string"
        }),
    DEPARTAMENTO: Joi.string().required()
        .messages({
            "string.base": "DEPARTAMENTO deve ser uma string"
        }),
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA deve ser um número"
        }),
    NUCNPJEMPRESA: Joi.string().allow('')
        .messages({
            "string.base": "NUCNPJEMPRESA deve ser uma string"
        }),
    CNPJFATURAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "CNPJFATURAMENTO  deve ser uma string"
        }),
    RAZAOSOCIALFATURAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "RAZAOSOCIALFATURAMENTO  deve ser uma string"
        }),
    VRSOLICITADO: Joi.number().positive().required()
        .messages({
            "any.required": "VRSOLICITADO é obrigatório",
            "number.base": "VRSOLICITADO deve ser um número",
            "number.positive": "VRSOLICITADO deve ser maior que zero"
        }),
    DESCRICAO: Joi.string().allow('')
        .messages({
            "string.base": "DESCRICAO  deve ser uma string"
        }),
    POSSUINOTAFISCAL: Joi.string().allow()
        .messages({
            "string.base": "POSSUINOTAFISCAL deve ser uma string"
        }),
    ANEXOORCAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "ANEXOORCAMENTO  deve ser uma string"
        }),
    ANEXONOTAFISCAL: Joi.string().allow('')
        .messages({
            "string.base": "ANEXONOTAFISCAL  deve ser uma string"
        }),
    DSJUSTIFICATIVA: Joi.string().allow('')
        .messages({
            "string.base": "DSJUSTIFICA  deve ser uma string"
        }),
    IDUSUARIOALTERACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSUARIOALTERACAO é obrigatório",
            "number.base": "IDUSUARIOALTERACAO deve ser um número"
        }),
    RAZAOSOCIALEMPRESA: Joi.string().allow('')
        .messages({
            "string.base": "RAZAOSOCIALEMPRESA  deve ser uma string"
        }),
    TPBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "TPBENEFICIARIO deve ser PJ ou PF"
        }),
    NUCPFBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "NUCPFBENEFICIARIO  deve ser uma string"
        }),
    NOBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "NOBENEFICIARIO  deve ser uma string"
        }),
    NURGBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "NURGBENEFICIARIO  deve ser uma string"
        }),
    EMAILBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "EMAILBENEFICIARIO  deve ser uma string"
        }),
    NUCEPBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "NUCEPBENEFICIARIO  deve ser uma string"
        }),
    ENDERECOBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "ENDERECOBENEFICIARIO  deve ser uma string"
        }),
    TELEFONEBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "TELEFONEBENEFICIARIO  deve ser uma string"
        }),
    DTNASCIMENTOBENEFICIARIO: Joi.string().allow('')
        .messages({
            "string.base": "DTNASCIMENTOBENEFICIARIO  deve ser uma string"
        }),
    TPDESPESA: Joi.string().allow('')
        .messages({
            "string.base": "TPDESPESA  deve ser uma string"
        }),
    NOFAVORECIDO: Joi.string().allow('')
        .messages({
            "string.base": "NOFAVORECIDO  deve ser uma string"
        }),
    FORMAPAGAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "FORMAPAGAMENTO  deve ser uma string"
        }),
    CHAVEPIX: Joi.string().allow('')
        .messages({
            "string.base": "CHAVEPIX  deve ser uma string"
        }),
    IDBANCO: Joi.number().integer()
        .messages({
            "number.base": "IDBANCO pode ser número ou null"
        }),
    NUAGENCIA: Joi.string().allow('')
        .messages({
            "string.base": "NUAGENCIA  deve ser uma string"
        }),
    NUCONTA: Joi.string().allow('')
        .messages({
            "string.base": "NUCONTA  deve ser uma string"
        }),
    NUDIGITOCONTA: Joi.string().allow('')
        .messages({
            "string.base": "NUDIGITOCONTA  deve ser uma string"
        }),
    UNIDADENEGOCIO: Joi.string().allow('')
        .messages({
            "string.base": "UNIDADENEGOCIO  deve ser uma string"
        }),
    CENTROCUSTO: Joi.string().allow('')
        .messages({
            "string.base": "CENTROCUSTO  deve ser uma string"
        }),
    DATAPAGAMENTO: Joi.string().allow('')
        .messages({
            "string.base": "DATAPAGAMENTO  deve ser uma string"
        }),
});


export default schemaAtualizarAdiantamentoDepartamento;

import Joi from "joi";

const updateFuncionarioLojaSchema = Joi.object({

    ID: Joi.number().required()
        .messages({
            "number.base": "ID must be a number",
            "any.required": "ID is required field"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO must be a number",
            "any.required": "IDFUNCIONARIO is required field"
        }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().allow('', null)
        .messages({
            "number.base": "IDSUBGRUPOEMPRESARIAL must be a number",
            "any.required": "IDSUBGRUPOEMPRESARIAL is required field"
        }),

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA must be a number",
            "any.required": "IDEMPRESA is required field"
        }),

    NOFUNCIONARIO: Joi.string().required()
        .messages({
            "number.base": "NOFUNCIONARIO must be a string",
            "any.required": "NOFUNCIONARIO is required field"
        }),

    NUCPF: Joi.string().required()
        .messages({
            "number.base": "NUCPF must be a string",
            "any.required": "NUCPF is required field"
        }),
    NOLOGIN: Joi.string().required()
        .messages({
            "string.base": "NOLOGIN must be a string",
            "any.required": "NOLOGIN is required field"
        }),
    PWSENHA: Joi.string().required()
        .messages({
            "string.base": "PWSENHA must be a string",
            "any.required": "PWSENHA is required field"
        }),
    DSFUNCAO: Joi.string().required()
        .messages({
            "string.base": "DSFUNCAO must be a string",
            "any.required": "DSFUNCAO is required field"
        }),
    VALORSALARIO: Joi.number().required()
        .messages({
            "number.base": "VALORSALARIO must be a number",
            "any.required": "VALORSALARIO is required field"
        }),
    PERC: Joi.number().required()
        .messages({
            "number.base": "PERC must be a number",
            "any.required": "PERC is required field"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO must be a string",
            "any.required": "STATIVO is required field"
        }),
    DSTIPO: Joi.string().required()
        .messages({
            "string.base": "DSTIPO must be a string",
            "any.required": "DSTIPO is required field"
        }),
    VALORDISPONIVEL: Joi.number().required()
        .messages({
            "number.base": "VALORDISPONIVEL must be a number",
            "any.required": "VALORDISPONIVEL is required field"
        }),

    STCONVENIO: Joi.string().required()
        .messages({
            "string.base": "STCONVENIO must be a string",
            "any.required": "STCONVENIO is required field"
        }),
    STDESCONTOFOLHA: Joi.string().required()
        .messages({
            "string.base": "STDESCONTOFOLHA must be a string",
            "any.required": "STDESCONTOFOLHA is required field"
        }),
    STLOJA: Joi.string().required()
        .messages({
            "string.base": "STLOJA must be a string",
            "any.required": "STLOJA is required field"
        }),
    DATA_ADMISSAO: Joi.string().required()
        .messages({
            "string.base": "DATA_ADMISSAO must be a string",
            "any.required": "DATA_ADMISSAO is required field"
        }),
    TELEFONE: Joi.string().required()
        .messages({
            "string.base": "TELEFONE must be a number",
            "any.required": "TELEFONE is required field"
        }),
    DEPARTAMENTO: Joi.string().required()
        .messages({
            "string.base": "DEPARTAMENTO must be a string",
            "any.required": "DEPARTAMENTO is required field"
        }),
    IDPERFIL: Joi.number().required()
        .messages({
            "number.base": "IDPERFIL must be a number",
            "any.required": "IDPERFIL is required field"
        }),
    IDFUNCIONARIOULTALTERACAO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIOULTALTERACAO must be a number",
            "any.required": "IDFUNCIONARIOULTALTERACAO is required field"
        }),
    MOTIVODESC: Joi.string().allow('', null)
        .messages({
            "string.base": "MOTIVODESC must be a string",
        }),

});

export default updateFuncionarioLojaSchema;


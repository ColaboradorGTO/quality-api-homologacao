import Joi from 'joi';

const CriarFuncionarioSchema = Joi.object({

    NOFUNCIONARIO: Joi.string().required()
        .messages({
            'string.base': 'NOFUNCIONARIO deve ser uma string',
            'any.required': 'NOFUNCIONARIO do funcionario é obrigatório'
        }),

    NUCPF: Joi.string().required()
        .messages({
            'string.base': 'NUCPF deve ser uma string',
            'any.required': 'NUCPF do funcionario é obrigatório'
        }),

    NOLOGIN: Joi.string().allow("", null)
        .messages({
            'string.base': 'NOLOGIN deve ser uma string',
            'any.required': 'NOLOGIN do funcionario é obrigatório'
        }),

    PWSENHA: Joi.string().required()
        .messages({
            'number.base': 'PWSENHA deve ser uma string',
            'any.required': 'PWSENHA é obrigatório'
        }),

    IDEMPRESA: Joi.number().integer().required()
        .messages({
            'number.base': 'IDEMPRESA deve ser um número inteiro',
            'any.required': 'IDEMPRESA é obrigatório'
        }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            'number.base': 'IDSUBGRUPOEMPRESARIAL deve ser um número inteiro',
            'any.required': 'IDSUBGRUPOEMPRESARIAL do funcionario é obrigatório'
        }),

    DSFUNCAO: Joi.string().required()
        .messages({
            'string.base': 'DSFUNCAO deve ser uma string',
            'any.required': 'DSFUNCAO é obrigatório'
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            'number.base': 'IDFUNCIONARIO deve ser um numero',
            'any.required': 'IDFUNCIONARIO do funcionario é obrigatório'
        }),

    DSTIPO: Joi.string().required()
        .messages({
            'string.base': 'DSTIPO deve ser uma string',
            'any.required': 'DSTIPO é obrigatório'
        }),

    PERC: Joi.number().required()
        .messages({
            'number.base': 'PERC deve ser um número',
            'any.required': 'PERC é obrigatório'
        }),

    STATIVO: Joi.string().required()
        .messages({
            'string.base': 'STATIVO deve ser uma string',
            'any.required': 'STATIVO é obrigatório'
        }),

    VALORSALARIO: Joi.number().required()
        .messages({
            'number.base': 'VALORSALARIO deve ser um número',
            'any.required': 'VALORSALARIO é obrigatório'
        }),

    VALORDISPONIVEL: Joi.number().required()
        .messages({
            'number.base': 'VALORDISPONIVEL deve ser um número',
            'any.required': 'VALORDISPONIVEL é obrigatório'
        }),

    MOTIVODESC: Joi.string().allow('', null)
        .messages({
            'string.base': 'MOTIVODESC deve ser uma string',
        }),

    IDFUNCALTERACAO: Joi.number().allow('', null)
        .messages({
            'number.base': 'IDFUNCALTERACAO deve ser um número',
            'any.required': 'IDFUNCALTERACAO é obrigatório'
        }),

    STCONVENIO: Joi.string().required()
        .messages({
            'string.base': 'STCONVENIO deve ser uma string',
            'any.required': 'STCONVENIO é obrigatório'
        }),

    STDESCONTOFOLHA: Joi.string().allow('')
        .messages({
            'string.base': 'MOTIVODESC deve ser uma string',
            'string.max': 'motivo desconto deve ter no máximo 500 caracteres'
        }),

    STLOJA: Joi.string().required()
        .messages({
            'string.base': 'STLOJA deve ser uma string',
            'any.required': 'STLOJA é obrigatório'
        }),

    DATA_ADMISSAO: Joi.string().required()
        .messages({
            'string.base': 'DATA_ADMISSAO deve ser um string',
            'any.required': 'DATA_ADMISSAO é obrigatório'
        }),

    TELEFONE: Joi.string().required()
        .messages({
            'string.base': 'TELEFONE deve ser uma string',
            'any.required': 'TELEFONE é obrigatório'
        }),

    DEPARTAMENTO: Joi.string().required()
        .messages({
            'string.base': 'DEPARTAMENTO deve ser uma string',
            'any.required': 'DEPARTAMENTO do funcionario é obrigatório'
        }),

    ID: Joi.number().allow('', null)
        .messages({
            'number.base': 'ID deve ser um número',
            'any.required': 'ID do funcionario é obrigatório'
        }),

})
export default CriarFuncionarioSchema;

/* ID
IDFUNCIONARIO
IDSUBGRUPOEMPRESARIAL
IDEMPRESA
NOFUNCIONARIO
NUCPF
NOLOGIN
PWSENHA
DSFUNCAO
VALORSALARIO
PERC
STATIVO
DSTIPO
VALORDISPONIVEL
STCONVENIO
STDESCONTOFOLHA
STLOJA
DATA_ADMISSAO
TELEFONE
DEPARTAMENTO */
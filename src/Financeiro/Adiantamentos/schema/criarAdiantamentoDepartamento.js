import Joi from "joi";

// Regras da Solicitação de Adiantamento (Provisão Financeira).
//
// Compatibilidade: a tela antiga (módulo Financeiro) usa a mesma rota e não envia
// TPBENEFICIARIO. Por isso os campos novos só se tornam obrigatórios quando
// TPBENEFICIARIO é informado (fluxo novo).

const TIPOS_BENEFICIARIO = ['PJ', 'PF'];
const FORMAS_PAGAMENTO = ['PIX', 'TED', 'TRANSFERENCIA'];
const FORMAS_COM_DADOS_BANCARIOS = ['TED', 'TRANSFERENCIA'];
const DATA_ISO = /^\d{4}-\d{2}-\d{2}$/;

const textoOpcional = (campo) => Joi.string().allow('').messages({
    "string.base": `${campo} deve ser uma string`
});

const textoObrigatorio = (campo) => Joi.string().trim().required().messages({
    "any.required": `${campo} é obrigatório`,
    "string.empty": `${campo} é obrigatório`,
    "string.base": `${campo} deve ser uma string`
});

const dataObrigatoria = (campo) => Joi.string().pattern(DATA_ISO).required().messages({
    "any.required": `${campo} é obrigatório`,
    "string.empty": `${campo} é obrigatório`,
    "string.pattern.base": `${campo} deve estar no formato AAAA-MM-DD`
});

const dataOpcional = (campo) => Joi.string().pattern(DATA_ISO).allow('').messages({
    "string.pattern.base": `${campo} deve estar no formato AAAA-MM-DD`
});

// Obrigatório quando `campoCondicao` atende `condicao`; caso contrário, texto opcional.
// Atenção: a condição precisa de .required(), senão o Joi trata campo ausente como "casou".
const obrigatorioQuando = (campoCondicao, condicao, campo, schemaObrigatorio = textoObrigatorio(campo)) =>
    Joi.any().when(campoCondicao, {
        is: condicao,
        then: schemaObrigatorio,
        otherwise: textoOpcional(campo),
    });

const ehFluxoNovo = Joi.exist();
const ehPF = Joi.valid('PF').required();
const exigeDadosBancarios = Joi.valid(...FORMAS_COM_DADOS_BANCARIOS).required();

const schemaCriarAdiantamentoDepartamento = Joi.object({
    // Solicitante
    DEPARTAMENTO: Joi.string().required()
        .messages({
            "any.required": "DEPARTAMENTO é obrigatório",
            "string.empty": "DEPARTAMENTO é obrigatório",
            "string.base": "DEPARTAMENTO deve ser uma string"
        }),
    IDUSUARIOCRIACAO: Joi.number().required()
        .messages({
            "any.required": "IDUSUARIOCRIACAO é obrigatório",
            "number.base": "IDUSUARIOCRIACAO deve ser um número"
        }),
    DATACRIACAO: dataOpcional('DATACRIACAO'),

    // Filial / Empresa a ser faturada
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "IDEMPRESA é obrigatório",
            "number.base": "IDEMPRESA deve ser um número"
        }),
    NUCNPJEMPRESA: Joi.string().required()
        .messages({
            "any.required": "NUCNPJEMPRESA é obrigatório",
            "string.empty": "NUCNPJEMPRESA é obrigatório",
            "string.base": "NUCNPJEMPRESA deve ser uma string"
        }),
    RAZAOSOCIALEMPRESA: textoOpcional('RAZAOSOCIALEMPRESA'),

    // Beneficiário
    TPBENEFICIARIO: Joi.string().valid(...TIPOS_BENEFICIARIO)
        .messages({
            "any.only": "TPBENEFICIARIO deve ser PJ ou PF"
        }),

    // Beneficiário PJ (obrigatório também no fluxo antigo, sem TPBENEFICIARIO)
    CNPJFATURAMENTO: Joi.any().when('TPBENEFICIARIO', {
        is: ehPF,
        then: textoOpcional('CNPJFATURAMENTO'),
        otherwise: Joi.any().when('TPBENEFICIARIO', {
            // Fluxo novo envia o CNPJ sem máscara; o antigo mantém a regra original.
            is: Joi.valid('PJ').required(),
            then: Joi.string().pattern(/^\d{14}$/).required(),
            otherwise: Joi.string().required(),
        }).messages({
            "any.required": "CNPJFATURAMENTO é obrigatório",
            "string.empty": "CNPJFATURAMENTO é obrigatório",
            "string.pattern.base": "CNPJFATURAMENTO deve conter 14 dígitos"
        }),
    }),
    RAZAOSOCIALFATURAMENTO: obrigatorioQuando('TPBENEFICIARIO', Joi.valid('PJ').required(), 'RAZAOSOCIALFATURAMENTO'),

    // Beneficiário PF
    NUCPFBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'NUCPFBENEFICIARIO',
        Joi.string().pattern(/^\d{11}$/).required().messages({
            "any.required": "NUCPFBENEFICIARIO é obrigatório",
            "string.empty": "NUCPFBENEFICIARIO é obrigatório",
            "string.pattern.base": "NUCPFBENEFICIARIO deve conter 11 dígitos"
        })),
    NOBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'NOBENEFICIARIO'),
    NURGBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'NURGBENEFICIARIO'),
    EMAILBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'EMAILBENEFICIARIO',
        Joi.string().trim().email({ tlds: { allow: false } }).required().messages({
            "any.required": "EMAILBENEFICIARIO é obrigatório",
            "string.empty": "EMAILBENEFICIARIO é obrigatório",
            "string.email": "EMAILBENEFICIARIO inválido"
        })),
    NUCEPBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'NUCEPBENEFICIARIO',
        Joi.string().pattern(/^\d{8}$/).required().messages({
            "any.required": "NUCEPBENEFICIARIO é obrigatório",
            "string.empty": "NUCEPBENEFICIARIO é obrigatório",
            "string.pattern.base": "NUCEPBENEFICIARIO deve conter 8 dígitos"
        })),
    ENDERECOBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'ENDERECOBENEFICIARIO'),
    TELEFONEBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'TELEFONEBENEFICIARIO',
        Joi.string().pattern(/^\d{10,11}$/).required().messages({
            "any.required": "TELEFONEBENEFICIARIO é obrigatório",
            "string.empty": "TELEFONEBENEFICIARIO é obrigatório",
            "string.pattern.base": "TELEFONEBENEFICIARIO deve conter 10 ou 11 dígitos"
        })),
    DTNASCIMENTOBENEFICIARIO: obrigatorioQuando('TPBENEFICIARIO', ehPF, 'DTNASCIMENTOBENEFICIARIO',
        dataObrigatoria('DTNASCIMENTOBENEFICIARIO')),

    // Despesa
    TPDESPESA: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'TPDESPESA'),
    UNIDADENEGOCIO: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'UNIDADENEGOCIO'),
    CENTROCUSTO: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'CENTROCUSTO'),
    DESCRICAO: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'DESCRICAO'),
    VRSOLICITADO: Joi.number().positive().required()
        .messages({
            "any.required": "VRSOLICITADO é obrigatório",
            "number.base": "VRSOLICITADO deve ser um número",
            "number.positive": "VRSOLICITADO deve ser maior que zero"
        }),

    // Pagamento
    NOFAVORECIDO: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'NOFAVORECIDO'),
    FORMAPAGAMENTO: Joi.any().when('TPBENEFICIARIO', {
        is: ehFluxoNovo,
        then: Joi.string().valid(...FORMAS_PAGAMENTO).required().messages({
            "any.required": "FORMAPAGAMENTO é obrigatório",
            "any.only": `FORMAPAGAMENTO deve ser ${FORMAS_PAGAMENTO.join(', ')}`
        }),
        otherwise: textoOpcional('FORMAPAGAMENTO'),
    }),
    CHAVEPIX: obrigatorioQuando('FORMAPAGAMENTO', Joi.valid('PIX').required(), 'CHAVEPIX'),
    IDBANCO: Joi.any().when('FORMAPAGAMENTO', {
        is: exigeDadosBancarios,
        then: Joi.number().required().messages({
            "any.required": "IDBANCO é obrigatório",
            "number.base": "IDBANCO é obrigatório"
        }),
        otherwise: Joi.number().allow(null),
    }),
    NUAGENCIA: obrigatorioQuando('FORMAPAGAMENTO', exigeDadosBancarios, 'NUAGENCIA'),
    NUCONTA: obrigatorioQuando('FORMAPAGAMENTO', exigeDadosBancarios, 'NUCONTA'),
    NUDIGITOCONTA: obrigatorioQuando('FORMAPAGAMENTO', exigeDadosBancarios, 'NUDIGITOCONTA'),
    DTPAGAMENTO: Joi.any().when('TPBENEFICIARIO', {
        is: ehFluxoNovo,
        then: dataObrigatoria('DTPAGAMENTO'),
        otherwise: dataOpcional('DTPAGAMENTO'),
    }),

    // Nota fiscal / anexos
    POSSUINOTAFISCAL: Joi.string().required()
        .messages({
            "any.required": "POSSUINOTAFISCAL é obrigatório",
            "string.empty": "POSSUINOTAFISCAL é obrigatório",
            "string.base": "POSSUINOTAFISCAL deve ser uma string"
        }),
    ANEXOORCAMENTO: obrigatorioQuando('TPBENEFICIARIO', ehFluxoNovo, 'ANEXOORCAMENTO'),
    ANEXONOTAFISCAL: textoOpcional('ANEXONOTAFISCAL'),
    DSJUSTIFICATIVA: textoOpcional('DSJUSTIFICATIVA'),
});


export default schemaCriarAdiantamentoDepartamento;

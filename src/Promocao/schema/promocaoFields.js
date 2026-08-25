import Joi from 'joi';

const identificador = Joi.alternatives().try(Joi.number(), Joi.string()).allow(null, '');
const numero = Joi.number().allow(null);
const texto = Joi.string().allow('', null);
const status = Joi.alternatives().try(Joi.string(), Joi.boolean()).allow('', null);

const promocaoFields = {
    IDRESUMOPROMOCAOMARKETING: identificador,
    IDMECANICARESUMOPROMOCAOMARKETING: identificador,
    TPAPARTIRDE: texto,
    TPAPLICADOA: texto,
    TPFATORPROMO: texto,
    APARTIRDEQTD: numero,
    APARTIRDOVLR: numero,
    FATORPROMOVLR: numero,
    FATORPROMOPERC: numero,
    VLPRECOPRODUTO: numero,
    DTHORAINICIO: texto,
    DTHORAFIM: texto,
    DSPROMOCAOMARKETING: texto,
    STATIVO: status,
    STEMPRESAPROMO: status,
    STDETPROMOORIGEM: status,
    STDETPROMODESTINO: status,
    STPRODUTO: status,
    STESTRUTURA: status,
    STESTRUTURAPRODUTO: status,
    IDEMPRESA: identificador,
    IDEMPRESAPROMOCAOMARKETING: identificador,
    IDPRODUTO: identificador,
    IDGRUPOEMDESTINO: identificador,
    IDSUBGRUPOEMDESTINO: identificador,
    IDMARCAEMDESTINO: identificador,
    IDFORNECEDOREMDESTINO: identificador,
    IDPRODUTODESTINO: identificador,
    IDGRUPOEMORIGEM: identificador,
    IDSUBGRUPOEMORIGEM: identificador,
    IDMARCAEMORIGEM: identificador,
    IDFORNECEDOREMORIGEM: identificador,
    IDPRODUTOORIGEM: identificador,
    detalhesDestino: Joi.array().items(Joi.object().unknown(true)).allow(null),
    detalhesOrigem: Joi.array().items(Joi.object().unknown(true)).allow(null)
};

export default promocaoFields;

import Joi from 'joi';

const textoOpcional = Joi.string().allow('', null);
const identificadorOpcional = Joi.alternatives().try(Joi.number(), Joi.string()).allow(null);

const perfilUsuarioMenuFields = {
    IDUSUARIO: Joi.number().required(),
    CRIAR: textoOpcional,
    ALTERAR: textoOpcional,
    STATIVO: textoOpcional,
    DATAULTIMAALTERACAO: textoOpcional,
    DATA_CRIACAO: textoOpcional,
    IDMODULO: identificadorOpcional,
    IDMODULOADMINISTRATIVO: textoOpcional,
    IDMODULOCOMERCIAL: textoOpcional,
    IDMODULOCONTABILIDADE: textoOpcional,
    IDMODULOFINANCEIRO: textoOpcional,
    IDMODULOGERENCIA: textoOpcional,
    IDMODULOINFORMATICA: textoOpcional,
    IDMODULOMARKETING: textoOpcional,
    IDMODULOCOMPRAS: textoOpcional,
    IDMODULOCADASTRO: textoOpcional,
    IDMODULOEXPEDICAO: textoOpcional,
    IDMODULOCOMPRASADM: textoOpcional,
    IDMODULOETIQUETAGEM: textoOpcional,
    IDMODULOCONFERENCIACEGA: textoOpcional,
    IDMODULOVOUCHER: textoOpcional,
    IDMODULOMALOTE: textoOpcional,
    IDMODULORH: textoOpcional,
    IDUSERULTIMAALTERACAO: identificadorOpcional,
    IDPERMISSAO: identificadorOpcional,
    IDMODULORESUMOVENDAS: textoOpcional,
    IDMODULOPROMOCAO: textoOpcional,
    ADMINISTRADOR: textoOpcional,
    N4: textoOpcional,
    N3: textoOpcional,
    N2: textoOpcional,
    N1: textoOpcional,
    IDMENU: Joi.number().required(),
    IDMENUFILHO: Joi.number().allow(null)
};

export default perfilUsuarioMenuFields;

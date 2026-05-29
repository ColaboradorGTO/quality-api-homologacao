//  return `<TLote_GNRE versao="2.00" xmlns="http://www.gnre.pe.gov.br"><guias><TDadosGNRE versao="2.00"><ufFavorecida>${ufFavorecida}</ufFavorecida><tipoGnre>0</tipoGnre><contribuinteEmitente><identificacao><CNPJ>${emitCnpj}</CNPJ></identificacao><razaoSocial>${payload.emitente.xNome}</razaoSocial><endereco>${payload.emitente.xLgr}</endereco><municipio>${codMunicipioEmitente}</municipio><uf>${payload.emitente.state}</uf><cep>${this.removerMascara(payload.emitente.CEP)}</cep></contribuinteEmitente><itensGNRE><item><receita>${payloadReceita}</receita><documentoOrigem tipo="10">${documentoOrigem}</documentoOrigem><referencia><periodo>0</periodo><mes>${mes}</mes><ano>${ano}</ano></referencia><dataVencimento>${payload.dataVencimento}</dataVencimento><produto>${payload.produto}</produto><valor tipo="11">${valor}</valor><valor tipo="21">${valor}</valor><contribuinteDestinatario><identificacao><CNPJ>${destCnpj}</CNPJ></identificacao><razaoSocial>${payload.destinatario.xNomeDestinatario}</razaoSocial><municipio>${codMunicipioDestinatario}</municipio></contribuinteDestinatario><camposExtras><campoExtra><codigo>113</codigo><tipo>T</tipo><valor>${payload.chave}</valor></campoExtra></camposExtras></item></itensGNRE><valorGNRE>${valor}</valorGNRE><dataPagamento>${payload.dataPagamento}</dataPagamento><identificadorGuia>1</identificadorGuia></TDadosGNRE></guias></TLote_GNRE>`.trim();

/* 
 dados que preciso enviar
 {
    "chave": "53260536769602005700550000000147921506192504",
    "nnf": 14792,
    "receita": "100102",
    "dataVencimento": "2026-05-28",
    "dataPagamento": "2026-05-28",
    "emitente": {
        "CNPJ": "36769602005700",
        "xNome": "GTO COMERCIO ATACADISTA DE CONFECCOES E CALCADOS LTDA",
        "state": "DF",
        "xLgr": "SN",
        "municipioEmitente": "00108",
        "CEP": "71720510",
        "fone": "(61) 3263-0493"
    },
    "destinatario": {
        "CNPJ": "05761069000151",
        "xNomeDestinatario": "SOCIEDADE MARANHENSE DE DIREITOS HUMANOS",
        "UF": "MA",
        "municipioDestinatario": "21113"
    },
    "valorNota": 179.98
}



---------------------
dados que deu certo 
{
  "chave": "53251236769602010118550000004031691832670841",
  "nnf": 403169,
  "receita": "100102",
  "dataVencimento": "2026-05-28",
  "dataPagamento": "2026-05-28",

  "emitente": {
    "CNPJ": "36769602010118",
    "xNome": "GTO COMERCIO ATACADISTA DE CONFECCOES E CALCADOS LTDA",
    "state": "DF",
    "xLgr": "SN",
    "municipioEmitente": "00108",
    "CEP": "71977720",
    "fone": "(61) 3263-0493"
  },

  "destinatario": {
    "CNPJ": "45638235000141",
    "xNomeDestinatario": "ICONE STORE COMERCIO DE CONFECCOES E CALCADOS LTDA",
    "UF": "CE",
    "municipioDestinatario": "05407"
  },

  "valorNota": 2950.20
}
*/
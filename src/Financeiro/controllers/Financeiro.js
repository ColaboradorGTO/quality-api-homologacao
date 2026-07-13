import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;
import { MaloteClient } from "../Malotes/client/index.js";
import { MaloteService } from "../Malotes/services/index.js";

const maloteClient = new MaloteClient(process.env.API_URL);
const maloteService = new MaloteService(maloteClient);
import maloteSchema from "../Malotes/schema/index.js";
class FinanceiroControllers {

  async getListasHistoricosMalotes(req, res) {
    let { idEmpresa, idMalote, idHistoricoMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    idHistoricoMalote = idHistoricoMalote ? idHistoricoMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

     
      const apiUrl = `${url}/api/financeiro/historicos-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&idHistoricoMalote=${idHistoricoMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasHistoricosMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListasMalotesLojas(req, res) {
    let { idEmpresa, idMarca, idMalote, statusMalote, pendenciaMalote, dataPesquisaInicio, dataPesquisaFim, dataConferenciaInicio, dataConferenciaFim, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idMarca = idMarca ? idMarca : '';
    dataConferenciaInicio = dataFormatada(dataConferenciaInicio) ? dataFormatada(dataConferenciaInicio) : '';
    dataConferenciaFim = dataFormatada(dataConferenciaFim) ? dataFormatada(dataConferenciaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/malotes-por-loja.xsjs?idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&statusMalote=${statusMalote}&idMalote=${idMalote}&idPendenciaMalote=${pendenciaMalote}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataConferenciaInicio=${dataConferenciaInicio}&dataConferenciaFim=${dataConferenciaFim}&page=${page}&pageSize=${pageSize}`

      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }
  }

  async getListaPendenciasMalotes(req, res) {
    let { idEmpresa, idMalote, statusMalote, pendenciaMalote, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    idMalote = idMalote ? idMalote : '';
    statusMalote = statusMalote ? statusMalote : '';
    pendenciaMalote = pendenciaMalote ? pendenciaMalote : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/pendencias-malotes.xsjs?idEmpresa=${idEmpresa}&idMalote=${idMalote}&statusMalote=${statusMalote}&pendenciaMalote=${pendenciaMalote}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaPendenciasMalotes verifique se os parâmetros estão sendo preenchidos:", error);
      throw error;
    }

  }

  async getListaExtratoDaLojaPeriodoFinan(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
   
    try {
      const apiUrl = `${url}/api/financeiro/extrato-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&pageSize=${pageSize}&page=${page}`
     
      const response = await axios.get(apiUrl)
  
      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaExtratoDaLojaPeriodoFinan verifique se os parâmetros estão sendo preenchidos:", error);
      return res.status(500).json({ error: "Erro ao buscar extrato da loja por período." });

    }

  }

  async getListaVendasMarca(req, res) {
    let { idMarcaPesqVenda, page, pageSize, dataPesqInicio, dataPesqFim } = req.query;


    idMarcaPesqVenda = idMarcaPesqVenda ? idMarcaPesqVenda : '';

    dataPesqInicio = dataFormatada(dataPesqInicio) ? dataFormatada(dataPesqInicio) : '';
    dataPesqFim = dataFormatada(dataPesqFim) ? dataFormatada(dataPesqFim) : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarcaPesqVenda}&dataPesquisaInicio=${dataPesqInicio}&dataPesquisaFim=${dataPesqFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasMarcaFinanceiro(req, res) {
    let { idMarca, idLoja, idLojaPesquisa, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;


    idMarca = Number(idMarca);
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLoja = idLoja ? idLoja : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojaPesquisa=${idLojaPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasResumidaMarca(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-digital-marca.xsjs?pageSize=${pageSize}&page=${page}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }


  async getListaVendasResumidaFinanceiro(req, res) {
    let { dataPesquisa, page, pageSize } = req.query;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-total.xsjs?dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }


  async getListaVendasTransacoesEmpresa(req, res) {
    let { dataPesquisa, page, pageSize } = req.query;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-pagamentos.xsjs?dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasEmpresa(req, res) {
    let { dataPesquisa, page, pageSize } = req.query;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-total-empresa.xsjs?dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaDetalheFechamento(req, res) {
    let { idEmpresa, dataPesquisa, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/detalhe-fechamento.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasLojaPeriodo(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      

      const apiUrl = `${url}/api/financeiro/venda-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  // INICIO CONSUMINDO BANCO DO RECAT

  // FIM CONSUMINDO BANCO DO RECAT

  async getListaCaixasMovmentoFinanceiro(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojasPesquisa, page, pageSize } = req.query;

    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idMarca = idMarca ? idMarca : '';
    idLoja = idLoja ? idLoja : '';
    idLojasPesquisa = idLojasPesquisa ? idLojasPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      
      const apiUrl = `${url}/api/financeiro/lista-caixas-movimento.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojasPesq=${idLojasPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasMarcaROB(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-marca-rob.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasMarcaMarckup(req, res) {
    let { idMarca, page, pageSize, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojaPesquisa } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);

      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-marca-marckup.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojasPesq=${idLojaPesquisa}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasDigital(req, res) {
    let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

    if (!isNaN(idEmpresa)) {
      idEmpresa = Number(idEmpresa);
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-digital.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaDespesasLoja(req, res) {
    let { idEmpresa, idCategoria, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
    idCategoria = idCategoria ? idCategoria : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/despesa-loja.xsjs?idCategoria=${idCategoria}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&pageSize=${pageSize}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPixPeriodo(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';
      try {
    

        const apiUrl = `${url}/api/financeiro/venda-pix-periodo.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasPixConsolidadoLojas(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-pix-consolidado-loja.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaVendasPixConsolidado(req, res) {
    let { idMarca, pageSize, page, dataPesquisaInicio, dataPesquisaFim, idLoja, listaEmpresas } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      listaEmpresas = listaEmpresas ? listaEmpresas : '';

      try {
        
        const apiUrl = `${url}/api/financeiro/venda-pix-consolidado.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${listaEmpresas}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaFaturasPixConsolidado(req, res) {
    let { idMarca, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';
      try {

        const apiUrl = `${url}/api/financeiro/fatura-pix-periodo-consolidado.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaFaturaPixConsolidadoLoja(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, empresa, page, pageSize } = req.query;

    idMarca = Number(idMarca) ? Number(idMarca) : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLoja = idLoja ? idLoja : '';
    empresa = empresa ? empresa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/fatura-pix-consolidado-loja.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresa=${empresa}`
      const response = await axios.get(apiUrl)
      

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasConciliar(req, res) {
    let { idGrupo, idLoja, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;


    idGrupo = Number(idGrupo) ? Number(idGrupo) : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idLoja = idLoja ? idLoja : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-conciliacao.xsjs?idGrupo=${idGrupo}&idLoja=${idLoja}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaConciliarBancoConsolidado(req, res) {
    let { idConta, pageSize, page, dataPesquisaInicio, dataPesquisaFim, dataCompensacaoInicio, dataCompensacaoFim, dataMovimentoInicio, dataMovimentoFim } = req.query;

    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    idConta = idConta ? idConta : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    dataCompensacaoInicio = dataCompensacaoInicio ? dataCompensacaoInicio : '';
    dataCompensacaoFim = dataCompensacaoFim ? dataCompensacaoFim : '';
    dataMovimentoInicio = dataMovimentoInicio ? dataMovimentoInicio : '';
    dataMovimentoFim = dataMovimentoFim ? dataMovimentoFim : '';

    try {
      const apiUrl = `${url}/api/financeiro/deposito-loja-consolidado.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompInicio=${dataCompensacaoInicio}&dataCompFim=${dataCompensacaoFim}&datamovinicio=${dataMovimentoInicio}&datamovfim=${dataMovimentoFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaDetalheRecebimentosEletronico(req, res) {
    let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim, nomeTef, nomeAutorizador, numeroParcelas } = req.query;


    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    nomeTef = nomeTef ? nomeTef : '';
    nomeAutorizador = nomeAutorizador ? nomeAutorizador : '';
    numeroParcelas = numeroParcelas ? numeroParcelas : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      
      const apiUrl = `${url}/api/financeiro/venda-detalhe-recebimento-eletronico.xsjs?page=${page}&pageSize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&nomeTef=${nomeTef}&nomeAutorizador=${nomeAutorizador}&numeroParcelas=${numeroParcelas}`
      const response = await axios.get(apiUrl)
      
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaSaldoExtratoLoja(req, res) {
    let { dataPesquisaInicio, idMarca } = req.query;
   
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    idMarca = idMarca ? idMarca : '';
    try {
      const apiUrl = `${url}/api/financeiro/saldo-loja-por-grupo.xsjs?&idGrupoEmpresarial=${idMarca}&dataPesquisa=${dataPesquisaInicio}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaBanco(req, res) {
    let { } = req.query;

    try {
      const apiUrl = `${url}/api/banco.xsjs`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error no FinanceiroControllers.getListaBanco:", error);
      throw error;
    }
  }

  async getListaContaBanco(req, res) {
    let { idContaBanco, idBanco, idEmpresa, dsConta, page, pageSize } = req.query;
    idContaBanco = idContaBanco ? idContaBanco : '';
    idBanco = idBanco ? idBanco : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dsConta = dsConta ? dsConta : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/conta-banco.xsjs?id=${idContaBanco}&idBanco=${idBanco}&idEmpresa=${idEmpresa}&dsConta=${dsConta}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error no FinanceiroControllers.getListaContaBanco:", error);
      throw error;
    }
  }

  async getListaQuebraCaixaIntegracaoSAP(req, res) {
    let { idMarca, idEmpresa, cpfOperadorQuebra, uf, stQuebraPositivaNegativa, dataPesquisaInicio, dataPesquisaFim, stAtivo, stConferido, pageSize, page } = req.query;

      idMarca = idMarca ? idMarca : '';
      idEmpresa = idEmpresa ? idEmpresa : '';
      cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';
      uf = uf ? uf : '';
      stQuebraPositivaNegativa = stQuebraPositivaNegativa ? stQuebraPositivaNegativa : '';
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      stAtivo = stAtivo ? stAtivo : '';
      stConferido = stConferido ? stConferido : '';
    try {

   
      const apiUrl = `${url}/api/financeiro/quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfOperadorQuebra=${cpfOperadorQuebra}&tpQuebra=${stQuebraPositivaNegativa}&uf=${uf}&stAtivo=${stAtivo}&stConferido=${stConferido}`;

      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.getListaQuebraCaixaIntegracaoSAP:", error);
      throw error;
    }

  }

  async  getDetalheFaturaFinanceiro(req, res) {
    let { idEmpresa, idDetalheFatura, dataPesquisaInicio, dataPesquisaFim,  page, pageSize} = req.query;
    
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    
    try {
      
      const apiUrl = `${url}/api/financeiro/detalhe-fatura.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);
  
      return res.json(response.data); 
    } catch (error) {
      console.error("Erro no FaturasController.getDetalheFaturaFinanceiro:", error);
      throw error;
    }
    
  }
  
  async putFaturaFinanceiro(req, res) {
    let { IDDETALHEFATURA, NUCODAUTORIZACAO, VRRECEBIDO, NUAUTORIZACAO, STPIX, STCANCELADO } = req.body;

    if (!IDDETALHEFATURA) {
      console.error("Erro no FinanceiroControllers.putFaturaFinanceiro: Faltando Parametos obrigatórios");
      return res.status(400).json({ error: "Faltando Parametos obrigatórios" });
    }

    try {
      const apiUrl = `${url}/api/financeiro/atualizar-fatura.xsjs`
      const response = await axios.put(apiUrl, {
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA,
      })

      return res.json(response.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json({
          error: error.response.data.error
        });
      }

      if (error.request) {
        return res.status(502).json({
          error: 'Falha ao se comunicar com o serviço de voucher'
        });
      }

      return res.status(500).json({
        error: 'Erro em FinanceiroControllers.putFaturaConferencia'
      });
      // console.error("Erro no FinanceiroControllers.putFaturaFinanceiro:", error);
      // throw error;
    }
  }

  async putFaturaConferencia(req, res) {
    let { IDS_FATURAS, STCONFERIDO, IDFUNCIONARIO } = req.body;

    if (!IDS_FATURAS) {
      return res.status(400).json({ error: "Faltando Parameto IDS_FATURAS obrigatórios" });
    }
    
    try {
      const apiUrl = `${url}/api/financeiro/fatura-atualizacao-conferencia.xsjs`
    
      const response = await axios.put(apiUrl, {
        IDS_FATURAS,
        STCONFERIDO,
        IDFUNCIONARIO,
      })

      return res.json(response.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json({
          error: error.response.data.error
        });
      }

      if (error.request) {
        return res.status(502).json({
          error: 'Falha ao se comunicar com o serviço de voucher'
        });
      }

      return res.status(500).json({
        error: 'Erro em FinanceiroControllers.putFaturaConferencia'
      });
  
    }
  }


  async updateAdiantamentoStatus(req, res) {
    let { IDADIANTAMENTOSALARIO, STATIVO } = req.body;

    try {
      const apiUrl = `${url}/api/financeiro/atualizacao-adiantamento-status.xsjs`
      const response = await axios.put(apiUrl, {
        IDADIANTAMENTOSALARIO,
        STATIVO
      })

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putContaBanco(req, res) {
    let {
      IDCONTABANCO,
      IDBANCO,
      DSCONTABANCO,
      NUAGENCIA,
      NUDIGITOAGENCIA,
      NUCONTA,
      NUDIGITOCONTA,
      TPPESSOA,
      STPADRAO,
      STATIVO,
      NUCONTASAP,
      TPCONTA
    } = req.body;

    try {


      if (!IDCONTABANCO) {
        throw new Error("IDCONTABANCO é obrigatório");
      }

      const apiUrl = `${url}/api/financeiro/conta-banco.xsjs`
      const response = await axios.put(apiUrl, {
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        STPADRAO,
        STATIVO,
        NUCONTASAP,
        TPCONTA
      })

      return res.json(response.data);
    } catch (error) {
      console.error("error no FinanceiroControllers.putContaBanco:", error);
      throw error;
    }
  }

  async putAlterarDataMovimentoDeposito(req, res) {
    let { IDDEPOSITOLOJA, DTMOVIMENTOCAIXA } = req.body;

    if (!IDDEPOSITOLOJA) {
      return res.status(400).json({ error: "Faltando Parameto IDDEPOSITOLOJA obrigatórios" });
    }
    
    try {
      const apiUrl = `${url}/api/financeiro/deposito-alteracao-data-movimento.xsjs`

      const response = await axios.put(apiUrl, [{
        IDDEPOSITOLOJA, DTMOVIMENTOCAIXA
      }])

      return res.json(response.data);
    } catch (error) {
      if (error.response) {
        return res.status(error.response.status).json({
          error: error.response.data.error
        });
      }

      if (error.request) {
        return res.status(502).json({
          error: 'Falha ao se comunicar com o serviço de voucher'
        });
      }

      return res.status(500).json({
        error: 'Erro em FinanceiroControllers.putFaturaConferencia'
      });
  
    }
  }

  async createMotivoDevolucao(req, res) {
    let { IDUSUARIO, DSMOTIVO } = req.body;

    try {
      const apiUrl = `${url}/api/financeiro/motivo-devolucao.xsjs`
      const response = await axios.post(apiUrl, {
        IDUSUARIO,
        DSMOTIVO,

      })

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async postContaBanco(req, res) {
    let {
      IDCONTABANCO,
      IDBANCO,
      DSCONTABANCO,
      NUAGENCIA,
      NUDIGITOAGENCIA,
      NUCONTA,
      NUDIGITOCONTA,
      TPPESSOA,
      NUCONTASAP
    } = req.body;

    try {
      if (!IDBANCO) {
        throw new Error("IDBANCO é obrigatório");
      }

      const apiUrl = `${url}/api/financeiro/conta-banco.xsjs`
      const response = await axios.post(apiUrl, {
        IDCONTABANCO,
        IDBANCO,
        DSCONTABANCO,
        NUAGENCIA,
        NUDIGITOAGENCIA,
        NUCONTA,
        NUDIGITOCONTA,
        TPPESSOA,
        NUCONTASAP
      })

      return res.json(response.data);
    } catch (error) {
      console.error("error no FinanceiroControllers.postContaBanco:", error);
      throw error;
    }
  }

  async putMalotesLoja(req, res) {

    try {
      const { error, value } = maloteSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await maloteService.updateMalote(
        value.IDMALOTE,
        value.STATUS,
        value.OBSERVACAOADMINISTRATIVO,
        value.PENDENCIAS,
        value.IDUSERULTIMAALTERACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FinanceiroControllers.putMalotes:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }
}


export default new FinanceiroControllers();
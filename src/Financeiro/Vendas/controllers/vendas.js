import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import { VendasServices } from "../service/vendasService.js";
import { VendasClient } from "../client/vendasClient.js";
import schemaAtualizarListaAjusteExtrato from "../schema/schemaAtualizarListaAjusteExtrato.js";

const url = process.env.API_URL;
const vendasClient = new VendasClient(url);
const vendasServices = new VendasServices(vendasClient);

class FinanceiroVendasControllers {

  async getListaVendasLojaPeriodo(req, res) {
    try {
      let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
      idEmpresa = idEmpresa ? idEmpresa : '';
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';

      const apiUrl = `${url}/api/financeiro/venda-loja-periodo.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idEmpresa=${idEmpresa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (err) {
      console.error('Erro ao buscar Vendas Loja Por Periodo:', err);
      return res.status(500).json({ message: 'Erro ao buscar Vendas Loja Por Periodo' });
    }
  }

  async getListaVendasDigital(req, res) {
    try {
      let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
      idEmpresa = idEmpresa ? idEmpresa : '';
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';

      const apiUrl = `${url}/api/financeiro/venda-digital.xsjs?pageSize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasDigitalMarca(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-digital-marca.xsjs?pageSize=500&page=1&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FinanceiroVendasControllers.getListaVendasDigitalMarca:", error);
      throw error;
    }

  }

  async getListaVendasConciliar(req, res) {
    let { idGrupo, idLoja, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    try {
      idGrupo = idGrupo ? idGrupo : '';
      idLoja = idLoja ? idLoja : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      const apiUrl = `${url}/api/financeiro/venda-conciliacao.xsjs?page=${page}&idGrupo=${idGrupo}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&idLoja=${idLoja}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasTotal(req, res) {
    let { dataPesquisa, page, pageSize } = req.query;
    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = await `${url}/api/financeiro/venda-total.xsjs?dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaRemessaVendas(req, res) {
    let { idGrupo, idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idGrupo = idGrupo ? idGrupo : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    pageSize = pageSize ? pageSize : '';
    page = page ? page : '';
    try {
      const apiUrl = `${url}/api/financeiro/remessa-venda.xsjs?page=${page}&pageSize=${pageSize}&idGrupoEmpresa=${idGrupo}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesuisaFim=${dataPesquisaFim}&idLojaEmpresa=${idEmpresa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPagamentos(req, res) {
    try {
      let { idEmpresa, dataPesquisa, page, pageSize } = req.query;
      idEmpresa = idEmpresa ? idEmpresa : '';
      dataPesquisa = dataPesquisa ? dataPesquisa : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      const apiUrl = `${url}/api/financeiro/venda-pagamentos.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)


      return res.json(response.data);
    } catch (err) {
      console.error('Controller Erro ao buscar Vendas Loja Por Periodo:', err);
      throw err;
    }
  }

  async getListaVendasPixConsolidado(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    try {
      idMarca = Number(idMarca) ? Number(idMarca) : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      pageSize = pageSize ? pageSize : '';
      page = page ? page : '';

      const apiUrl = `${url}/api/financeiro/venda-pix-consolidado.xsjs?pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPixConsolidadoLojas(req, res) {
    let { idMarca, idLoja, empresaLista, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    try {
      idMarca = Number(idMarca) ? Number(idMarca) : '';
      idLoja = idLoja ? idLoja : '';
      empresaLista = empresaLista ? empresaLista : '';
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      const apiUrl = `${url}/api/financeiro/venda-pix-consolidado-loja.xsjs?pageSize=${pageSize}&idMarca=${idMarca}&idLoja=${idLoja}&empresasList=${empresaLista}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPixPeriodo(req, res) {
    let { byId, idMarca, dataPesquisaInicio, dataPesquisaFim, dataCompInicio, dataCompFim, idLoja, empresaLista, page, pageSize } = req.query;

    try {
      byId = byId ? byId : '';
      idMarca = idMarca ? idMarca : '';
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      dataCompInicio = dataCompInicio ? dataCompInicio : '';
      dataCompFim = dataCompFim ? dataCompFim : '';
      idLoja = idLoja ? idLoja : '';
      empresaLista = empresaLista ? empresaLista : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';

      const apiUrl = `${url}/api/financeiro/venda-pix-periodo.xsjs?pageSize=${pageSize}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&lojas=${idLoja}&empresasList=${empresaLista}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasEmpresa(req, res) {
    let { idEmpresa, dataPesquisa, page, pageSize } = req.query;
    try {
      idEmpresa = idEmpresa ? idEmpresa : '';
      dataPesquisa = dataPesquisa ? dataPesquisa : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';

      const apiUrl = `${url}/api/financeiro/venda-total-empresa.xsjs?pageSize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaRecebimentosEletronico(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';;
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-recebido-eletronico.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaRecebimentos(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';;
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-total-recebido-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasMarca(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idEmpresa, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=1000&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasTotalMes(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, horaFinal, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/financeiro/venda-total-mes.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisa=${dataPesquisaFim}&horaFinal=${horaFinal}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por mes: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalLojaHora(req, res) {
    let { dataPesquisa, horaFinal, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda-total-loja-hora.xsjs?dataPesquisa=${dataPesquisa}&horaFinal=${horaFinal}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalLojaHoraAnoPassado(req, res) {
    let { dataPesquisa, horaFinal, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    horaFinal = horaFinal ? horaFinal : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/dashboard/venda-total-loja-hora.xsjs?dataPesquisa=${dataPesquisa}&horaFinal=${horaFinal}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasTotalTO(req, res) {
    let { dataPesquisa, idGrupo, page, pageSize } = req.query;

    dataPesquisa = dataPesquisa ? dataPesquisa : '';
    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/venda-total-to.xsjs?dataPesquisa=${dataPesquisa}&idgrupo=${idGrupo}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("erro ao buscar vendas totais por hora: no controller Vendas", error);
      throw error;
    }
  }

  async getListaVendasMarcaFinanceiro(req, res) {
    let { idMarca, idLoja, idLojaPesquisa, pageNumber, dataPesquisaInicio, dataPesquisaFim, page } = req.query;

    idMarca = Number(idMarca);
    const pageSize = 100;
    const offset = (pageNumber - 1) * pageSize;
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLoja = idLoja ? idLoja : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
    page = page ? page : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-marca-periodo.xsjs?pageSize=${pageSize}&page=${page}&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojaPesquisa=${idLojaPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
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
    let { idMarca, pageNumber, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojaPesquisa } = req.query;

    if (!isNaN(idMarca)) {
      idMarca = Number(idMarca);
      const pageSize = 100;
      const offset = (pageNumber - 1) * pageSize;
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
      idLoja = idLoja ? idLoja : '';
      idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
      try {

        const apiUrl = `${url}/api/financeiro/venda-marca-marckup.xsjs?pageSize=500&idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojasPesq=${idLojaPesquisa}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
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

  async getListaVendasResumidaFinanceiro(req, res) {
    let { dataPesquisa } = req.query;
    const pageSize = 100;
    dataPesquisa = dataFormatada(dataPesquisa)

    try {
      const apiUrl = `${url}/api/financeiro/venda-total.xsjs?dataPesquisa=${dataPesquisa}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putListaVendaPixStatusConferido(req, res) {

    try {
      const { error, value } = schemaAtualizarListaAjusteExtrato.validate(req.body, {

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

      const response = await vendasServices.updateAjusteExtrato(
        value.DSHISTORIO,
        value.VRDEBITO,
        value.VRCREDITO,
        value.IDOPERADOR,
        value.DATACADASTRO,
        value.STATIVO,
        value.STCANCELADO,
        value.IDAJUSTEEXTRATO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FinanceiroVendasControllers.putListaVendaPixStatusConferido:', error);
      return res.status(500).json({ message: 'Erro FinanceiroVendasControllers.putListaVendaPixStatusConferido', error });

    }
  }
}

export default new FinanceiroVendasControllers();
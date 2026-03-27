
import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;


class PedidosControllers {
  async getListaPedidosCompras(req, res) {
    let { id, idContaPagar, idPedido, idMarca, idFornecedor, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idMarca = idMarca ? idMarca : '';
    idPedido = idPedido ? idPedido : '';
  
    try {

      const apiUrl = `${url}/api/financeiro/pedidos_compra.xsjs?pageSize=${pageSize}&page=${page}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornecedor}&idMarcaPesquisa=${idMarca}&idpedido=${idPedido}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }
  async getListaPedidosFinanceiro(req, res) {
    let { idPedido, page, pageSize } = req.query;
      idPedido = idPedido ? idPedido : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
  
    try {

      const apiUrl = `${url}/api/financeiro/lista_pedidos.xsjs?idpedido=${idPedido}&pageSize=${pageSize}&page=${page}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no PedidosControllers.getListaPedidosFinanceiro:", error);
      throw error;
    }
  }
}

export default new PedidosControllers();
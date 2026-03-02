import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;


class ContabilidadeControllers {
  async getListaVendasContigencia(req, res) {
    let { idMarca, idEmpresa, idVenda, dataPesquisaInicio, dataPesquisaFim,idGrupo, page, pageSize } = req.query;
    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    idVenda = idVenda ? idVenda : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/lista-venda-contingencia.xsjs?idGrupoEmpresarial=${idGrupo}&idEmpresa=${idEmpresa}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaDetalheVendasContigencia(req, res) {
    let { idVenda, idVendaDetalhe, page, pageSize } = req.query;

    idVenda = idVenda ? idVenda : '';
    idVendaDetalhe = idVendaDetalhe ? idVendaDetalhe : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/venda-detalhe.xsjs?idVenda=${idVenda}`
      const response = await axios.get(apiUrl)


      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaPagamentoVendasContigencia(req, res) {
    let { idVenda, page, pageSize } = req.query;

    idVenda = idVenda ? idVenda : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/contabilidade/venda-pagamento.xsjs?idVenda=${idVenda}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasEstoqueComercial(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, produtoPesquisado, idFornecedor, idGrupoGrade, idGrade, uf } = req.query;

      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
      produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
      idFornecedor = idFornecedor ? idFornecedor : '';
      idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
      idGrade = idGrade ? idGrade : '';
      uf = uf ? uf : '';
    try {

      const apiUrl = `${url}/api/contabilidade/venda-estoque-produto.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&descricaoProduto=${produtoPesquisado}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}&uf=${uf}`
      const response = await axios.get(apiUrl)
   
      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getBuscarProdutos(req, res) {
    let { dataUltAtualizacao, horaUltAtualizacao, idEmpresa, idGrupoEmpresarial, codeBars, descProd } = req.query;

    dataUltAtualizacao = dataFormatada(dataUltAtualizacao) ? dataUltAtualizacao : '';
    horaUltAtualizacao = dataFormatada(horaUltAtualizacao) ? horaUltAtualizacao : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    codeBars = codeBars ? codeBars : '';
    descProd = descProd ? descProd : '';

    try {

      const apiUrl = `${url}/api/contabilidade/buscar-produtos.xsjs?dataUltAtualizacao=${dataUltAtualizacao}&horaUltAtualizacao=${horaUltAtualizacao}&idEmpresa=${idEmpresa}&idGrupoEmpresarial=${idGrupoEmpresarial}&codeBars=${codeBars}&descProd=${descProd}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getListaVendasPeriodo(req, res) {
    let { idMarca, idEmpresa, ufPesquisa, idFornecedor, descProduto, idGrupoGrade, idGrade, dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, produtoPesquisado, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    descProduto = descProduto ? descProduto : '';
    idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
    idGrade = idGrade ? idGrade : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
    ufPesquisa = ufPesquisa ? ufPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/contabilidade/venda-produto.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}&page=${page}&pageSize=${pageSize}`
     
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getListaVendasPeriodo:", error);
      throw error;
    }

  }

  async getListaVendasPeriodoConsolidado(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade, page, pageSize } = req.query;

    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
    idGrade = idGrade ? idGrade : '';
    ufPesquisa = ufPesquisa ? ufPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      
      const apiUrl = `${url}/api/contabilidade/venda-produto-consolidado.xsjs?page=${page}&pageSize=${pageSize}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getListaVendasPeriodoConsolidado:", error);
      throw error;
    }

  }

  ////ALVARA EMPRESAS///

  async getTodasEmpresas(req, res) {
    let { idEmpresa, idSubGrupoEmpresa, page, pageSize, uf, nuCnpj, stAtivo } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
    uf = uf ? uf : '';
    nuCnpj = nuCnpj ? nuCnpj : '';
    stAtivo = stAtivo ? stAtivo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/empresa.xsjs?id=${idEmpresa}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&uf=${uf}&nuCnpj=${nuCnpj}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getAllEmpresas:", error);
      throw error;
    }
  }

  async getAlvaras(req, res) {
    let { id, stAtivo, page, pageSize } = req.query;
    id = id ? id : '';
    stAtivo = stAtivo ? stAtivo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/alvaras.xsjs?&id=${id}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getAlvaras:", error);
      throw error;
    }
  }

  async getAlvaraEmpresas(req, res) {
    let { idFilial, idSubGrupoEmpresa, stAtivo, ufFiliais, nuCnpj, page, pageSize } = req.query;
    idFilial = idFilial ? idFilial : '';
    idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
    stAtivo = stAtivo ? stAtivo : '';
    ufFiliais = ufFiliais ? ufFiliais : '';
    nuCnpj = nuCnpj ? nuCnpj : '';

    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/empresa.xsjs?uf=${ufFiliais}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&id=${idFilial}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getAlvaraEmpresas:", error);
      throw error;
    }
  }


  async getEmpresaAlvara(req, res) {
    let { idFilial, page, pageSize } = req.query;
    idFilial = idFilial ? idFilial : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/alvaras-empresa.xsjs?id=${idFilial}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getEmpresaAlvara:", error);
      throw error;
    }
  }

  async getVinculoAlvaraEmpresa(req, res) {
    let { idFilial, page, pageSize } = req.query;
    idFilial = idFilial ? idFilial : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/vinculo-alvaras-empresa.xsjs?id=${idFilial}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getEmpresaAlvara:", error);
      throw error;
    }
  }

  async getVisualizarAnexoAlvara(req, res) {
    let { idArquivoAlvara } = req.query;

    idArquivoAlvara = idArquivoAlvara ? idArquivoAlvara : '';
    
    try {
      const response = await axios.get(
        `http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs?id=${idArquivoAlvara}`,
        {
          responseType: "arraybuffer"
        }
      );

      res.setHeader("Content-Type", response.headers["content-type"]);
      res.setHeader(
        "Content-Disposition",
        response.headers["content-disposition"] || "inline"
      );

      return res.send(response.data);

    } catch (error) {
      console.error("Erro no getVisualizarAnexoAlvara:", error);
      return res.status(500).json({ error: "Erro ao visualizar arquivo" });
    }
  }


  async getStatusAlvara(req, res) {
    let { page, pageSize } = req.query;
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/status-alvara.xsjs?&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getEmpresaAlvara:", error);
      throw error;
    }
  }

  async putVinculoAlvarasEmpresas(req, res) {
    try {

      const dados = Array.isArray(req.body) ? req.body : [req.body];

      const response = await axios.put(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/vinculo-alvaras-empresa.xsjs`, dados)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

    async postVinculoAlvarasEmpresas(req, res) {
    try {

      const dados = Array.isArray(req.body) ? req.body : [req.body];

      const response = await axios.post(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/vinculo-alvaras-empresa.xsjs`, dados)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putArquivosAnexosAlvara(req, res) {
    let { cancelar } = req.query;
    try {
      cancelar = cancelar ? cancelar : 'false';
      const dados = Array.isArray(req.body) ? req.body : [req.body];

      const response = await axios.put(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs?cancelar=${cancelar}`, dados)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async postArquivosAnexosAlvara(req, res) {
    try {
      if (!req.body) {
        return res.status(400).json({ error: "Body não enviado." });
      }

      const dados = Array.isArray(req.body) ? req.body : [req.body];

      const response = await axios.post(
        "http://164.152.245.77:8000/quality/concentrador_homologacao/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs",
        dados,
        {
          maxBodyLength: Infinity, 
          maxContentLength: Infinity,
        }
      );

      return res.status(200).json(response.data);

    } catch (error) {
      console.error("Erro ao enviar arquivo para SAP:", error.message);

      return res.status(500).json({
        error: "Erro ao processar upload do arquivo.",
        details: error.message
      });
    }
  }
}

export default new ContabilidadeControllers();
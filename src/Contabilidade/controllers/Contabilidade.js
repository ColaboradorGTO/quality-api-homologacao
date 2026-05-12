import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
import { ContabilidadeClient } from "../client/index.js";
import { ContabilidadeServices } from "../service/index.js";
import updateVinculoAlvaraEmpresaSchema from "../schema/updateVinculoAlvaraEmpresa.js";
import createVinculoAlvaraEmpresaSchema from "../schema/createVinculoAlvaraEmpresa.js";
import updateArquivosAlvaraSchema from "../schema/updateArquivoAlvara.js";
import createArquivosAlvaraSchema from "../schema/createArquivoAlvara.js";
const url = process.env.API_URL;
// const url = process.env.API_URL_HML;


const contabilidadeClient = new ContabilidadeClient(url)
const contabilidadeService = new ContabilidadeServices(contabilidadeClient);

class ContabilidadeControllers {
  async getListaVendasContigencia(req, res) {
    let { idMarca, idEmpresa, idVenda, dataPesquisaInicio, dataPesquisaFim, idGrupo, page, pageSize } = req.query;
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

      dataUltAtualizacao = dataUltAtualizacao ? dataUltAtualizacao : '';
      horaUltAtualizacao = horaUltAtualizacao ? horaUltAtualizacao : '';
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
      const response = await axios.get(`${url}/api/empresa.xsjs?id=${idEmpresa}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&uf=${uf}&nuCnpj=${nuCnpj}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

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
      const response = await axios.get(`${url}/api/contabilidade/alvaras.xsjs?&id=${id}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

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
      const response = await axios.get(`${url}/api/contabilidade/empresa.xsjs?uf=${ufFiliais}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&id=${idFilial}&stAtivo=${stAtivo}&page=${page}&pageSize=${pageSize}`)

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
      const response = await axios.get(`${url}/api/contabilidade/alvaras-empresa.xsjs?id=${idFilial}&page=${page}&pageSize=${pageSize}`)

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
      const response = await axios.get(`${url}/api/contabilidade/vinculo-alvaras-empresa.xsjs?id=${idFilial}&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getVinculoAlvaraEmpresa:", error);
      throw error;
    }
  }

  async getVisualizarAnexoAlvara(req, res) {
    let { idArquivoAlvara } = req.query;

    try {
      const response = await axios.get(`${url}/api/contabilidade/arquivos-anexos-alvaras-empresa.xsjs?id=${idArquivoAlvara}`,
        { responseType: "arraybuffer"  }
      );

      res.set({
        "Content-Type": response.headers["content-type"] || "application/pdf",
        "Content-Length": response.data.length,
        "Content-Disposition": "inline"
      });

      return res.end(response.data);

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
      const response = await axios.get(`${url}/api/contabilidade/status-alvara.xsjs?&page=${page}&pageSize=${pageSize}`)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.getEmpresaAlvara:", error);
      throw error;
    }
  }


  async putVinculoAlvarasEmpresas(req, res) {
    try {

      const { error, value } = updateVinculoAlvaraEmpresaSchema.validate(req.body, {
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

      const response = await contabilidadeService.updateVinculoAlvaraEmpresa({

        IDVINCULO: value.IDVINCULO,
        STATIVO: value.STATIVO,
        DTINICIOCOMPETENCIA: value.DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA: value.DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO: value.IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO: value.DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA: value.METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO: value.NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO: value.IDFUNCIONARIO,
        ARQUIVOSALVARA: value.ARQUIVOSALVARA,

      });

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.putVinculoAlvarasEmpresas:", error);
      res.status(500).json({ error: "Erro ao atualizar putVinculoAlvarasEmpresas" });
      throw error;
    }
  }


  async postVinculoAlvarasEmpresas(req, res) {
    try {

      const { error, value } = createVinculoAlvaraEmpresaSchema.validate(req.body, {
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

      const response = await contabilidadeService.createVinculoAlvaraEmpresa({

        IDEMPRESA: value.IDEMPRESA,
        IDALVARA: value.IDALVARA,
        STATIVO: value.STATIVO,
        DTINICIOCOMPETENCIA: value.DTINICIOCOMPETENCIA,
        DTFIMCOMPETENCIA: value.DTFIMCOMPETENCIA,
        IDSTATUSANDAMENTO: value.IDSTATUSANDAMENTO,
        DESCRICAODETALHEANDAMENTO: value.DESCRICAODETALHEANDAMENTO,
        METRAGEMEMPRESA: value.METRAGEMEMPRESA,
        NUMEROPROJETOAPROVADO: value.NUMEROPROJETOAPROVADO,
        IDFUNCIONARIO: value.IDFUNCIONARIO,
        ARQUIVOSALVARA: value.ARQUIVOSALVARA,
      });

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no ContabilidadeControllers.postVinculoAlvarasEmpresas:", error);
      res.status(500).json({ error: "Erro ao atualizar postVinculoAlvarasEmpresas" });
      throw error;
    }
  }


  async putArquivosAnexosAlvara(req, res) {

    try {
      const cancelar = req.query.cancelar;

      const { error, value } = updateArquivosAlvaraSchema.validate(req.body, {
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

      const response = await contabilidadeService.updateArquivosAnexosAlvara({

        IDVINCULOALVARAEMPRESA: value.IDVINCULOALVARAEMPRESA,
        IDARQUIVOSALVARA: value.IDARQUIVOSALVARA,
        IDFUNCIONARIO: value.IDFUNCIONARIO,
        ARQUIVOSALVARA: value.ARQUIVOSALVARA,
        cancelar
      });

      return res.status(200).json(response);

    } catch (error) {
      console.error("Erro no putArquivosAnexosAlvara:", error);
      res.status(500).json({ error: "Erro ao atualizar arquivos do alvará" });
    }
  }


  async postArquivosAnexosAlvara(req, res) {
    try {

      const { error, value } = createArquivosAlvaraSchema.validate(req.body, {
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

      const response = await contabilidadeService.createArquivosAnexosAlvara({

        IDFUNCIONARIO: value.IDFUNCIONARIO,
        IDVINCULOALVARAEMPRESA: value.IDVINCULOALVARAEMPRESA,
        ARQUIVOSALVARA: value.ARQUIVOSALVARA,

      });

      return res.status(200).json(response);

    } catch (error) {
      console.error("Erro no postArquivosAnexosAlvara:", error);
      res.status(500).json({ error: "Erro ao criar  postArquivosAnexosAlvara" });
    }
  }

}

export default new ContabilidadeControllers();
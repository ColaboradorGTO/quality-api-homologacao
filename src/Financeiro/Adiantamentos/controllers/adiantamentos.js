import axios from "axios";
import { put, get as getBlob } from '@vercel/blob';
import { Readable } from 'stream';
import 'dotenv/config';
import schemaAdiantamentoStatus from "../schema/schemaAdiantamentoStatus.js";
import { AdiantamentoService } from '../service/serviceAdiantamento.js';
import { AdiantamentosClient } from '../client/adiantamentoClient.js';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import schemaFecharCaixaZerado from "../schema/schemaFecharCaixaZerado.js";
import schemaAtualizarAdiantamentoDepartamento  from "../schema/atualizarAdiantamentoDepartamento.js";
import schemaCriarAdiantamentoDepartamento from "../schema/criarAdiantamentoDepartamento.js";
import schemaAtualizarPagamentoDepartamento from "../schema/atualizarPagamentoDepartamento.js"
import schemaCriarPagamentoDepartamento from "../schema/criarPagamentoDepartamento.js"

const url = process.env.API_URL;
const adiantamentoClient = new AdiantamentosClient(url);
const adiantamentoService = new AdiantamentoService(adiantamentoClient);

class AdiantamentosControllers {
  async getListaAdiantamentoSalarialFinanceiro(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    try {
      const apiUrl = `${url}/api/financeiro/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixasMovmentoFinanceiro(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLoja, idLojaPesquisa, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    idLoja = idLoja ? idLoja : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-movimento.xsjs?idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLoja=${idLoja}&idLojaPesq=${idLojaPesquisa}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixaStatus(req, res) {
    let { idEmpresa, idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-status.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaCaixaZerados(req, res) {
    let { idEmpresa, idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : ''
    pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/lista-caixas-zerados.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaAdiantamentoDepartamentos(req, res) {
    let { idAdiantamento, idEmpresa, status, departamento, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
    idAdiantamento = idAdiantamento ? idAdiantamento : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    status = status ? status : '';
    departamento = departamento ? departamento : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : ''
    pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/adiantamento-departamento.xsjs?id=${idAdiantamento}&idEmpresa=${idEmpresa}&status=${status}&departamento=${departamento}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)
      
      return res.json(response.data);
    } catch (error) {
      console.error("AdiantamentosControllers.getListaAdiantamentoDepartamentos:", error);
      throw error;
    }
  }

  async getListaPagamentoAdiantamento(req, res) {
    let { idPagamento, idAdiantamento,  status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
      idPagamento = idPagamento ? idPagamento : '';
      idAdiantamento = idAdiantamento ? idAdiantamento : '';   
      status = status ? status : '';
      dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
      dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
      page = page ? page : ''
      pageSize = pageSize ? pageSize : ''
    try {
      const apiUrl = `${url}/api/financeiro/pagamento-adiantamento.xsjs?id=${idPagamento}&idAdiantamento=${idAdiantamento}&status=${status}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("AdiantamentosControllers.getListaAdiantamentoDepartamentos:", error);
      throw error;
    }
  }

  async putFecharCaixaZerado(req, res) {

    try {
      const { error, value } = schemaFecharCaixaZerado.validate(req.body, {
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

      const response = await adiantamentoService.updateFecharCaixaZerado(
        value.ID
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.putFecharCaixaZerado', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Status.' });
    }
  }

  async putAdiantamentoStatus(req, res) {

    try {
      const { error, value } = schemaAdiantamentoStatus.validate(req.body, {
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

      const response = await adiantamentoService.updateAdiantamentoStatus(
        value.IDADIANTAMENTOSALARIO,
        value.STATIVO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.putAdiantamentoStatus', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Status.' });

    }
  }

  async putAdiantamentoDepartamento(req, res) {

    try {
      const { error, value } = schemaAtualizarAdiantamentoDepartamento.validate(req.body, {
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

      const response = await adiantamentoService.updateAdiantamentoDepartamento(
        value.IDADIANTAMENTO,
        value.DEPARTAMENTO,
        value.IDEMPRESA,
        value.NUCNPJEMPRESA,
        value.POSSUINOTAFISCAL,
        value.CNPJFATURAMENTO,
        value.VRSOLICITADO,
        value.DESCRICAO,
        value.ANEXOORCAMENTO,
        value.ANEXONOTAFISCAL,
        value.RAZAOSOCIALFATURAMENTO,
        value.STATUS,
        value.DSJUSTIFICATIVA,
        value.IDUSUARIOALTERACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.putAdiantamentoDepartamento', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Departamento.' });

    }
  }

   async putPagamentoDepartamento(req, res) {

    try {
      const { error, value } = schemaAtualizarPagamentoDepartamento.validate(req.body, {
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

      const response = await adiantamentoService.updatePagamentoDepartamento(
        value.IDPAGAMENTO,
        value.IDADIANTAMENTO,
        value.VLPAGAMENTO,
        value.DATAPAGAMENTO,
        value.FORMAPAGAMENTO,
        value.ANEXOCOMPROVANTE,
        value.DSOBSERVACAO,
        value.STATUS,
        value.IDUSUARIOCRIACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.postAdiantamentoDepartamento', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Departamento.' });

    }
  }

  async postAdiantamentoDepartamento(req, res) {

    try {
      const { error, value } = schemaCriarAdiantamentoDepartamento.validate(req.body, {
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

      const response = await adiantamentoService.createAdiantamentoDepartamento(
        value.DEPARTAMENTO,
        value.IDEMPRESA,
        value.NUCNPJEMPRESA,
        value.POSSUINOTAFISCAL,
        value.CNPJFATURAMENTO,
        value.VRSOLICITADO,
        value.DESCRICAO,
        value.ANEXOORCAMENTO,
        value.ANEXONOTAFISCAL,
        value.RAZAOSOCIALFATURAMENTO,
        value.DSJUSTIFICATIVA,
        value.IDUSUARIOCRIACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.postAdiantamentoDepartamento', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Departamento.' });

    }
  }

  async postPagamentoDepartamento(req, res) {

    try {
      const { error, value } = schemaCriarPagamentoDepartamento.validate(req.body, {
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

      const response = await adiantamentoService.createPagamentoDepartamento(
        value.IDADIANTAMENTO,
        value.VLPAGAMENTO,
        value.DATAPAGAMENTO,
        value.FORMAPAGAMENTO,
        value.ANEXOCOMPROVANTE,
        value.DSOBSERVACAO,
        value.STATUS,
        value.IDUSUARIOCRIACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.postAdiantamentoDepartamento', error);
      return res.status(500).json({ message: 'Erro ao criar Adiantamento Departamento.' });

    }
  }

  async postUploadAnexoAdiantamento(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'Nenhum arquivo enviado.' });
      }

      const nomeSanitizado = req.file.originalname.replace(/[^a-zA-Z0-9.\-_]/g, '_');
      const nomeArquivo = `adiantamentos/${Date.now()}-${nomeSanitizado}`;

      const blob = await put(nomeArquivo, req.file.buffer, {
        access: 'private',
        contentType: req.file.mimetype,
      });

      return res.status(200).json({ data: { path: blob.pathname } });
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.postUploadAnexoAdiantamento', error);
      return res.status(500).json({ message: 'Erro ao enviar o anexo.' });
    }
  }

  async getDownloadAnexoAdiantamento(req, res) {
    try {
      const { path } = req.query;

      if (!path) {
        return res.status(400).json({ message: 'Parâmetro path é obrigatório.' });
      }

      const resultado = await getBlob(path, { access: 'private' });

      if (!resultado) {
        return res.status(404).json({ message: 'Arquivo não encontrado.' });
      }

      const nomeArquivo = path.substring(path.lastIndexOf('/') + 1).replace(/^\d+-/, '');

      res.setHeader('Content-Type', resultado.blob.contentType || 'application/octet-stream');
      res.setHeader('Content-Disposition', `attachment; filename="${nomeArquivo}"`);

      Readable.fromWeb(resultado.stream).pipe(res);
    } catch (error) {
      console.log('Erro no AdiantamentosControllers.getDownloadAnexoAdiantamento', error);
      return res.status(500).json({ message: 'Erro ao baixar o anexo.' });
    }
  }
}

export default new AdiantamentosControllers();
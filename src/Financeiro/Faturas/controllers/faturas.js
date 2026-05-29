import axios from "axios";
import 'dotenv/config';
import schemaAtualizarListaRecompra from "../schema/atualizarLIstaRecompraSchema.js";
import { FaturaClient } from "../client/faturaClient.js";
import { FaturaService } from "../service/faturasService.js";
import schemaAtualizarListaFatura from "../schema/atualizarLIstaFaturaSchema.js";
import schemaAtualizarStatusFatura from "../schema/atualizarStatusFaturaSchema.js";
import schemaAtualizarFaturaFinanceiro from "../schema/atualizarFaturaFinanceiroSchema.js";
import schemaConsolidacaoFatura from "../schema/atualizarConsolidacaoFaturaSchema.js";
import schemaCriarConsolidacaoFatura from "../schema/criarConsolidacaoFatura.js";
import schemaCriarConsolidacaoFaturaSAP from "../schema/criarConsolidacaoFaturaSAP.js";

const url = process.env.API_URL;
const faturaClient = new FaturaClient(url);
const faturaService = new FaturaService(faturaClient);


class FaturasControllers {
  async getListaFaturasPixPeriodo(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, idLojaPesquisa, empresaLista, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    idLojaPesquisa = idLojaPesquisa ? idLojaPesquisa : '';
    empresaLista = empresaLista ? empresaLista : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/financeiro/fatura-pix-periodo.xsjs?idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idLojaPesquisa=${idLojaPesquisa}&empresaLista=${empresaLista}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaFaturasPixConsolidado2(req, res) {
    let { idMarca, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/fatura-pix-consolidado.xsjs?idMarca=${idMarca}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getDetalheFaturaFinanceiro(req, res) {
    let { idEmpresa, idDetalheFatura, dataPesquisaInicio, dataPesquisaFim, codigoFatura, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idDetalheFatura = idDetalheFatura ? idDetalheFatura : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    codigoFatura = codigoFatura ? codigoFatura : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/detalhe-fatura.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&nuCodigoAutorizacao=${codigoFatura}&idDetalheFatura=${idDetalheFatura}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FaturasController.getDetalheFaturaFinanceiro:", error);
      throw error;
    }
  }

  async getListaVendaFaturaPixPeriodo(req, res) {
    let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, dataCompInicio, dataCompFim, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    dataCompInicio = dataCompInicio ? dataCompInicio : '';
    dataCompFim = dataCompFim ? dataCompFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/venda-total-fatura-pix-empresa.xsjs?idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataCompInicio=${dataCompInicio}&dataCompFim=${dataCompFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendaFaturaPixPeriodoCompensacao(req, res) {
    let { idMarca, idEmpresa, dataCompInicio, dataCompFim, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    idEmpresa = idEmpresa ? idEmpresa : '';
    dataCompInicio = dataCompInicio ? dataCompInicio : '';
    dataCompFim = dataCompFim ? dataCompFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/venda-total-fatura-pix-empresa-compensada.xsjs?idMarca=${idMarca}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataCompInicio}&dataPesquisaFim=${dataCompFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
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

  async getPreviaFaturasConsolidadas(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/financeiro/previa-consolidacao-faturas.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FaturasController.getPreviaFaturasConsolidadas:", error);
      throw error;
    }

  }

  async getConsolidacaoFaturas(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const apiUrl = `${url}/api/financeiro/consolidacao-faturas.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl);

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no FaturasController.getConsolidacaoFaturas:", error);
      throw error;
    }

  }
 
   async postConsolidacaoFaturaSAP(req, res) {

    try {
      const { error, value } = schemaCriarConsolidacaoFaturaSAP.validate(req.body, {
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

      const response = await faturaService.createConsolidacaoFaturaSAP(

        value.IDS_CONSOLIDACOES,
        value.IDFUNCIONARIO
      );
      
      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.postConsolidacaoFatura', error);
      return res.status(500).json({ message: 'Erro no FaturasControllers.postConsolidacaoFaturaSAP' });

    }
  }

  async postConsolidacaoFatura(req, res) {

    try {
      const { error, value } = schemaCriarConsolidacaoFatura.validate(req.body, {
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

      const response = await faturaService.createConsolidacaoFatura(

        value.IDEMPRESA,
        value.DTPROCESSAMENTO,
        value.QTDTOTALFATURAS,
        value.VRTOTALRECEBIDO,  
        value.IDFUNCIONARIO
      );

      if (!value.IDEMPRESA) {
        return res.status(400).json({ message: 'IDEMPRESA é obrigatório.' });
      }

      if (!value.IDFUNCIONARIO) {
        return res.status(400).json({ message: 'IDFUNCIONARIO é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.postConsolidacaoFatura', error);
      return res.status(500).json({ message: 'Erro no FaturasControllers.putConsolidacaoFatura' });

    }
  }

  async putConsolidacaoFatura(req, res) {

    try {
      const { error, value } = schemaConsolidacaoFatura.validate(req.body, {
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

      const response = await faturaService.updateConsolidacaoFatura(

        value.IDFUNCIONARIO,
        value.STCANCELADO,
        value.TXTMOTIVOCANCELAMENTO,
        value.IDCONSOLIDACAOFATURA
      );

      if (!value.IDCONSOLIDACAOFATURA) {
        return res.status(400).json({ message: 'IDCONSOLIDACAOFATURA é obrigatório.' });
      }

      if (!value.IDFUNCIONARIO) {
        return res.status(400).json({ message: 'IDFUNCIONARIO é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.putConsolidacaoFatura', error);
      return res.status(500).json({ message: 'Erro no FaturasControllers.putConsolidacaoFatura' });

    }
  }

  async putListaFaturaVendaPixStatusConferido(req, res) {

    try {
      const { error, value } = schemaAtualizarStatusFatura.validate(req.body, {
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

      const response = await faturaService.updateStatusFatura(

        value.STCONFERIDO,
        value.DATA_COMPENSACAO,
        value.IDDETALHEFATURA
      );

      if (!value.IDDETALHEFATURA) {
        return res.status(400).json({ message: 'STCONFERIDO é obrigatório.' });
      }

      if (!value.DATA_COMPENSACAO) {
        return res.status(400).json({ message: 'DATA_COMPENSACAO é obrigatório.' });
      }

      if (!value.IDDETALHEFATURA) {
        return res.status(400).json({ message: 'IDDETALHEFATURA é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.putListaFaturaVendaPixStatusConferido', error);
      return res.status(500).json({ message: 'Erro no putListaFaturaVendaPixStatusConferido.' });

    }
  }

  async putListaAtualizarRecompra(req, res) {

    try {
      const { error, value } = schemaAtualizarListaRecompra.validate(req.body, {
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

      const response = await faturaService.updateListaRecompra(

        value.IDDETALHEFATURA,
        value.STRECOMPRA
      );

      if (!value.IDDETALHEFATURA) {
        return res.status(400).json({ message: 'IDDETALHEFATURA é obrigatório.' });
      }

      if (!value.STRECOMPRA) {
        return res.status(400).json({ message: 'STRECOMPRA é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.putListaAtualizarRecompra', error);
      return res.status(500).json({ message: 'Erro ao atualizar Lista Atualizar Fatura.' });

    }
  }

  async putListaAtualizarFatura(req, res) {

    try {
      const { error, value } = schemaAtualizarListaFatura.validate(req.body, {
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

      const response = await faturaService.updateListaFatura(

        value.IDDETALHEFATURA,
        value.NUCODAUTORIZACAO,
        value.VRRECEBIDO,
      );

      if (!value.IDDETALHEFATURA) {
        return res.status(400).json({ message: 'IDDETALHEFATURA é obrigatório.' });
      }

      if (!value.NUCODAUTORIZACAO) {
        return res.status(400).json({ message: 'NUCODAUTORIZACAO é obrigatório.' });
      }

      if (!value.VRRECEBIDO) {
        return res.status(400).json({ message: 'VRRECEBIDO é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.putListaAtualizarFatura', error);
      return res.status(500).json({ message: 'Erro ao atualizar Lista Atualizar Fatura.' });

    }
  }

  async putFaturaFinanceiro(req, res) {

    try {
      const { error, value } = schemaAtualizarFaturaFinanceiro.validate(req.body, {
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

      const response = await faturaService.updateFaturaFinanceiro(

        value.NUCODAUTORIZACAO,
        value.VRRECEBIDO,
        value.STCANCELADO,
        value.STPIX,
        value.NUAUTORIZACAO,
        value.IDDETALHEFATURA
      );

      if (!value.IDDETALHEFATURA) {
        return res.status(400).json({ message: 'IDDETALHEFATURA é obrigatório.' });
      }

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no FaturasControllers.putFaturaFinanceiro', error);
      return res.status(500).json({ message: 'Erro ao atualizar Lista Atualizar Fatura.' });

    }
  }
}

export default new FaturasControllers();
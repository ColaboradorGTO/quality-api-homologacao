import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import { OTClient } from "../OT/Client/index.js";
import { OTService } from "../OT/Services/index.js";
import criarOTSchema from '../OT/Schema/criarOTSchema.js';
import atualizarOTSchema from '../OT/Schema/atualizarOTSchema.js';
import atualizarOrdemTransferenciaSchema from '../OT/Schema/atualizarOrdemTransferenciaSchema.js';
import atualizarStatusDivergenciaSchema from '../OT/Schema/atualizarStatusDivergenciaSchema.js';
import criarStatusDivergenciaSchema from '../OT/Schema/criarStatusDivergenciaSchema.js';
import 'dotenv/config';
import consultaNFESchema from "../OT/Schema/consultaNFESchema.js";
const url = process.env.API_URL;
const otClient = new OTClient(url);
const otService = new OTService(otClient);

class ExpedicaoControllers {

    async getListaProdutosExpedicao(req, res,) {
        let { idEmpresa, codBarras, dsProduto, idProduto, page, pageSize, } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        codBarras = codBarras ? codBarras : '';
        dsProduto = dsProduto ? dsProduto : '';
        idProduto = idProduto ? idProduto : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/expedicao/produto.xsjs?idEmpresa=${idEmpresa}&id=${idProduto}&descProduto=${dsProduto}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaOrdemTransferencia(req, res,) {
        let { idEmpresaDestino, idEmpresaOrigem, idTipoFiltro, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idEmpresaDestino = Number(idEmpresaDestino) ? Number(idEmpresaDestino) : Number(idEmpresaDestino);
        idEmpresaOrigem = Number(idEmpresaOrigem) ? Number(idEmpresaOrigem) : Number(idEmpresaOrigem);
        idTipoFiltro = Number(idTipoFiltro) ? Number(idTipoFiltro) : Number(idTipoFiltro)
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {

            const apiUrl = `${url}/api/expedicao/resumo-ordem-transferencia.xsjs?idtipofiltro=${Number(idTipoFiltro)}&idEmpresaOrigem=${Number(idEmpresaOrigem)}&idEmpresaDestino=${Number(idEmpresaDestino)}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ExpedicaoControllers getListaOrdemTransferencia:", error);
            return res.status(500).json({ error: 'Erro ao buscar lista de ordens de transferência.' });

        }

    }

    async getListaOrdemTransferenciaExpedicao(req, res,) {
        let { idEmpresaLogin, idLojaDestino, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
        idLojaDestino = idLojaDestino ? idLojaDestino : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

        try {


            const response = await axios.get(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs?idtipofiltro=1&idEmpresaOrigem=${idEmpresaLogin}&idEmpresaDestino=${idLojaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaDetalheOT(req, res,) {
        let { idResumoOT, idTipoFiltro, pageSize, page } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';
        try {

            const response = await axios.get(`${url}/api/expedicao/detalhe-ordem-transferencia.xsjs?id=${idResumoOT}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaOT(req, res,) {
        let { idEmpresaLogin, idLojaDestino, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
        idLojaDestino = idLojaDestino ? idLojaDestino : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
        dataPesquisaFim = dataFormatada(dataPesquisaFim)

        try {

            const apiUrl = `${url}/api/expedicao/resumo-ordem-transferencia.xsjs?idtipofiltro=2&idEmpresaOrigem=${idEmpresaLogin}&idEmpresaDestino=${idLojaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaSD(req, res,) {
        let { } = req.query;

        try {
            const response = await axios.get(`${url}/api/expedicao/status-divergencia.xsjs?page=1`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFaturasOT(req, res,) {
        let { idLojaDestino, idLojaOrigem, dataPesquisaInicio, dataPesquisaFim, dataInicioFatura, dataFimFatura, idStatusOt } = req.query;

        idLojaDestino = idLojaDestino ? idLojaDestino : '';
        idLojaOrigem = idLojaOrigem ? idLojaOrigem : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        dataInicioFatura = dataInicioFatura ? dataInicioFatura : '';
        dataFimFatura = dataFimFatura ? dataFimFatura : '';
        idStatusOt = idStatusOt ? idStatusOt : '';
        try {
            //const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/expedicao/resumo-ordem-transferencia.xsjs?page=1&idtipofiltro=1&idEmpresaOrigem=${idLojaOrigem}&idEmpresaDestino=${idLojaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}&idstatusot=${idStatusOt}&dtinifat=${dataInicioFatura}&dtfimfat=${dataFimFatura}`)
            const response = await axios.get(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs?page=1&idtipofiltro=1&idEmpresaOrigem=${idLojaOrigem}&idEmpresaDestino=${idLojaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}&idstatusot=${idStatusOt}&dtinifat=${dataInicioFatura}&dtfimfat=${dataFimFatura}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaOTDepLoja(req, res,) {
        let { idEmpresaDestino, idEmpresaOrigem, idTipoFiltro, dataPesquisaInicio, dataPesquisaFim, idRotina, pageSize, page } = req.query;

        idEmpresaDestino = idEmpresaDestino ? idEmpresaDestino : '';
        idEmpresaOrigem = idEmpresaOrigem ? idEmpresaOrigem : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        // dataInicioEntrega = dataInicioEntrega ? dataInicioEntrega : '';
        // dataFimEntrega = dataFimEntrega ? dataFimEntrega : '';
        idRotina = idRotina ? idRotina : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';
        try {
            const response = await axios.get(`${url}/api/expedicao/resumo-ordem-transferencia.xsjs?page=1&idtipofiltro=2&idEmpresaOrigem=${idEmpresaOrigem}&idEmpresaDestino=${idEmpresaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}&idrotina=${idRotina}&dtinient=${dataPesquisaInicio}&dtfiment=${dataPesquisaFim}`)


            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaStatusOT(req, res,) {
        let { } = req.query;

        try {
            const response = await axios.get(`${url}/api/expedicao/status-ordem-transferencia.xsjs`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaRotinaMovimentacao(req, res,) {
        let { idRotina, page, pageSize } = req.query;

        idRotina = idRotina ? idRotina : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/expedicao/rotina-movimentacao.xsjs`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaImpressaoEtiquetaOT(req, res,) {
        let { idResumoOT, stAtivo, pageSize, page } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        stAtivo = stAtivo ? stAtivo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/expedicao/impressao-etiqueta-ot.xsjs?id=${idResumoOT}&stAtivo=${stAtivo}&pageSize=${pageSize}&page=${page}`)
            //const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador/api/expedicao/impressao-etiqueta-ot.xsjs?id=${idResumoOT}&stAtivo=${stAtivo}&pageSize=${pageSize}&page=${page}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }


    async getListaImpressaoEntrega(req, res,) {
        let { idResumoOT, pageSize, page } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/expedicao/impressao-entrega.xsjs?id=${idResumoOT}&pageSize=${pageSize}&page=${page}`)
            //const response = await axios.get(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/expedicao/impressao-entrega.xsjs?id=${idResumoOT}&pageSize=${pageSize}&page=${page}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database getListaImpressaoEntrega:", error);
            throw error;
        }
    }


    async getListaNFESaidaTransferencia(req, res,) {
        let { idSapOrigem, page, pageSize } = req.query;

        idSapOrigem = idSapOrigem ? idSapOrigem : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/service-layer/notas-transferencia/consulta-nfe-saida-tranferencia.xsjs?id=${idSapOrigem}&pageSize=${pageSize}&page=${page}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }


    // UPDATE
    async updateOrdemTransferencia(req, res) {
        const body = { ...req.body };

        if (isNaN(body.QTDAJUSTE)) {
            body.QTDAJUSTE = 0;
        }

        if (body.QTDAJUSTE < 0) {
            body.STSOBRA = "True"
        }

        if (body.QTDAJUSTE > 0) {
            body.STFALTA = "True"
        }

        try {
            const { error, value } = atualizarOrdemTransferenciaSchema.validate(body, {
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

            await otService.updateOrdemTransferencia({
                IDPRODUTO: value.IDPRODUTO,
                QTDEXPEDICAO: value.QTDEXPEDICAO,
                QTDRECEPCAO: value.QTDRECEPCAO,
                QTDDIFERENCA: value.QTDDIFERENCA,
                QTDAJUSTE: value.QTDAJUSTE,
                VLRUNITVENDA: value.VLRUNITVENDA,
                VLRUNITCUSTO: value.VLRUNITCUSTO,
                STFALTA: value.STFALTA,
                STSOBRA: value.STSOBRA,
                IDSTATUSOT: value.IDSTATUSOT,
                IDRESUMOOT: value.IDRESUMOOT
            });

            return res.status(200).json({ message: 'Ordem de transferência atualizada com sucesso!' });
        } catch (error) {
            console.log('Erro ao atualizar ordem de transferência:', error);
            throw error;
        }
    }

    async updateAlterarSD(req, res,) {
        try {
            const { error, value } = atualizarStatusDivergenciaSchema.validate(req.body, {
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

            await otService.updateStatusDivergencia({
                IDSTATUSDIVERGENCIA: value.IDSTATUSDIVERGENCIA,
                DESCRICAODIVERGENCIA: value.DESCRICAODIVERGENCIA,
                STATIVO: value.STATIVO
            });

            return res.status(200).json({ message: 'Atualizado com sucesso' });
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async storeInserirSD(req, res,) {
        try {
            const { error, value } = criarStatusDivergenciaSchema.validate(req.body, {
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

            await otService.createStatusDivergencia({
                DESCRICAODIVERGENCIA: value.DESCRICAODIVERGENCIA,
                IDUSRCRIACAO: value.IDUSRCRIACAO,
                STATIVO: value.STATIVO
            });

            return res.status(200).json({ message: 'Cadastrado com sucesso' });
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    /*    async putResumoOrdemTransferencia(req, res) {
           
           try {
               const {error, value} = atualizarOTSchema.validate(req.body, {
                   abortEarly: false,
                   stripUnknown: true
               });
       
               if(error) {
                   return res.status(400).json({
                       message: 'Dados inválidos',
                       errors: error.details.map(detail => ({
                           field: detail.path.join('.'),
                           message: detail.message
                       }))
                   });
               }
   
               if(!value.IDRESUMOOT) {
                   return res.status(400).json({message: 'IDRESUMOOT é obrigatório.'});
               }
        
   
               const response = await otService.updateOT(
                       value.IDRESUMOOT,
                       value.IDEMPRESAORIGEM,
                       value.IDEMPRESADESTINO,
                       value.IDOPERADOREXPEDICAO,
                       value.NUTOTALITENS,
                       value.QTDTOTALITENS,
                       value.QTDTOTALITENSRECEPCIONADO,
                       value.QTDTOTALITENSDIVERGENCIA,
                       value.NUTOTALVOLUMES,
                       value.TPVOLUME,
                       value.VRTOTALCUSTO,
                       value.VRTOTALVENDA,
                       value.DTRECEPCAO,
                       value.IDOPERADORRECEPTOR,
                       value.DSOBSERVACAO,
                       value.IDUSRCANCELAMENTO,
                       value.IDSTDIVERGENCIA,
                       value.OBSDIVERGENCIA,
                       value.STEMISSAONFE,
                       value.NUMERONFE,
                       value.STENTRADAINVENTARIO,
                       value.QTDCONFERENCIA,
                       value.IDSTATUSOT,
                       value.IDUSRAJUSTE,
                       value.DTAJUSTE,
                       value.QTDTOTALITENSAJUSTE,
                       value.dadosdetalheot,
       
               );
              
               return res.status(200).json(response);
           } catch(error) {
               console.log('Erro ao atualizar ordem de transferência:', error);
               return res.status(500).json({message: 'Erro ao atualizar ordem de transferência.'});
               
           }
       } */

    /*     async putResumoOrdemTransferencia(req, res) {
            try {
                const { error, value } = atualizarOTSchema.validate(req.body, {
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
                const dadosdetalheot = value.dadosdetalheot;
                const response = await otService.updateOT({
    
                    IDRESUMOOT: value.IDRESUMOOT,
                    IDPRODUTO: value.IDPRODUTO,
                    IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                    IDEMPRESADESTINO: value.IDEMPRESADESTINO,
                    IDOPERADOREXPEDICAO: value.IDOPERADOREXPEDICAO,
                    NUTOTALITENS: value.NUTOTALITENS,
                    QTDTOTALITENS: value.QTDTOTALITENS,
                    QTDTOTALITENSRECEPCIONADO: value.QTDTOTALITENSRECEPCIONADO,
                    QTDTOTALITENSDIVERGENCIA: value.QTDTOTALITENSDIVERGENCIA,
                    NUTOTALVOLUMES: value.NUTOTALVOLUMES,
                    TPVOLUME: value.TPVOLUME,
                    VRTOTALCUSTO: value.VRTOTALCUSTO,
                    VRTOTALVENDA: value.VRTOTALVENDA,
                    DTRECEPCAO: value.DTRECEPCAO,
                    IDOPERADORRECEPTOR: value.IDOPERADORRECEPTOR,
                    DSOBSERVACAO: value.DSOBSERVACAO,
                    IDUSRCANCELAMENTO: value.IDUSRCANCELAMENTO,
                    IDSTDIVERGENCIA: value.IDSTDIVERGENCIA,
                    OBSDIVERGENCIA: value.OBSDIVERGENCIA,
                    STEMISSAONFE: value.STEMISSAONFE,
                    NUMERONFE: value.NUMERONFE,
                    STENTRADAINVENTARIO: value.STENTRADAINVENTARIO,
                    QTDCONFERENCIA: value.QTDCONFERENCIA,
                    IDSTATUSOT: value.IDSTATUSOT,
                    IDUSRAJUSTE: value.IDUSRAJUSTE,
                    DTAJUSTE: value.DTAJUSTE,
                    QTDTOTALITENSAJUSTE: value.QTDTOTALITENSAJUSTE,
                    dadosdetalheot,
                });
    
                return res.status(200).json(response);
            } catch (error) {
    
                console.error("Erro no ConferenciaCegaController.putResumoOrdemTransferencia:", error);
                res.status(500).json({ error: "Erro ao atualizar ot" });
                throw error;
            }
        } */

    async putResumoOrdemTransferencia(req, res) {
        try {
            const body = Array.isArray(req.body) ? req.body : [req.body];
            const { error, value } = atualizarOTSchema.validate(body, {
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

            const response = await Promise.all(
                value.map(item => otService.updateOT(item))
            );
            /*             const response = await otService.updateOT({
            
                            IDRESUMOOT: value.IDRESUMOOT,
                            IDPRODUTO: value.IDPRODUTO,
                            IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                            IDEMPRESADESTINO: value.IDEMPRESADESTINO,
                            IDOPERADOREXPEDICAO: value.IDOPERADOREXPEDICAO,
                            NUTOTALITENS: value.NUTOTALITENS,
                            QTDTOTALITENS: value.QTDTOTALITENS,
                            QTDTOTALITENSRECEPCIONADO: value.QTDTOTALITENSRECEPCIONADO,
                            QTDTOTALITENSDIVERGENCIA: value.QTDTOTALITENSDIVERGENCIA,
                            NUTOTALVOLUMES: value.NUTOTALVOLUMES,
                            TPVOLUME: value.TPVOLUME,
                            VRTOTALCUSTO: value.VRTOTALCUSTO,
                            VRTOTALVENDA: value.VRTOTALVENDA,
                            DTRECEPCAO: value.DTRECEPCAO,
                            IDOPERADORRECEPTOR: value.IDOPERADORRECEPTOR,
                            DSOBSERVACAO: value.DSOBSERVACAO,
                            IDUSRCANCELAMENTO: value.IDUSRCANCELAMENTO,
                            IDSTDIVERGENCIA: value.IDSTDIVERGENCIA,
                            OBSDIVERGENCIA: value.OBSDIVERGENCIA,
                            STEMISSAONFE: value.STEMISSAONFE,
                            NUMERONFE: value.NUMERONFE,
                            STENTRADAINVENTARIO: value.STENTRADAINVENTARIO,
                            QTDCONFERENCIA: value.QTDCONFERENCIA,
                            IDSTATUSOT: value.IDSTATUSOT,
                            IDUSRAJUSTE: value.IDUSRAJUSTE,
                            DTAJUSTE: value.DTAJUSTE,
                            QTDTOTALITENSAJUSTE: value.QTDTOTALITENSAJUSTE,
                            dadosdetalheot,
                        }); */

            return res.status(200).json(response);
        } catch (error) {

            console.error("Erro no ConferenciaCegaController.putResumoOrdemTransferencia:", error);
            res.status(500).json({ error: "Erro ao atualizar ot" });
            throw error;
        }
    }


    async postResumoOrdemTransferencia(req, res) {

        try {
            const { error, value } = criarOTSchema.validate(req.body, {
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

            const response = await otService.createOT({
                IDRESUMOOT: value.IDRESUMOOT,
                IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                IDEMPRESADESTINO: value.IDEMPRESADESTINO,
                IDOPERADOREXPEDICAO: value.IDOPERADOREXPEDICAO,
                NUTOTALITENS: value.NUTOTALITENS,
                QTDTOTALITENS: value.QTDTOTALITENS,
                QTDTOTALITENSRECEPCIONADO: value.QTDTOTALITENSRECEPCIONADO,
                QTDTOTALITENSDIVERGENCIA: value.QTDTOTALITENSDIVERGENCIA,
                NUTOTALVOLUMES: value.NUTOTALVOLUMES,
                TPVOLUME: value.TPVOLUME,
                VRTOTALCUSTO: value.VRTOTALCUSTO,
                VRTOTALVENDA: value.VRTOTALVENDA,
                DTRECEPCAO: value.DTRECEPCAO,
                IDOPERADORRECEPTOR: value.IDOPERADORRECEPTOR,
                DSOBSERVACAO: value.DSOBSERVACAO,
                IDUSRCANCELAMENTO: value.IDUSRCANCELAMENTO,
                IDSTDIVERGENCIA: value.IDSTDIVERGENCIA,
                OBSDIVERGENCIA: value.OBSDIVERGENCIA,
                STEMISSAONFE: value.STEMISSAONFE,
                NUMERONFE: value.NUMERONFE,
                STENTRADAINVENTARIO: value.STENTRADAINVENTARIO,
                QTDCONFERENCIA: value.QTDCONFERENCIA,
                IDSTATUSOT: value.IDSTATUSOT,
                IDUSRAJUSTE: value.IDUSRAJUSTE,
                DTAJUSTE: value.DTAJUSTE,
                QTDTOTALITENSAJUSTE: value.QTDTOTALITENSAJUSTE,
                CONFEREITENS: value.CONFEREITENS,
                IDROTINA: value.IDROTINA,
                DATAENTREGA: value.DATAENTREGA,
                dadosdetalheot: value.dadosdetalheot
            });

            console.log('response', response);
            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro ao criar ordem de transferência:', error);
            return res.status(500).json({ message: 'Erro ao criar ordem de transferência.' });

        }
    }

    /*     async putProcessar(req, res) {
            try {
                const { error, value } = atualizarOTSchema.validate(req.body, {
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
                const dadosdetalheot = value.dadosdetalheot;
                const response = await otService.updateOT({
    
                    IDRESUMOOT: value.IDRESUMOOT,
                    IDPRODUTO: value.IDPRODUTO,
                    IDEMPRESAORIGEM: value.IDEMPRESAORIGEM,
                    IDEMPRESADESTINO: value.IDEMPRESADESTINO,
                    IDOPERADOREXPEDICAO: value.IDOPERADOREXPEDICAO,
                    NUTOTALITENS: value.NUTOTALITENS,
                    QTDTOTALITENS: value.QTDTOTALITENS,
                    QTDTOTALITENSRECEPCIONADO: value.QTDTOTALITENSRECEPCIONADO,
                    QTDTOTALITENSDIVERGENCIA: value.QTDTOTALITENSDIVERGENCIA,
                    NUTOTALVOLUMES: value.NUTOTALVOLUMES,
                    TPVOLUME: value.TPVOLUME,
                    VRTOTALCUSTO: value.VRTOTALCUSTO,
                    VRTOTALVENDA: value.VRTOTALVENDA,
                    DTRECEPCAO: value.DTRECEPCAO,
                    IDOPERADORRECEPTOR: value.IDOPERADORRECEPTOR,
                    DSOBSERVACAO: value.DSOBSERVACAO,
                    IDUSRCANCELAMENTO: value.IDUSRCANCELAMENTO,
                    IDSTDIVERGENCIA: value.IDSTDIVERGENCIA,
                    OBSDIVERGENCIA: value.OBSDIVERGENCIA,
                    STEMISSAONFE: value.STEMISSAONFE,
                    NUMERONFE: value.NUMERONFE,
                    STENTRADAINVENTARIO: value.STENTRADAINVENTARIO,
                    QTDCONFERENCIA: value.QTDCONFERENCIA,
                    IDSTATUSOT: value.IDSTATUSOT,
                    IDUSRAJUSTE: value.IDUSRAJUSTE,
                    DTAJUSTE: value.DTAJUSTE,
                    QTDTOTALITENSAJUSTE: value.QTDTOTALITENSAJUSTE,
                    dadosdetalheot,
                });
    
                return res.status(200).json(response);
            } catch (error) {
    
                console.error("Erro no ConferenciaCegaController.putResumoOrdemTransferencia:", error);
                res.status(500).json({ error: "Erro ao atualizar ot" });
                throw error;
            }
        }
     */

    /*     async postConsultaNFESaidaTrasferenciaVarias(req, res) {

        try {
            const { error, value } = consultaNFESchema.validate(req.body, {
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

            const response = await otService.consultaNFESaidaService(
                value.IDSAPORIGEM
            );

            if (!value.IDSAPORIGEM) {
                return res.status(400).json({ message: 'IDSAPORIGEM é obrigatório.' });
            }

            console.log('response', response);
            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro ao criar Consulta de NFE Saida:', error);
            return res.status(500).json({ message: 'Erro ao Consulta de NFE Saida' });

        }
    } */

    async postConsultaNFESaidaTrasferenciaVarias(req, res) {
        try {
            const { error, value } = consultaNFESchema.validate(req.body, {
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

            const responses = await Promise.all(
                value.map(item => otService.consultaNFESaidaService(item))
            );

            return res.status(200).json(responses);

        } catch (error) {
            console.log('Erro ao criar Consulta de NFE Saida:', error);
            return res.status(500).json({ message: 'Erro ao Consulta de NFE Saida' });
        }
    }

}

export default new ExpedicaoControllers();

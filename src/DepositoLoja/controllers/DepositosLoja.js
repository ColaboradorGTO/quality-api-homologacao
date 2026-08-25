import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;
import createDepositoSchema from '../schema/createDeposito.js';
import updateDepositoSchema from '../schema/updateDeposito.js';
import updateStatusConferidoSchema from '../schema/updateStatusConferido.js';
import updateStatusDepositoSchema from '../schema/updateStatusDeposito.js';

import { DepositoClient } from "../client/index.js";
import { DepositoService } from "../services/index.js";
const depositoClient = new DepositoClient(process.env.API_URL);
const depositoService = new DepositoService(depositoClient);


class DepositosLojaControllers  {

    async getListaDepositosLojaEmpresa(req,res) {
        let {idEmpresa, dataPesquisaInicio, dataPesquisaFim    } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {
            
            const apiUrl = `${url}/api/deposito-loja/empresa.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    
    async getListaProdutosLojaSap(req, res) {
        let { descricaoProduto, idEmpresa, idListaEmpresa, pageNumber } = req.query;
    
    
        descricaoProduto = descricaoProduto ? descricaoProduto : ''; 
        idEmpresa = idEmpresa ? idEmpresa : ''; 
        idListaEmpresa = idListaEmpresa ? idListaEmpresa : '';         
        pageNumber = pageNumber ? pageNumber : 1; 
    
        try {   
           
            const apiUrl = `${url}/api/produto-sap/produto-sap.xsjs?codeBarsOuNome=${descricaoProduto}&IdEmpresaLoja=${idEmpresa}&IDEmpresaLogin=${idEmpresa}&IdListaLoja=${idListaEmpresa}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
    
    async putListaDepositosLoja(req, res) {
        try {
             let {error, value} = updateDepositoSchema.validate(req.body, {
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

            const response = await depositoService.updateDeposito({
                IDDEPOSITOLOJA: value.IDDEPOSITOLOJA,
                IDEMPRESA: value.IDEMPRESA,
                IDUSR: value.IDUSR,
                IDCONTABANCO: value.IDCONTABANCO,
                DTDEPOSITO: value.DTDEPOSITO,
                DTMOVIMENTOCAIXA: value.DTMOVIMENTOCAIXA,
                DSHISTORIO: value.DSHISTORIO,
                NUDOCDEPOSITO: value.NUDOCDEPOSITO,
                VRDEPOSITO: value.VRDEPOSITO,
                STATIVO: value.STATIVO,
                STCANCELADO: value.STCANCELADO,
            })
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DepositosLojaControllers.putListaDepositosLoja:", error);
            res.status(500).json({ error: "Erro ao atualizar depósito loja" });
            throw error;
        }
       
    }
    
    async putAtualizarStatusConferido(req, res) {
        try {
            const { error, value } = updateStatusConferidoSchema.validate(req.body, {
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

            const response = await depositoService.updateStatusConferido({
                IDDEPOSITOLOJA: value.IDDEPOSITOLOJA,
                STCONFERIDO: value.STCONFERIDO,
                DTCOMPENSACAO: value.DTCOMPENSACAO,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DepositosLojaControllers.putAtualizarStatusConferido:", error);
            res.status(500).json({ error: "Erro ao atualizar status conferido" });
            throw error;
        }
       
    }
    async putAtualizarStatusDepositoLoja(req, res) {
        try {
            const { error, value } = updateStatusDepositoSchema.validate(req.body, {
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

            const response = await depositoService.updateStatusDepositoLoja({
                IDDEPOSITOLOJA: value.IDDEPOSITOLOJA,
                STCANCELADO: value.STCANCELADO,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DepositosLojaControllers.putAtualizarStatusDepositoLoja:", error);
            res.status(500).json({ error: "Erro ao atualizar status do depósito loja" });
            throw error;
        }
       
    }

    async postDepositoLoja(req, res) {
        
        try {
            const {error, value} = createDepositoSchema.validate(req.body, {
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

            const response = await depositoService.createDeposito({
                DTDEPOSITO: value.DTDEPOSITO,
                DTMOVIMENTOCAIXA: value.DTMOVIMENTOCAIXA,
                IDEMPRESA: value.IDEMPRESA,
                IDUSR: value.IDUSR,
                IDCONTABANCO: value.IDCONTABANCO,
                VRDEPOSITO: value.VRDEPOSITO,
                DSHISTORIO: value.DSHISTORIO,
                NUDOCDEPOSITO: value.NUDOCDEPOSITO,
                DSPATHDOCDEPOSITO: value.DSPATHDOCDEPOSITO,
                STATIVO: value.STATIVO,
                STCANCELADO: value.STCANCELADO,
                IDUSRCACELAMENTO: value.IDUSRCACELAMENTO,
                DSMOTIVOCANCELAMENTO: value.DSMOTIVOCANCELAMENTO,
            });
               

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no DepositosLojaControllers.postDepositoLoja:", error);
            res.status(500).json({ error: "Erro ao cadastrar depósito loja" });
            throw error;
        }
    }
 
}

export default new DepositosLojaControllers();

import { dataFormatada } from "../../utils/dataFormatada.js";
import axios from 'axios';
import 'dotenv/config';
import { VendasClient } from '../client/index.js';
import { VendasService } from '../service/index.js';
import createAlterarVendasPrazoExcedidoSchema from '../schema/createAlterarVendasPrazoExcedido.js';

const url = process.env.API_URL;
const vendasClient = new VendasClient(url);
const vendasService = new VendasService(vendasClient);

class VendasControllers {

    async getListaVendas(req, res) {
        try {
            const apiUrl = `${url}/api/venda/lista-venda.xsjs`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error no VendasControllers.getListaVendas:", error);
            throw error;
        }
    }

    async getListaVendaId(req, res) {
        let { idVenda } = req.query;
        try {
            const apiUrl = `${url}/api/venda/lista-venda.xsjs?id=${idVenda}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error no VendasControllers.getListaVendaId:", error);
            throw error;
        }
        
    }

    async getListaVendaClienteGerencia(req, res) {
        let { nnf, serie, idEmpresa, idVenda, idSubGrupoEmpresarial, cpfOUidVenda, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
            nnf = nnf ? nnf : '';
            serie = serie ? serie : '';
            idEmpresa = idEmpresa ? idEmpresa : '';
            idVenda = idVenda ? idVenda : '';
            idSubGrupoEmpresarial = idSubGrupoEmpresarial ? idSubGrupoEmpresarial : '';
            cpfOUidVenda = cpfOUidVenda ? cpfOUidVenda : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {
         
            const apiUrl = `${url}/api/venda/lista-venda-cliente.xsjs?page=${page}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&cpfouIdVenda=${cpfOUidVenda}&nnf=${nnf}&serie=${serie}&idSubgrupoEmpresarial=${idSubGrupoEmpresarial}&idEmpresa=${idEmpresa}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
        
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error no VendasControllers.getListaVendaClienteGerencia:", error);
            throw error;
        }
        
    }

    async getListaDetalheVendaCliente(req, res) {
        let { idVenda} = req.query;
      

        try {
          
            const apiUrl = `${url}/api/venda/lista-venda-cliente.xsjs?id=${idVenda}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error no VendasControllers.getListaDetalheVendaCliente:", error);
            throw error;
        }
        
    }

    async getListaVendasSaldo(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade, page, pageSize  } = req.query;

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
       
            const apiUrl = `${url}/api/venda/movimentacao-saldo.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}&page=${page}&pageSize=${pageSize}`

            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no VendasControllers.getListaVendasSaldo:", error);
            throw error;
        }
        
    }

    async getListaRotatividade(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade, page, pageSize  } = req.query;

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
           
            
            const apiUrl = `${url}/api/venda/rotatividade.xsjs?page=${page}&pageSize=${pageSize}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}`
           
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no VendasControllers.getListaRotatividade:", error);
            throw error;
        }
        
    }

    async getListaVendaXML(req, res) {
        let { idVenda, idMarca,idEmpresa, stCancelado, stContigencia, dataPesquisaInicio, dataPesquisaFim, page, pageSize  } = req.query;
        idVenda = idVenda ? idVenda : '';
        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        stCancelado = stCancelado ? stCancelado : '';
        stContigencia = stContigencia ? stContigencia : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/venda/venda-xml.xsjs?id=${idVenda}&idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&stContingencia=${stContigencia}&stCancelado=${stCancelado}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)
      
            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no VendasControllers.getListaVendaXML:", error);
            throw error;
        }
    }
    
    async getListaVendasPrazoExcedido(req, res) {
        let {nnf, serie, idEmpresa, idVenda, idSubGrupoEmpresarial, cpfOUidVenda, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        nnf = nnf ? nnf : '';
        serie = serie ? serie : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        idSubGrupoEmpresarial = idSubGrupoEmpresarial ? idSubGrupoEmpresarial : '';
        cpfOUidVenda = cpfOUidVenda ? cpfOUidVenda : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
                
        try {

            
            const apiUrl = `${url}/api/venda/vendas-prazo-excedido-troca.xsjs?id=${idVenda}&idEmpresa=${idEmpresa}&cpfouIdVenda=${cpfOUidVenda}&nnf=${nnf}&serie=${serie}&idGrupoEmpresarial=${idSubGrupoEmpresarial}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&pageSize=${pageSize}&page=${page}`;
           
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Error no VendasControllers.getListaVendasPrazoExcedido:", error);
            throw error;
        }
    }

    async getListaVendasGnre(req, res) {
        let {docEntry, chave, page, pageSize } = req.query;
        docEntry = docEntry ? docEntry : '';
        chave = chave ? chave : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
                
        try {

            const apiUrl = `${url}/api/venda/lista-venda-gnre.xsjs?docEntry=${docEntry}&pageSize=${pageSize}&page=${page}`;
          
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Error no VendasControllers.getListaVendasGnre:", error);
            throw error;
        }
    }

    async postAlterarVendasPrazoExcedido(req, res) {
        try {
            const { error, value } = createAlterarVendasPrazoExcedidoSchema.validate(req.body, {
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

            const response = await vendasService.createAlterarVendasPrazoExcedido({
                DIASAPOSCOMPRAR: value.DIASAPOSCOMPRAR,
                IDPRODUTO: value.IDPRODUTO,
                IDVENDA: value.IDVENDA,
                IDVENDADETALHE: value.IDVENDADETALHE,
                MOTIVOEXCECAO: value.MOTIVOEXCECAO,
                QTD: value.QTD,
                TIPOTROCA: value.TIPOTROCA,
                USERAUTORIZADOR: value.USERAUTORIZADOR,
                VRPRODUTO: value.VRPRODUTO,
                VRTOTALLIQUIDO: value.VRTOTALLIQUIDO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Error no VendasControllers.postAlterarVendasPrazoExcedido:", error);
            res.status(500).json({ error: 'Erro ao alterar venda com prazo excedido' });
            throw error;
        }
    }
}

export default new VendasControllers();

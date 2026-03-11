import axios from "axios";
import 'dotenv/config';
// const url = process.env.API_URL;
const url = process.env.API_URL_HML;

class PromocaoControllers  {


   async getListaMecanicaAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query; 
            idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';     
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {   
        
            const apiUrl = `${url}/api/promocoes-ativas/select-mecanica.xsjs`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch(error) {
            console.error("erro no PromocaoControllers  getListaMecanicaAtivas:", error);
            throw error;
        } 
    }

    async getListaPromocoesAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, status, page, pageSize } = req.query; 
            idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';     
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {   
            const apiUrl = `${url}/api/promocoes-ativas/promocao-ativa.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idResumoPromocao=${idResumoPromocao}&status=${status}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
         
            return res.json(response.data);
        } catch(error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error;
        } 
    }
    async getListaDetalhesPromocoesAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, page, pageSize} = req.query; 
            idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';    
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        try {   
            const apiUrl = `${url}/api/promocoes-ativas/detalhe-promocao-ativa.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;
            
            const response = await axios.get(apiUrl)
      
            return res.json(response.data);
        } catch(error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error; 
        } 
    }

    async getListaProdutosPromocoesAtiva(req, res) {
        let { idEmpresa, idProduto, dsProduto, codBarras, page, pageSize  } = req.query; 
        idEmpresa = idEmpresa ? idEmpresa : '';        
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
    
        try {   
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-ativa.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no PromoçãoControllers getListaProdutosPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        } 
    }

    async getListaProdutosDestinoPromocoesAtiva(req, res) {
        let {  idProduto, dsProduto, codBarras, page, pageSize  } = req.query;      
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
    
        try {   
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-destino.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no PromoçãoControllers getListaProdutosDestinoPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        } 
    }

    async getListaProdutosOrigemPromocoesAtiva(req, res) {
        let {  idProduto, dsProduto, codBarras, page, pageSize  } = req.query;      
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
    
        try {   
          
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-origem.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no PromoçãoControllers getListaProdutosOrigemPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        } 
    }


    async getListaEmpresasPromocoesAtiva(req, res) {
        let { idResumoPromocao, page, pageSize  } = req.query; 
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
    
        try {   
            const apiUrl = `${url}/api/promocoes-ativas/empresa-promocao.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
   
            return res.json(response.data); // Retorna
        } catch(error) {
            console.error("Erro no PromoçãoControllers getListaEmpresasPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar empresas." });
        } 
    }

    async putPromocao(req, res) {
        try {
            let {
                IDRESUMOPROMOCAOMARKETING,
                IDMECANICARESUMOPROMOCAOMARKETING,
                TPAPARTIRDE,
                TPAPLICADOA,
                TPFATORPROMO,
                APARTIRDEQTD,
                APARTIRDOVLR,
                FATORPROMOVLR,
                FATORPROMOPERC,
                VLPRECOPRODUTO,
                DTHORAINICIO,
                DTHORAFIM,
                DSPROMOCAOMARKETING,
                IDPRODUTO,
                STATIVO,
                STEMPRESAPROMO,
                STDETPROMOORIGEM,
                STDETPROMODESTINO,
                IDEMPRESA,
                IDGRUPOEMDESTINO,
                IDSUBGRUPOEMDESTINO,
                IDMARCAEMDESTINO,
                IDFORNECEDOREMDESTINO,
                IDPRODUTODESTINO,
                IDGRUPOEMORIGEM,
                IDSUBGRUPOEMORIGEM,
                IDMARCAEMORIGEM,
                IDFORNECEDOREMORIGEM,
                IDPRODUTOORIGEM
            } = req.body;   

            if(!IDRESUMOPROMOCAOMARKETING) {
                return res.status(400).json({ error: "IDRESUMOPROMOCAOMARKETING é obrigatório." });
            }
            
    
            const response = await axios.put(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, [{
                DSPROMOCAOMARKETING,
                DTHORAINICIO,
                DTHORAFIM,
                TPAPLICADOA,
                APARTIRDEQTD,
                APARTIRDOVLR,
                TPFATORPROMO,
                FATORPROMOVLR,
                FATORPROMOPERC,
                TPAPARTIRDE,
                VLPRECOPRODUTO,
                STEMPRESAPROMO,
                STDETPROMOORIGEM,
                STDETPROMODESTINO,
                IDMECANICARESUMOPROMOCAOMARKETING,
                STATIVO,
                IDRESUMOPROMOCAOMARKETING,
                IDPRODUTO,
                IDEMPRESA,
                IDGRUPOEMDESTINO,
                IDSUBGRUPOEMDESTINO,
                IDMARCAEMDESTINO,
                IDFORNECEDOREMDESTINO,
                IDPRODUTODESTINO,
                IDGRUPOEMORIGEM,
                IDSUBGRUPOEMORIGEM,
                IDMARCAEMORIGEM,
                IDFORNECEDOREMORIGEM,
                IDPRODUTOORIGEM
                
                
            }]);
            
            
            return res.status(200).json({
                message: "Promoção atualizada com sucesso",
                data: response.data
            });
        } catch (error) {
            console.error("Erro ao atualizar promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar promoção." });
        }
    }
    async putProdutoDestinoPromocao(req, res) {
        try {
            let {
                IDRESUMOPROMOCAOMARKETING,
                STATIVO,
                IDPRODUTODESTINO,
            } = req.body;   

            if(!IDRESUMOPROMOCAOMARKETING) {
                return res.status(400).json({ error: "IDRESUMOPROMOCAOMARKETING é obrigatório." });
            }
                                                                    
            const response = await axios.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-destino.xsjs`, [{
                STATIVO,
                IDRESUMOPROMOCAOMARKETING,
                IDPRODUTODESTINO
            }]);
            
            return res.status(200).json({
                message: "Produto Destino da Promoção atualizada com sucesso",
                data: response.data
            });
        } catch (error) {
            console.error("Erro ao atualizar Produto Destino da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Produto Destino da Promoção." });
        }
    }
    
    async putProdutoOrigemPromocao(req, res) {
        try {
            let {
                IDRESUMOPROMOCAOMARKETING,
                STATIVO,
                IDPRODUTOORIGEM,
            } = req.body;

            if(!IDRESUMOPROMOCAOMARKETING) {
                return res.status(400).json({ error: "IDRESUMOPROMOCAOMARKETING é obrigatório." });
            }
 
            const response = await axios.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-origem.xsjs`, [{
                STATIVO,
                IDRESUMOPROMOCAOMARKETING,
                IDPRODUTOORIGEM
            }]);

            return res.status(200).json({
                message: "Produto Origem da Promoção atualizada com sucesso",
                data: response.data
            });

        } catch (error) {
            console.error("Erro ao atualizar Produto Origem da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Produto Origem da Promoção." });
        }
    }

    async putEmpresaPromocao(req, res) {
        try {
            let {
                IDRESUMOPROMOCAOMARKETING,
                STATIVO,
                IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING
            } = req.body;

            if(!IDRESUMOPROMOCAOMARKETING) {
                return res.status(400).json({ error: "IDRESUMOPROMOCAOMARKETING é obrigatório." });
            }
   
            const response = await axios.put(`${url}/api/promocoes-ativas/desativar-empresa-promocao.xsjs`, [{
                STATIVO,
                IDRESUMOPROMOCAOMARKETING,
                IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING
            }]);

            return res.status(200).json({
                message: "Empresa da Promoção atualizada com sucesso",
                data: response.data
            });

        } catch (error) {
            console.error("Erro ao atualizar Empresa da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Empresa da Promoção." });
        }
    }


    async putStatusPromocao(req, res) {
        try {
            let {
                IDRESUMOPROMOCAOMARKETING,
                STATIVO,
                IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING
            } = req.body;

            if(!IDRESUMOPROMOCAOMARKETING) {
                return res.status(400).json({ error: "IDRESUMOPROMOCAOMARKETING é obrigatório." });
            }
           
            const response = await axios.put(`${url}/api/promocoes-ativas/desativar-status-promocao.xsjs`, [{
                STATIVO,
                IDRESUMOPROMOCAOMARKETING,
                IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING
            }]);

            return res.status(200).json({
                message: "Empresa da Promoção atualizada com sucesso",
                data: response.data
            });

        } catch (error) {
            console.error("Erro ao atualizar Empresa da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Empresa da Promoção." });
        }
    }
    async postListaProdutosPromocoesAtiva(req, res) {
    
        try {   
            const dados = Array.isArray(req.body) ? req.body : [req.body];
            const response = await axios.post(`${url}/api/promocoes-ativas/produto-promocao-ativa.xsjs`, dados);
           
          
            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response.data
            });
        } catch(error) {
            console.error("Erro no PromoçãoControllers getListaProdutosPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        } 
    }

    async postPromocao(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];
                  
            const response = await axios.post(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, dados);
            
            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response.data
            });
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postPromocaoSubGrupo(req, res) {
        let  {
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDEMPRESA,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTO,
            IDPRODUTODESTINO,
            IDPRODUTOORIGEM,
        } = req.body;

        if(!IDSUBGRUPOEMDESTINO || !IDSUBGRUPOEMORIGEM) {
            return res.status(400).json({ error: "IDSUBGRUPOEMDESTINO e IDSUBGRUPOEMORIGEM são obrigatórios." });
        }

        try {
                  
            const response = await axios.post(`${url}/api/promocoes-ativas/promocao-ativa-subgrupo.xsjs`, [{
                TPAPARTIRDE,
                TPAPLICADOA,
                TPFATORPROMO,
                APARTIRDEQTD,
                APARTIRDOVLR,
                FATORPROMOVLR,
                FATORPROMOPERC,
                VLPRECOPRODUTO,
                DTHORAINICIO,
                DTHORAFIM,
                DSPROMOCAOMARKETING,
                IDEMPRESA,
                STATIVO,
                STEMPRESAPROMO,
                STDETPROMOORIGEM,
                STDETPROMODESTINO,
                IDGRUPOEMDESTINO,
                IDSUBGRUPOEMDESTINO,
                IDMARCAEMDESTINO,
                IDFORNECEDOREMDESTINO,
                IDGRUPOEMORIGEM,
                IDSUBGRUPOEMORIGEM,
                IDMARCAEMORIGEM,
                IDFORNECEDOREMORIGEM,
                IDPRODUTO,
                IDPRODUTODESTINO,
                IDPRODUTOORIGEM,
            }]);
            
            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response.data
            });
        } catch (error) {
            console.error("Erro no PromocaoControllers postPromocaoSubGrupo:", error);
            throw error;
        }
    }

    async postMecanicaAtivas(req, res) {
       
        try {   
            let { DESCRICAO, APLICACAODESTINO, MECANICA, TIPODESCONTO } = req.body; 
            // if(!MECANICA || !APLICACAODESTINO || !TIPODESCONTO) {
            //     return res.status(400).json({ error: "Todos os parâmetros (DESCRICAO, APLICACAODESTINO, MECANICA, TIPODESCONTO) são obrigatórios." });
            // }

            const response = await axios.post(`${url}/api/promocoes-ativas/select-mecanica.xsjs`, {
                    DESCRICAO,
                    APLICACAODESTINO,
                    MECANICA,
                    TIPODESCONTO
                },
            )
            
            return res.json(response.data);
        } catch(error) {
            console.error("erro no PromocaoControllers  postMecanicaAtivas:", error);
            throw error;
        } 
    }

}

export default new PromocaoControllers();

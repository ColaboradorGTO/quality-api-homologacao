import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
// const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador'

class CormercialControllers {

    async getListaFornecedorProduto(req, res) {
        let { idMarca } = req.query;
        idMarca = idMarca ? idMarca : '';
        try {
            const apiUrl = `${url}/api/comercial/fornecedor-produto.xsjs?idmarca=${idMarca}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoSap(req, res) {
        let { idEmpresa } = req.query;

        try {
            const apiUrl = `${url}/api/produto-sap/grupo.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaGrupoProduto(req, res) {
        let { idEmpresa } = req.query;

        try {
            const apiUrl = `${url}/api/comercial/grupo-produto.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaSubGrupoProduto(req, res) {
        let { idGrupo } = req.query;
        idGrupo = idGrupo ? idGrupo : '';
        try {
            const apiUrl = `${url}/api/comercial/subgrupo-produto.xsjs?idGrupo=${idGrupo}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMarcaProduto(req, res) {
        let { idSubGrupo } = req.query;
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        try {
            const apiUrl = `${url}/api/comercial/marca-produto.xsjs?idSubGrupo=${idSubGrupo}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaEmpresaComercial(req, res) {
        let { idMarca, idEmpresa, ufProd, page, pageSize } = req.query;
       
          
            try {
                const apiUrl = `http://164.152.245.77:8000/quality/concentrador/api/comercial/empresa.xsjs?idmarca=${idMarca}`;
                const response = await axios.get(apiUrl)
                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        
    }

    async getListaVendasEstruturaProdutos(req, res) {
        let { idEmpresaLogin, dataPesquisaInicio, dataPesquisaFim } = req.query;
        if (!isNaN(idEmpresaLogin)) {
            idEmpresaLogin = Number(idEmpresaLogin);
            dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
            dataPesquisaFim = dataFormatada(dataPesquisaFim)
            try {
                const apiUrl = `${url}/api/comercial/vendas-por-produto.xsjs?idEmpresa=${idEmpresaLogin}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaProdutosEstoquePrecoLoja(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarcaProduto, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarca, vlPrecoProduto } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarca = idMarca ? idMarca : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        vlPrecoProduto = vlPrecoProduto ? vlPrecoProduto : '';

        try {
            
            const apiUrl = `${url}/api/comercial/produtos-precos-estoques-lojas.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}&vlPreco=${vlPrecoProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasMarcaPorPeriodoComercial(req, res) {
        let { idMarca, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;
    
            idMarca = idMarca ? idMarca : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

          try {
            const apiUrl = `${url}/api/comercial/venda-marca-periodo.xsjs?page=${page}&pageSize=${pageSize}&idMarca=${idMarca}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
          } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
          }
        
    }

    async getListaVendasEstoqueGrupoSubGrupoComercial(req, res) {
        let { idMarca, dataInicio, dataFim, idGrupo, idGrade, page, pageSize } = req.query;
    
        if (!isNaN(idMarca)) {
            idMarca = idMarca ? idMarca : '';
            dataInicio = dataInicio ? dataInicio : ''
            dataFim = dataFim ? dataFim : '' 
            idGrupo = idGrupo ? idGrupo : '';
            idGrade = idGrade ? idGrade : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
    
          try {
           
            const apiUrl = `${url}/api/comercial/vendas-estoque-grupo-subgrupo.xsjs?page=${page}&pageSize=${pageSize}&dataPesquisaInicio=${dataInicio}&dataPesquisaFim=${dataFim}&idMarca=${idMarca}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}`
        
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
          } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
          }
        }
    }

    async getListaVendasPosicionamentoEstoquePeriodos(req, res) {
        let { 
            dataPesquisaInicio,
            dataPesquisaInicioB,
            dataPesquisaInicioC,
            dataPesquisaFim, 
            dataPesquisaFimB, 
            dataPesquisaFimC, 
            idMarcaProduto, 
            descricaoProduto, 
            ufPesquisa, 
            idFornecedor, 
            idGrupo, 
            idGrade, 
      
         
        } = req.query;
        
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        dataPesquisaInicioB = dataFormatada(dataPesquisaInicioB) ? dataFormatada(dataPesquisaInicioB) : '';
        dataPesquisaFimB = dataFormatada(dataPesquisaFimB) ? dataFormatada(dataPesquisaFimB) : '';
        dataPesquisaInicioC = dataFormatada(dataPesquisaInicioC) ? dataFormatada(dataPesquisaInicioC) : '';
        dataPesquisaFimC = dataFormatada(dataPesquisaFimC) ? dataFormatada(dataPesquisaFimC) : '';
    
        try {
            
            const apiUrl = `${url}/api/comercial/vendas-estoque-produto.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataPesquisaInicioB=${dataPesquisaInicioB}&dataPesquisaFimB${dataPesquisaFimB}&dataPesquisaInicioC=${dataPesquisaInicioC}&dataPesquisaFimC=${dataPesquisaFimC}&descricaoProduto=${descricaoProduto}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`
            const response = await axios.get(apiUrl)
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
        
    }

    async getListaColaboradorRelatorio(req, res) {
        let { idEmpresa } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        try {
            const apiUrl = `${url}/api/comercial/funcionariorel.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database tabela :", error);
            throw error;
        }
    }

    async getListaVendasCustoLojas(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        try {

            const apiUrl = `${url}/api/comercial/custo-por-loja.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)
            console.log(apiUrl, 'apiUrl')
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasPosicionamentoEstoque(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarca, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {
          
            const apiUrl = `${url}/api/comercial/vendas-posicionamento-estoque.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaColaboradorProdutosVendidos(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarca, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto, idFuncionario } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        idFuncionario = idFuncionario ? idFuncionario : '';
        try {
          

            const apiUrl = `${url}/api/comercial/colaborador-produtos-vendidos.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}&idFunc=${idFuncionario}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
    async getListaMetasGrupo(req, res) {
        let {  } = req.query;
        
        try {
            // ajaxGetComAnimacaoDeCarregamento(`api/comercial/lista-premiacoes.xsjs?page=${numPage}`)
            const apiUrl = `${url}/api/comercial/lista-meta-vendas.xsjs?page=1`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaPremiacoesPeriodo(req, res) {
        let {  } = req.query;
        
        try {
            // ajaxGetComAnimacaoDeCarregamento(`api/comercial/lista-premiacoes.xsjs?page=${numPage}`)
            const apiUrl = `${url}/api/comercial/lista-premiacoes.xsjs?page=1`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new CormercialControllers();

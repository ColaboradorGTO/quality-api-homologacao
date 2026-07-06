import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;
// const url = process.env.API_URL_HML;
import atualizarStatusPedidoSchema from "../schema/atualizarStatusPedido.js";
import atualizarDetalhePedidoSchema from "../schema/atualizarDetalhePedido.js";
import atualizarDistribuicaoHistoricoSchema from "../schema/atualizarDistribuicaoHistorico.js";
import cancelarPedidoSchema from "../schema/cancelarPedido.js";
import atualizarFinalizandoPedidoSchema from "../schema/finalizarPedido.js";
import reativarPedidoSchema from "../schema/reativarPedido.js";
import atualizarPedidoSchema  from "../schema/atualizarPedido.js";
import atualizarStatusProdutoPedidoSchema from "../schema/atualizarStatusProdutoPedido.js";
import atualizarFornecedorSchema from "../schema/atualizarFornecedor.js";
import atualizarFornecedorFabricanteSchema from "../schema/atualizarFornecedorFabricante.js";
import criarFornecedorFabricanteSchema from "../schema/criarFornecedorFabricante.js";
import atualizarFabricanteFornecedorSchema from "../schema/atualizarFabricanteFornecedor.js";
import atualizarFabricanteSchema from "../schema/atualizarFabricante.js";
import atualizarCategoriaPedidosSchema from "../schema/atualizarCategoriaPedidos.js";
import atualizarTipoTecidoSchema from "../schema/atualizarTipoTecido.js";
import atualizarEstilosSchema from "../schema/atualizarEstilos.js";
import atualizarCoresSchema from "../schema/atualizarCores.js";
import atualizarUnidadeMedidaSchema from "../schema/atualizarUnidadeMedida.js";
import atualizarGrupoEstruturaSchema from "../schema/atualizarGrupoEstrutura.js";
import atualizarSubGrupoEstruturaSchema from "../schema/atualizarSubGrupoEstrutura.js";
import atualizarCondicaoPagamentoSchema from "../schema/atualizarCondicaoPagamento.js";
import atualizarTransportadorSchema from "../schema/atualizarTransportador.js";
import atualizarImagemSchema from "../schema/atualizarImagem.js";
import atualizarImagemProdutoSchema from "../schema/atualizarImagemProduto.js";
import atualizarDistribuicaoHistoricoADMSchema from "../schema/atualizarDistribuicaoHistoricoADM.js";

import criarDetalhePedidoSchema from "../schema/criarDetalhePedido.js";
import criarEstiloSchema from "../schema/criarEstilo.js";

import { ComprasClient } from "../client/index.js";
import { ComprasService } from "../services/index.js";
const comprasClient = new ComprasClient(process.env.API_URL);
const comprasService = new ComprasService(comprasClient);



class ComprasControllers {

    async getListaTodosPedidos(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim } = req.query;
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        try {
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?pageSize=1000&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPedidosDetalhado(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idFornecedor, idMarca, idPedido } = req.query;
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idMarca = idMarca ? idMarca : '';
        idPedido = idPedido ? idPedido : '';

        try {
            const apiUrl = `${url}/api/compras/lista_pedidos_detalhado.xsjs?pageSize=500&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornecedor}&idMarcaPesquisa=${idMarca}&idpedido=${idPedido}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaDetalhePedidos(req, res) {
        let { idPedido, idDetalhePedido, dsProduto, refProduto, somenteGradeAtiva, dataPesquisaInicio, dataPesquisaFim, streposicao,sttransformado, page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        idDetalhePedido = idDetalhePedido ? idDetalhePedido : '';
        dsProduto = dsProduto ? dsProduto : '';
        refProduto = refProduto ? refProduto : '';
        somenteGradeAtiva = somenteGradeAtiva ? somenteGradeAtiva : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        streposicao = streposicao ? streposicao : '';
        sttransformado = sttransformado ? sttransformado : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/compras/lista_detalhepedidos.xsjs?idpedido=${idPedido}&id=${idDetalhePedido}&dsProduto=${dsProduto}&refProduto=${refProduto}&somenteGradeAtiva=${somenteGradeAtiva}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&streposicao=${streposicao}&sttransformado=${sttransformado}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
       
            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no ComprasControllers.getListaDetalhePedidos:", error);
            throw error;
        }
    }

    async getListaDetalhePedidoGrade(req, res) {
        let { idDetalhePedido } = req.query;
        idDetalhePedido = idDetalhePedido ? idDetalhePedido : '';

        try {
           
            const apiUrl = `${url}/api/compras/lista_detalhepedidogradeedit.xsjs?idDetPedido=${idDetalhePedido}&page=1`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: "erro no ComprasControllers.getListaDetalhePedidoGrade" });
        }
    }

    async getListaPromocoes(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim } = req.query;
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        try {
            const apiUrl = `${url}/api/compras/lista_promocoes.xsjs?pageSize=1000&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaEmpresaPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_empresapromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoOrigemPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_produtosorigempromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoDestinoPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_produtosdestinopromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }


    async getListaPedidos(req, res) {
        let {idPedido, dataPesquisaFim, dataPesquisaInicio, idMarca, idFornecedor, idFabricante, idComprador, stSituacaoSap, page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idFabricante = idFabricante ? idFabricante : '';
        idComprador = idComprador ? idComprador : '';
        stSituacaoSap = stSituacaoSap ? stSituacaoSap : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornecedor}&idMarcaPesquisa=${idMarca}&idpedido=${idPedido}&idFabPesquisa=${idFabricante}&idCompradorPesquisa=${idComprador}&stSituacaoSAP=${stSituacaoSap}`;
            
            const response = await axios.get(apiUrl)
            
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaDetalhePedidosGrade(req, res) {
        let {idPedido, idDetalhePedido, dataPesquisaInicio, dataPesquisaFim,  page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        idDetalhePedido = idDetalhePedido ? idDetalhePedido : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/lista_detalhepedidosgrade.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idpedido=${idPedido}`;
            const response = await axios.get(apiUrl)
            // const response = await getDetalhePedido(idPedido, idDetalhePedido, dataPesquisaInicio, dataPesquisaFim,  page, pageSize)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaUltimoPedido(req, res) {
        let { idComprador, idPedido } = req.query;
        idComprador = idComprador ? idComprador : '';
        idPedido = idPedido ? idPedido : '';

        try {
            const apiUrl = `${url}/api/compras/ultimo_pedidos.xsjs?idcomprador=${idComprador}&idPedido=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasControllers.getListaUltimoPedido:", error);
            throw error;
        }
    }

    async getListaFornecedores(req, res) {
        let { idFornecedor, descFornecedor, descFornecedorOuCNPJ, CNPJFornecedor,  page, pageSize } = req.query;
        idFornecedor = idFornecedor ? idFornecedor : '';
        descFornecedor = descFornecedor ? descFornecedor : '';
        CNPJFornecedor = CNPJFornecedor ? CNPJFornecedor : '';
        descFornecedorOuCNPJ = descFornecedorOuCNPJ ? descFornecedorOuCNPJ : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            
            const apiUrl = `${url}/api/compras/fornecedor.xsjs?id=${idFornecedor}&descFornecedor=${descFornecedor}&CNPJFornecedor=${CNPJFornecedor}&descFornOrCnpj=${descFornecedorOuCNPJ}&page=${page}&pageSize=${pageSize}`
    
            const response = await axios.get(apiUrl)
            
            return res.json(response.data);
        } catch (error) {
            console.error("Error no ComprasController.getListaFornecedores:", error);
            throw error;
        }

    }

    async getListaFornecedorProduto(req, res) {
        let { idFornecedor, idProduto } = req.query;
        idFornecedor = idFornecedor ? idFornecedor : '';
        idProduto = idProduto ? idProduto : '';

        try {
            const apiUrl = `${url}/api/compras/fornecedor-produto.xsjs?idFornecedor=${idFornecedor}&idProduto=${idProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoPedido(req, res) {
        let { referenciaProduto, fornecedorPedido, page, pageSize } = req.query;
        referenciaProduto = referenciaProduto ? referenciaProduto : '';
        fornecedorPedido = fornecedorPedido ? fornecedorPedido : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';


        try {


            const apiUrl = `${url}/api/compras/produtospedido.xsjs?PesqProd=${referenciaProduto}&IdForn=${fornecedorPedido}&page=${page}&pageSize=${pageSize}`
   
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasControllers.getListaProdutoPedido:", error);
            throw error;
        }
    }
    
    async getListaFabricantes(req, res) {
        let { idFabricante, page, pageSize } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/compras/fabricante.xsjs?idFab=${idFabricante}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error no ComprasControllers.getListaFabricantes:", error);
            throw error;
        }

    }
    
    async getListaCompradores(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/comprador.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
    async getListaFornecedorFabricante(req, res) {
        let { idFabricante, descricaoFornecedor, idFornecedor, cnpjFornecedor } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        descricaoFornecedor = descricaoFornecedor ? descricaoFornecedor : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        cnpjFornecedor = cnpjFornecedor ? cnpjFornecedor : '';

        try {
            const apiUrl = `${url}/api/compras/fornecedor-fabricante.xsjs?idFab=${idFabricante}&descFornecedor=${descricaoFornecedor}&idFor=${idFornecedor}&CNPJFornecedor=${cnpjFornecedor}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
    async getListaFabricanteCadastro(req, res) {
        let { idFabricante, descricaoFabricante, idFornecedor, page, pageSize } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        descricaoFabricante = descricaoFabricante ? descricaoFabricante : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : ''

        try {
            const apiUrl = `${url}/api/compras/fabricante-fornecedor.xsjs?idFab=${idFabricante}&descFab=${descricaoFabricante}&idFor=${idFornecedor}&page=${page}&&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVinculoFornecedorFabricante(req, res) {
        let { idFabricanteFornecedor, idFornecedorPedido, idFabricantePedido } = req.query;
        idFabricanteFornecedor = idFabricanteFornecedor ? idFabricanteFornecedor : '';
        idFornecedorPedido = idFornecedorPedido ? idFornecedorPedido : '';
        idFabricantePedido = idFabricantePedido ? idFabricantePedido : '';
        
         try {
            const apiUrl = `${url}/api/compras/vincfabforn.xsjs?idvincfornfab=${idFabricanteFornecedor}&idfornpedido=${idFornecedorPedido}&idfabnpedido=${idFabricantePedido}`
            const response = await axios.get(apiUrl)
          
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasController.getListaVinculoFornecedorFabricante:", error);
            throw error;
        }

    }

    async getListaCondicoesPagamento(req, res) {
        let { idCondPagamento, descricaoPagamento } = req.query;
        idCondPagamento = idCondPagamento ? idCondPagamento : '';
        descricaoPagamento = descricaoPagamento ? descricaoPagamento : '';
        try {
            const apiUrl = `${url}/api/compras/condicaopagamento.xsjs?idCondPag=${idCondPagamento}&descCondPag=${descricaoPagamento}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no CComprasController.getListaCondicoesPagamento", error);
            throw error;
        }

    }

    async getListaTransportador(req, res) {
        let { idFornecedorFabricante } = req.query;
        idFornecedorFabricante = idFornecedorFabricante ? idFornecedorFabricante : '';

        try {
            const apiUrl = `${url}/api/compras/transportadora.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaTransportadora(req, res) {
        let { idTransportador, descricaoTransportador, cnpjTransportador } = req.query;
        idTransportador = idTransportador ? idTransportador : '';
        descricaoTransportador = descricaoTransportador ? descricaoTransportador : '';
        cnpjTransportador = cnpjTransportador ? cnpjTransportador : '';
        try {
            const apiUrl = `${url}/api/compras/transportador.xsjs?idTransportador=${idTransportador}&descTransportador=${descricaoTransportador}&CNPJTransportador=${cnpjTransportador}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
    async getListaByIdTransportador(req, res) {
        let { idTransportador } = req.query;
        idTransportador = idTransportador ? idTransportador : '';

        try {
            const apiUrl = `${url}/api/compras/transportador.xsjs?idTransportador=${idTransportador}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaEstruturaMercadoria(req, res) {
        let {idSubGrupoEstrutura, descricao } = req.query;
        idSubGrupoEstrutura = idSubGrupoEstrutura ? idSubGrupoEstrutura : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/subgrupoestrutura.xsjs?idSubGrupoExt=${idSubGrupoEstrutura}&descSubGrupoExt=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaImagemProduto(req, res) {
        let { numPage, numeroRefProduto, idFabricante, idSubEstrutura, idPedido, idNomeCodBarrasProd } = req.query;
        numPage = numPage ? numPage : '';
        numeroRefProduto = numeroRefProduto ? numeroRefProduto : '';
        idFabricante = idFabricante ? idFabricante : '';
        idSubEstrutura = idSubEstrutura ? idSubEstrutura : '';
        idPedido = idPedido ? idPedido : '';
        idNomeCodBarrasProd = idNomeCodBarrasProd ? idNomeCodBarrasProd : '';


        try {
            const apiUrl = `${url}/api/compras/imagemproduto.xsjs?NuRefImgProd=${numeroRefProduto}&IDFabImagem=${idFabricante}&IDSubEstImagem=${idSubEstrutura}&idPedido=${idPedido}&idNomeCodBarrasProd=${idNomeCodBarrasProd}`

            const response = await axios.get(apiUrl)
            
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no ComprasControllers.getListaImagemProduto:", error);
            throw error;
        }
    }

    async getListaProdutosImagens(req, res) {
        let { numeroRefProduto} = req.query;
        numeroRefProduto = numeroRefProduto ? numeroRefProduto : '';


        try {
            const apiUrl = `${url}/api/compras/produtos-imagens.xsjs?nuRefProd=${numeroRefProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasControllers.getListaProdutosImagens:", error);
            throw error;
        }
    }

    async getListaDetalheImagemProduto(req, res) {
        let { idImagem } = req.query;
        idImagem = idImagem ? idImagem : '';


        try {
            const apiUrl = `${url}/api/compras/lista_produtosimagem.xsjs?IDImagens=${idImagem}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaTPDocumento(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/tipodocumento.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaTPDocumento(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/tipodocumento.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaGrupoEstrutura(req, res) {
        let { idGrupoEstrutura, descricaoGrupoEstrutura} = req.query;
        idGrupoEstrutura = idGrupoEstrutura ? idGrupoEstrutura : '';
        descricaoGrupoEstrutura = descricaoGrupoEstrutura ? descricaoGrupoEstrutura : '';
        try {
            const apiUrl = `${url}/api/compras/grupoextrutura.xsjs?idGrupoExt=${idGrupoEstrutura}&descGrupoExt=${descricaoGrupoEstrutura}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaUnidadesMedidas(req, res) {
        let { idUnidadeMedida, descricao} = req.query;
        idUnidadeMedida = idUnidadeMedida ? idUnidadeMedida : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/unidadesdemedidas.xsjs?idUnidMed=${idUnidadeMedida}&descUnidMed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro ComprasControllers.getListaUnidadesMedidas:", error);
            throw error;
        }
    }

    async getListaCores(req, res) {
        let { idCor, descricao} = req.query;
        idCor = idCor ? idCor : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/cores.xsjs?idCor=${idCor}&descCor=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ComprasControllers.getListaCores:", error);
            throw error;
        }
    }

    async getListaGrupoCores(req, res) {
        let { idCor, descricao} = req.query;
        idCor = idCor ? idCor : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/grupocores.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos ComprasControllers.getListaGrupoCores:", error);
            throw error;
        }
    }

    async getListaTamanhos(req, res) {
        let { } = req.query;
     
        try {
            const apiUrl = `${url}/api/compras/tamanho.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos ComprasControllers.getListaTamanhos:", error);
            throw error;
        }
    }

    async getListaEstilos(req, res) {
        let { idEstilo, idGrupoEstilo, descEstilo, page, pageSize} = req.query;
        idEstilo = idEstilo ? idEstilo : '';
        idGrupoEstilo = idGrupoEstilo ? idGrupoEstilo : '';
        descEstilo = descEstilo ? descEstilo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/estilos.xsjs?idEstilo=${idEstilo}&descEstilo=${descEstilo}&idGrupoEstilo=${idGrupoEstilo}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            // const response = await getEstilos(idEstilo, idGrupoEstilo, descEstilo, page, pageSize)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaTipoTecidos(req, res) {
        let { idTecido, descricao} = req.query;
        idTecido = idTecido ? idTecido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tipotecidos.xsjs?idTecido=${idTecido}&descTecido=${descricao}`
            const response = await axios.get(apiUrl)
       
            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaCategoriaPedidos(req, res) {
        let { idCategoriaPedido, descricao} = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/categoriapedidos.xsjs?idCatPed=${idCategoriaPedido}&descCatPed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaCategoriaPedido(req, res) {
        let { idCategoriaPedido, descricao, tipoCategoria} = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        tipoCategoria = tipoCategoria ? tipoCategoria : '';
        try {
            const apiUrl = `${url}/api/compras/categoriapedido.xsjs?idtipopedido=${idCategoriaPedido}`
            const response = await axios.get(apiUrl)
            
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.getListaCategoriaPedido:", error);
            throw error;
        }
    }

    async getListaTamanhosPedidos(req, res) {
        let { idTamanhoPedido, descricao} = req.query;
        idTamanhoPedido = idTamanhoPedido ? idTamanhoPedido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tamanhospedidos.xsjs?idTamPed=${idTamanhoPedido}&descTamPed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ComprasController.getListaTamanhosPedidos:", error);
            throw error;
        }
    }

    async getListaTamanhosCategoriaPedidos(req, res) {
        let { idCategoriaPedido, descricao, idTamanhoPedido} = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        idTamanhoPedido = idTamanhoPedido ? idTamanhoPedido : '';
        try {
            const apiUrl = `${url}/api/compras/vinctamcat.xsjs?idCatPeid=${idCategoriaPedido}&descCatPed=${descricao}&idTamPed=${idTamanhoPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ComprasController.getListaTamanhosCategoriaPedidos:", error);
            throw error;
        }
    }

    async getListaUnidadeMedida(req, res) {
        let { idUnidadeMedida, descricao} = req.query;
        idUnidadeMedida = idUnidadeMedida ? idUnidadeMedida : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/unidademedida.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaTipoTecido(req, res) {
        let { idTecido, descricao} = req.query;
        idTecido = idTecido ? idTecido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tipo-tecido.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaLocalExposicao(req, res) {
        let { } = req.query;
   
        try {
            const apiUrl = `${url}/api/compras/localexposicao.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaDistribuicaoHistorico(req, res) {
        let {idFornecedor, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        
        idFornecedor = idFornecedor ? idFornecedor : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/compras/distribuicao-compras-historico.xsjs?idfornecedorpedido=${idFornecedor}&datainicial=${dataPesquisaInicio}&datafinal=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaDetalheDistribuicao(req, res) {
        let {idPedido, idResumoPedido } = req.query;
        
        idPedido = idPedido ? idPedido : '';
        idResumoPedido = idResumoPedido ? idResumoPedido : '';
        try {
            const apiUrl = `${url}/api/compras/detalhe-distribuicao-compras.xsjs?id=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
    async getListaDistribuicaoSugestoesHistorico(req, res) {
        let {idPedido } = req.query;
        
        idPedido = idPedido ? idPedido : '';
        try {
            const apiUrl = `${url}/api/compras/distribuicao-compras-sugestoes-historico.xsjs?page=&id=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
    
    async getListaVinculoEstiloGrupo(req, res) {
        let {idVinculoEstilo } = req.query;
        
        idVinculoEstilo = idVinculoEstilo ? idVinculoEstilo : '';
        try {
            const apiUrl = `${url}/api/compras/vincestilogrupo.xsjs?idEstGrupo=${idVinculoEstilo}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro ComprasControllers.getListaVinculoEstiloGrupo:", error);
            return res.status(500).json({ error: "erro no ComprasControllers.getListaVinculoEstiloGrupo" });
        }
    }

    async getListaProdutosEntreFiliais(req, res) {
        let {idFilialOrigem, idFilialDestino, idProduto, descricaoProduto, codBarras, page, pageSize} = req.query;

        idFilialOrigem = idFilialOrigem ? idFilialOrigem : '';
        idFilialDestino = idFilialDestino ? idFilialDestino : '';
        idProduto = idProduto ? idProduto : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        
        try {
            const apiUrl = `${url}/api/compras/lista-produtos-entre-filiais.xsjs?idFilialOrigem=${idFilialOrigem}&idFilialDestino=${idFilialDestino}&idProd=${idProduto}&descProd=${descricaoProduto}&codBarrasProd=${codBarras}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaProdutosPorPedido(req, res) {
        let {idResumoPedido, idFilial, dataInicio, dataFim, idProduto, descricaoProduto, codBarras, page, pageSize} = req.query;
            idResumoPedido = idResumoPedido ? idResumoPedido : '';
            idFilial = idFilial ? idFilial : '';
            dataInicio = dataInicio ? dataInicio : '';
            dataFim = dataFim ? dataFim : '';
            idProduto = idProduto ? idProduto : '';
            descricaoProduto = descricaoProduto ? descricaoProduto : '';
            codBarras = codBarras ? codBarras : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        
        try {
            const apiUrl = `${url}/api/compras/lista-produtos-por-pedido-e-filial.xsjs?dtInicio=${dataInicio}&dtFim=${dataFim}&idFilial=${idFilial}&idResumoPedido=${idResumoPedido}&idProd=${idProduto}&descProd=${descricaoProduto}&codBarrasProd=${codBarras}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
    async getListaFornecedorSap(req, res) {
        let {nomeFornecedor, cnpjFinal, cnpjFornecedorSemFormatar, page, pageSize} = req.query;
            nomeFornecedor = nomeFornecedor ? nomeFornecedor : '';
            cnpjFinal = cnpjFinal ? cnpjFinal : '';
            cnpjFornecedorSemFormatar = cnpjFornecedorSemFormatar ? cnpjFornecedorSemFormatar : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
        
        try {
            const apiUrl = `${url}/api/service-layer/pedido-compra/por-codigo/consulta-fornecedor-sap.xsjs?descFornecedor=${nomeFornecedor}&cnpjfor=${cnpjFinal}&cnpjforsemformat=${cnpjFornecedorSemFormatar}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    //  UPDATE
    async putProdutoImagem(req, res) {
        try {
            const { error, value } = await atualizarImagemProdutoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

           
            const response = await comprasService.updateImagemProduto(
                value.IDIMAGEMPRODUTO,
                value.STATIVO
            )

            return res.status(200).json(response); // Retorna
        } catch (error) {
            console.error("Erro no ComprasControllers.updateProdutoImagem:", error);
            throw error;
        }
    }

    async putImagem(req, res) {
        try {
            const { error, value } = await atualizarImagemSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateImagem(
                value.IDIMAGEM,
                value.STATIVO
            )

            return res.status(200).json(response); // Retorna
        } catch (error) {
            console.error("Erro no ComprasControllers.putImagem:", error);
            throw error;
        }
    }

    async putCadastroTransportador(req, res) {
        try {
            const { error, value } = await atualizarTransportadorSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

          
            const response = await comprasService.updateTransportador(
                value.IDTRANSPORTADORA,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );
           
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error no ComprasControllers.putCadastroTransportador:", error);
            throw error;
        }
    }

    async putCondicaoPagamento(req, res) {
        
        try {
            const { error, value } = await atualizarCondicaoPagamentoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateCondicaoPagamento(
                value.IDCONDICAOPAGAMENTO,
                value.IDGRUPOEMPRESARIAL,
                value.DSCONDICAOPAG,
                value.STPARCELADO,
                value.NUPARCELAS,
                value.NUNDIA1PAG,
                value.NUNDIA2PAG,
                value.NUNDIA3PAG,
                value.NUNDIA4PAG,
                value.NUNDIA5PAG,
                value.NUNDIA6PAG,
                value.NUNDIA7PAG,
                value.NUNDIA8PAG,
                value.NUNDIA9PAG,
                value.NUNDIA10PAG,
                value.NUNDIA11PAG,
                value.NUNDIA12PAG,
                value.DTULTALTERACAO,
                value.QTDDIAS,
                value.DSTPDOCUMENTO,
                value.STATIVO,
                value.IDTPDOCUMENTO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("Error no ComprasControllers.putCondicaoPagamento:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putSubGrupoEstrutura(req, res) {

        try {
            const { error, value } = await atualizarSubGrupoEstruturaSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

         
            const response = await comprasService.updateSubGrupoEstrutura(
                value.IDGRUPOESTRUTURAANTIGA,
                value.IDGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURAFIM,
                value.CODSUBGRUPOESTRUTURA,
                value.IDSUBGRUPOESTRUTURA,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ComprasControllers.putSubGrupoEstrutura:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putGrupoEstrutura(req, res) {
        try {
            const { error, value } = await atualizarGrupoEstruturaSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateGrupoEstrutura(
                value.IDGRUPOESTRUTURA,
                value.IDGRUPOEMPRESARIAL,
                value.DSGRUPOESTRUTURA,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasController.putGrupoEstrutura:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putUnidadeMedida(req, res) {
        try {
            const { error, value } = await atualizarUnidadeMedidaSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateUnidadeMedida(
                value.IDUNIDADEMEDIDA,
                value.DSUNIDADE,
                value.DSSIGLA,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );
            
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ComprasControllers.putUnidadeMedida:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putCores(req, res) {
        try {
            const { error, value } = await atualizarCoresSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateCores(
                value.IDCOR,
                value.IDGRUPOCOR,
                value.DSCOR,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ComprasControllers.putCores:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putEstilos(req, res) {
        try {
            const { error, value } = await atualizarEstilosSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

        
            const response = await comprasService.updateEstilos(
                value.IDVINCESTILOSESTRUTURA,
                value.IDGRUPOESTRUTURAANTIGA,
                value.IDESTILO,
                value.DSESTILO,
                value.IDGRUPOESTRUTURA,
                value.STATIVO
            );
            
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ComprasControllers.putEstilos:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putTipoTecidos(req, res) {
        try {
            const { error, value } = await atualizarTipoTecidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateTipoTecidos(
                value.IDTPTECIDO,
                value.DSTIPOTECIDO,
                value.DSSIGLA,
                value.STATIVO,
                value.IDFUNCIONARIO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("erro no ComprasControllers.updateTipoTecidos:", error);
            throw error;
        }
    }

    async putCategoriaPedidos(req, res) {
        try {
            const { error, value } = await atualizarCategoriaPedidosSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateCategoriaPedidos(
                value.IDCATEGORIAPEDIDO,
                value.DSCATEGORIAPEDIDO,
                value.TIPOPEDIDO,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putCategoriaPedidos:", error);
            throw error;
        }
    }

    async putFabricante(req, res) {
        try {
            const { error, value } = await atualizarFabricanteSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateFabricante(
                value.IDFABRICANTE,
                value.DSFABRICANTE,
                value.DTULTATUALIZACAO,
                value.DTCADASTRO,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putFabricante:", error);
            throw error;
        }
    }

    async putFabricanteFornecedor(req, res) {
        try {
            const { error, value } = await atualizarFabricanteFornecedorSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateFabricanteFornecedor(
                value.IDFABRICANTEFORN,
                value.IDFABRICANTE,
                value.IDFORNECEDOR,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putFabricanteFornecedor:", error);
            throw error;
        }
    }
    
    async updateVinculoTamanhoCategoria(req, res) {
        let { IDCATPEDIDOTAMANHO } = req.query;

        if(!IDCATPEDIDOTAMANHO) {
            return res.status(400).json({ error: "IDCATPEDIDOTAMANHO is required" });
        }

        try {
            const apiUrl = `${url}/api/compras/del_vinctamcat.xsjs?IDCATPEDIDOTAMANHO=${IDCATPEDIDOTAMANHO}`
            const response = await axios.put(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.updateVinculoTamanhoCategoria:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putFornecedorFabricante(req, res) {
        try {
            const { error, value } = await atualizarFornecedorSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
            const response = await comprasService.updateFornecedorFabricante(
                value.IDFABRICANTEFORN,
                value.IDFABRICANTE,
                value.IDFORNECEDOR,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putFornecedorFabricante:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async postFornecedorFabricante(req, res) {
        try {
            const { error, value } = await criarFornecedorFabricanteSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
          
            const response = await comprasService.criarFornecedorFabricante(
                value.IDFABRICANTE,
                value.IDFORNECEDOR,
                value.STATIVO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.postFornecedorFabricante:", error);
            throw error;
        }
    }

    async putFornecedor(req, res) {
        try {
            const { error, value } = await atualizarFornecedorSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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
        
            const response = await comprasService.updateFornecedor(
                value.IDFORNECEDOR,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.MODPEDIDO,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO,
                value.IDCONDPAGPADRAO,
                value.IDTRANSPORTADORAPADRAO,
                value.TPPEDIDOPADRAO,
                value.NOVENDEDORPADRAO,
                value.TPFRETEPADRAO,
                value.TPARQUIVOPADRAO,
                value.TPFISCALPADRAO,
                value.EMAILVENDEDORPADRAO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putFornecedor:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putExcluirVinculoFornecedorFabricante(req, res) {
        let {  IDFABRICANTEFORNOCEDOR    } = req.query;

        if(!IDFABRICANTEFORNOCEDOR) {
            return res.status(400).json({ error: "IDFABRICANTEFORNOCEDOR is required" });
        }

        try {
                                    
            const apiUrl = `${url}/api/compras/del_vincfabforn.xsjs?IDFABRICANTEFORN=${IDFABRICANTEFORNOCEDOR}`
        
            const response = await axios.put(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.putExcluirVinculoFornecedor:", error);
            return res.status(500).json({ error: error.message });
        }
    }
   
    async putMigrarFornecedorSAP(req, res) {
        let {  IDFORNECEDOR    } = req.query;

        try {

            if(!IDFORNECEDOR) {
                return res.status(400).json({ error: "IDFORNECEDOR is required" });
            }

            const apiUrl = `${url}/api/service-layer/pedido-compra/por-codigo/fornecedor.xsjs?codFornecedor=${IDFORNECEDOR}`
        
            const response = await axios.put(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.putMigrarFornecedorSAP:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putAtualizarStatusPedido(req, res) {
        try {
            const { error, value } = await atualizarStatusPedidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateStatusPedido(
                value.IDRESUMOPEDIDO,
                value.IDANDAMENTO,
                value.IDRESPCANCELAMENTO,
                value.DSMOTIVOCANCELAMENTO,
                value.DTCANCELAMENTO,
                value.STCANCELADO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putAtualizarStatusPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putAtualizarStatusProdutoPedido(req, res) {
        try {

            const { error, value } = await atualizarStatusProdutoPedidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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

            const response = await comprasService.updateStatusProdutoPedido(
                value.IDDETALHEPEDIDO, 
                value.STCANCELADO, 
                value.IDRESPCANCELAMENTO, 
                value.TXTOBSCANCELAMENTO,
                value.IDRESUMOPEDIDO
            )
        

            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putAtualizarStatusProdutoPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putReativarPedido(req, res) {

        try {
            const { error, value } = await reativarPedidoSchema.validate(req.body, {
                abortEarly: false, 
                stripUnknown: true,
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


            const response = await comprasService.updateReativarPedido(
                value.IDRESUMOPEDIDO,   
                value.IDRESPREATIVACAO, 
                value.TXTMOTIVOREATIVACAO
            )
        
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putReativarPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putCancelarPedido(req, res) {
        try {

            const { error, value } = await cancelarPedidoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }

            const response = await comprasService.updateCancelarPedido(
                value.IDRESUMOPEDIDO,   
                value.IDANDAMENTO, 
                value.IDRESPCANCELAMENTO, 
                value.DSMOTIVOCANCELAMENTO, 
                value.DTCANCELAMENTO, 
                value.STCANCELADO
            )
        

            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putCancelarPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putFinalizarPedido(req, res) {
        try {
            const { error, value } = await atualizarFinalizandoPedidoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }
            
        
            const response = await comprasService.updateFinalizarPedido(
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
                value.IDRESUMOPEDIDO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putFinalizarPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putPedido(req, res) {
  
        try {
            const { error, value } = await atualizarPedidoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }

  
        
            const response = await comprasService.updatePedido(
                value.IDRESUMOPEDIDO,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
                value.STPEDIDOPORINTEMEDIARIO
            );
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putPedido:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putDistribuicaoComprasHistoricoADM(req, res) {

        try {

            const { error, value } = await atualizarDistribuicaoHistoricoADMSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }
            
        
            const response = await comprasService.updateDistribuicaoHistoricoADM(
                value.IDDISTRIBUICAOCOMPRASHISTORICO,
                value.IDPEDIDOCOMPRA,
                value.IDEMPRESA,
                value.IDFILIAL,
                value.CODBARRAS,
                value.QTDSUGESTAOALTERACAOHISTORICO,
                value.IDUSUARIOALTERACAO,
                value.FINALIZAR
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putDistribuicaoComprasHistoricoADM:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putDistribuicaoComprasHistorico(req, res) {

        try {

            const { error, value } = await atualizarDistribuicaoHistoricoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }
            
        
            const response = await comprasService.updateDistribuicaoHistorico(
                value.IDDISTRIBUICAOCOMPRASHISTORICO,
                value.IDPEDIDOCOMPRA,
                value.IDEMPRESA,
                value.IDFILIAL,
                value.CODBARRAS,
                value.QTDSUGESTAOALTERACAOHISTORICO,
                value.IDUSUARIOALTERACAO,
                value.FINALIZAR
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putDistribuicaoComprasHistorico:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putListaPedidos(req, res) {
        let { IDRESUMOPEDIDO } = req.query;

        if(!IDRESUMOPEDIDO) {
            return res.status(400).json({ error: "IDRESUMOPEDIDO is required" });
        }

        try {
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?idrespedido=${IDRESUMOPEDIDO}`
        
            const response = await axios.put(apiUrl, [{
                IDRESUMOPEDIDO,
            }]);
     
          
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.putListaPedidos:", error);
            throw error;
        }
    }

    async putDetalhePedido(req, res) {
        try {
            const { error, value } = await atualizarDetalhePedidoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }

          
            const response = await comprasService.updateDetalhePedido(
                value.idDetPedido,
                value.IDCOR,
                value.IDSUBGRUPOESTRUTURA,
                value.IDCATEGORIAPEDIDO,
                value.IDTIPOTECIDO,
                value.IDESTILO,
                value.IDFABRICANTE,
                value.IDLOCALEXPOSICAO,
                value.NUREF,
                value.DSPRODUTO,
                value.QTDTOTAL,
                value.NUCAIXA,
                value.UND,
                value.VRUNITBRUTO,
                value.DESC01,
                value.DESC02,
                value.DESC03,
                value.VRUNITLIQUIDO,
                value.VRVENDA,
                value.VRTOTAL,
                value.STECOMMERCE,
                value.STREDESOCIAL,
                value.VRCUSTOPRODATUAL,
                value.VRVENDAPRODATUAL,
                value.OBSPRODUTO,
                value.IDCATEGORIAS,
                value.STREPOSICAO,
                value.NUCODBARRAS,
                value.IDPRODUTO,
                value.IDRESPATUALIZACAO,
                value.GRADE,
                value.STPEDIDOPORINTEMEDIARIO
            );
     
          
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.putDetalhePedido:", error);
            throw error;
        }
    }

    // CREATE
    async postSubGrupoEstrutura(req, res) {
        let {
            IDGRUPOESTRUTURAANTIGA,
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/subgrupoestrutura.xsjs`
            const response = await axios.post(apiUrl, [{
                IDGRUPOESTRUTURAANTIGA,
                IDGRUPOESTRUTURA,
                DSSUBGRUPOESTRUTURA,
                DSSUBGRUPOESTRUTURAFIM,
                CODSUBGRUPOESTRUTURA,
                IDSUBGRUPOESTRUTURA,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.postGrupoEstrutura:", error);
            throw error;
        }
    }

    async postGrupoEstrutura(req, res) {
        let {
            DSGRUPOESTRUTURA,
            IDGRUPOEMPRESARIAL,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/grupoextrutura.xsjs`
            const response = await axios.post(apiUrl, {
                DSGRUPOESTRUTURA,
                IDGRUPOEMPRESARIAL,
                STATIVO
            });
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.postGrupoEstrutura:", error);
            throw error;
        }
    }

    async postCondicaoPagamento(req, res) {
        let  {
            IDCONDICAOPAGAMENTO,
            IDGRUPOEMPRESARIAL,
            DSCONDICAOPAG,
            STPARCELADO,
            NUPARCELAS,
            NUNDIA1PAG,
            NUNDIA2PAG,
            NUNDIA3PAG,
            NUNDIA4PAG,
            NUNDIA5PAG,
            NUNDIA6PAG,
            NUNDIA7PAG,
            NUNDIA8PAG,
            NUNDIA9PAG,
            NUNDIA10PAG,
            NUNDIA11PAG,
            NUNDIA12PAG,
            DTULTALTERACAO,
            QTDDIAS,
            DSTPDOCUMENTO,
            STATIVO,
            IDTPDOCUMENTO
        } = req.body;

        if(DSCONDICAOPAG == '') {
            return res.status(400).json({ error: "O campo 'DSCONDICAOPAG' é obrigatório e não pode estar vazio." });
        }

        if(STPARCELADO == '') {
            return res.status(400).json({ error: "O campo 'STPARCELADO' é obrigatório e não pode estar vazio." });
        }

        if(NUPARCELAS == '') {
            return res.status(400).json({ error: "O campo 'NUPARCELAS' é obrigatório e não pode estar vazio." });
        }

        try {
            const apiUrl = `${url}/api/compras/condicaopagamento.xsjs`
            const response = await axios.post(apiUrl, [{
                IDCONDICAOPAGAMENTO,
                IDGRUPOEMPRESARIAL,
                DSCONDICAOPAG,
                STPARCELADO,
                NUPARCELAS,
                NUNDIA1PAG,
                NUNDIA2PAG,
                NUNDIA3PAG,
                NUNDIA4PAG,
                NUNDIA5PAG,
                NUNDIA6PAG,
                NUNDIA7PAG,
                NUNDIA8PAG,
                NUNDIA9PAG,
                NUNDIA10PAG,
                NUNDIA11PAG,
                NUNDIA12PAG,
                DTULTALTERACAO,
                QTDDIAS,
                DSTPDOCUMENTO,
                STATIVO,
                IDTPDOCUMENTO
            }]);
        
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.createCondicaoPagamento:", error);
            throw error;
        }
    }

    async postUnidadeMedida(req, res) {
        let {
            DSUNIDADE,
            DSSIGLA,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/unidadesdemedidas.xsjs`
            const response = await axios.post(apiUrl, [{
                DSUNIDADE,
                DSSIGLA,
                DTCADASTRO,
                DTULTATUALIZACAO,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async postCores(req, res) {
        let  {
            IDGRUPOCOR,
            DSCOR,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/cores.xsjs`
            const response = await axios.post(apiUrl, [{
                IDGRUPOCOR,
                DSCOR,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("erro ComprasController.postCores:", error);
            throw error;
        }
    }

    async postEstilos(req, res) {
        try {
            const { error, value } = await criarEstiloSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }


            // let { DSESTILO, IDGRUPOESTRUTURA, STATIVO, IDESTILO, IDGRUPOESTRUTURAANTIGA, IDVINCESTILOSESTRUTURA } = req.body;
            // const apiUrl = `${url}/api/compras/estilos.xsjs`

            const response = await comprasService.createEstilo(
                value.IDGRUPOESTRUTURAANTIGA,
                value.IDVINCESTILOSESTRUTURA,
                value.IDESTILO,
                value.DSESTILO,
                value.IDGRUPOESTRUTURA,
                value.STATIVO,
            );
         
            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ComprasController.postEstilos:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async createTipoTecidos(req, res) {
        let {
            DSTIPOTECIDO,
            STATIVO,
            IDFUNCIONARIO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/tipotecidos.xsjs`
            const response = await axios.post(apiUrl, [{
                DSTIPOTECIDO,
                STATIVO,
                IDFUNCIONARIO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("erro no ComprasControllers.createTipoTecidos:", error);
            throw error;
        }
    }

    async postCategoriaPedidos(req, res) {
        let {
            IDCATEGORIAPEDIDO,
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/categoriapedidos.xsjs`
            const response = await axios.post(apiUrl, [{
                IDCATEGORIAPEDIDO,
                DSCATEGORIAPEDIDO,
                TIPOPEDIDO,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("error ComprasController.postCategoriaPedidos:", error);
            throw error;
        }
    }

    async postVinculoCategoriaPedido(req, res) {
        let {
            IDCATEGORIAPEDIDO,
            IDTAMANHO,
            STATIVO
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/vinctamcat.xsjs`
            const response = await axios.post(apiUrl, {
                IDCATEGORIAPEDIDO,
                IDTAMANHO,
                STATIVO
            });
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.postVinculoCategoriaPedido:", error);
            throw error;
        }
    }

    async postCadastroTransportador(req, res) {
        let {
            IDTRANSPORTADORA,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        } = req.body;

        if(!NUCNPJ) {
            return res.status(400).json({ error: "O campo 'NUCNPJ' é obrigatório e não pode estar vazio." });
        }
        try {
            const apiUrl = `${url}/api/compras/transportador.xsjs`
            const response = await axios.post(apiUrl, [{
                IDTRANSPORTADORA,
                IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL,
                NORAZAOSOCIAL,
                NOFANTASIA,
                NUCNPJ,
                NUINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUIBGE,
                EENDERECO,
                ENUMERO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                NUCEP,
                EEMAIL,
                NUTELEFONE1,
                NUTELEFONE2,
                NUTELEFONE3,
                NOREPRESENTANTE,
                DTCADASTRO,
                DTULTATUALIZACAO,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("Error no ComprasCOntrollers.postCadastroTransportador:", error);
            throw error;
        }
    }

    async postFabricante(req, res) {
        let {
            IDFABRICANTE,
            DSFABRICANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
        } = req.body;

        if(!DSFABRICANTE) {
            return res.status(400).json({ error: "O campo 'DSFABRICANTE' é obrigatório e não pode estar vazio." });
        }

        try {
            const apiUrl = `${url}/api/compras/fabricante.xsjs`
            const response = await axios.post(apiUrl, [{
                IDFABRICANTE,
                DSFABRICANTE,
                DTCADASTRO,
                DTULTATUALIZACAO,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFabricanteFornecedor:", error);
            throw error;
        }
    }

    async postMigrarFabricanteSap(req, res) {
        let {
            codFabricante
        } = req.query;

        try {
            const apiUrl = `${url}/api/service-layer/pedido-compra/por-codigo/fabricante.xsjs?codFabricante=${codFabricante}`
            const response = await axios.post(apiUrl, {
                codFabricante,
            });
            console.log(response.data,'response.data');
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postMigrarFabricanteSap:", error);
            throw error;
        }
    }

    async postFabricanteFornecedor(req, res) {
        let {
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/fabricante-fornecedor.xsjs`
            const response = await axios.post(apiUrl, {
                IDFABRICANTE,
                IDFORNECEDOR,
                STATIVO
            });
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFabricanteFornecedor:", error);
            throw error;
        }
    }

    async postFornecedor(req, res) {
        let {
            IDFORNECEDOR,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            MODPEDIDO,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
            IDCONDPAGPADRAO,
            IDTRANSPORTADORAPADRAO,
            TPPEDIDOPADRAO,
            NOVENDEDORPADRAO,
            TPFRETEPADRAO,
            TPARQUIVOPADRAO,
            TPFISCALPADRAO,
            EMAILVENDEDORPADRAO,
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/fornecedor.xsjs`
            const response = await axios.post(apiUrl, [{
                IDFORNECEDOR,
                IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL,
                MODPEDIDO,
                NORAZAOSOCIAL,
                NOFANTASIA,
                NUCNPJ,
                NUINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUIBGE,
                EENDERECO,
                ENUMERO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                NUCEP,
                EEMAIL,
                NUTELEFONE1,
                NUTELEFONE2,
                NUTELEFONE3,
                NOREPRESENTANTE,
                DTCADASTRO,
                DTULTATUALIZACAO,
                STATIVO,
                IDCONDPAGPADRAO,
                IDTRANSPORTADORAPADRAO,
                TPPEDIDOPADRAO,
                NOVENDEDORPADRAO,
                TPFRETEPADRAO,
                TPARQUIVOPADRAO,
                TPFISCALPADRAO,
                EMAILVENDEDORPADRAO,
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFornecedor:", error);
            throw error;
        }
    }

    async postImagemProduto(req, res) {
        let {
            IDRESUMOPEDIDO,
            NUREF,
            IMAGEM,
            STATIVO,
            IDPRODIMAGEM
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/imagemproduto.xsjs`
            const response = await axios.post(apiUrl, [{
                IDRESUMOPEDIDO,
                NUREF,
                IMAGEM,
                STATIVO,
                IDPRODIMAGEM
                
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postImagemProduto:", error);
            throw error;
        }
    }
    

    async postFinalizarPedido(req, res) {
        let {  
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO,
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/finalizar-pedido.xsjs`
        
            const response = await axios.post(apiUrl, {
                IDRESUMOPEDIDO,
                IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL,
                IDCOMPRADOR,
                IDCONDICAOPAGAMENTO,
                IDFORNECEDOR,
                IDTRANSPORTADORA,
                IDANDAMENTO,
                MODPEDIDO,
                NOVENDEDOR,
                EEMAILVENDEDOR,
                DTPEDIDO,
                DTPREVENTREGA,
                TPFRETE,
                DESCPERC01,
                DESCPERC02,
                DESCPERC03,
                PERCCOMISSAO,
                VRTOTALLIQUIDO,
                OBSPEDIDO,
                OBSPEDIDO2,
                DTFECHAMENTOPEDIDO,
                DTCADASTRO,
                TPARQUIVO,
                STDISTRIBUIDO,
                STAGRUPAPRODUTO,
                STCANCELADO,
                TPFISCAL,
                STRASCUNHO,
            });
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFinalizarPedido:", error);
            throw error;
        }
    }

    async postPedido(req, res) {
        let {  
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO,
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs`
        
            const response = await axios.post(apiUrl, [{
                IDRESUMOPEDIDO,
                IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL,
                IDCOMPRADOR,
                IDCONDICAOPAGAMENTO,
                IDFORNECEDOR,
                IDTRANSPORTADORA,
                IDANDAMENTO,
                MODPEDIDO,
                NOVENDEDOR,
                EEMAILVENDEDOR,
                DTPEDIDO,
                DTPREVENTREGA,
                TPFRETE,
                DESCPERC01,
                DESCPERC02,
                DESCPERC03,
                PERCCOMISSAO,
                VRTOTALLIQUIDO,
                OBSPEDIDO,
                OBSPEDIDO2,
                DTFECHAMENTOPEDIDO,
                DTCADASTRO,
                TPARQUIVO,
                STDISTRIBUIDO,
                STAGRUPAPRODUTO,
                STCANCELADO,
                TPFISCAL,
                STRASCUNHO,
            }]);
     
          
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFinalizarPedido:", error);
            throw error;
        }
    }

    async postDetalhePedido(req, res) {
        try {
            const { error, value } = await criarDetalhePedidoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });  
            }

        
            const response = await comprasService.createDetalhePedido(
                value.IDRESUMOPEDIDO,
                value.IDCOR,
                value.IDSUBGRUPOESTRUTURA,
                value.IDCATEGORIAPEDIDO,
                value.IDTIPOTECIDO,
                value.IDESTILO,
                value.IDFABRICANTE,
                value.IDLOCALEXPOSICAO,
                value.NUREF,
                value.DSPRODUTO,
                value.QTDTOTAL,
                value.NUCAIXA,
                value.UND,
                value.VRUNITBRUTO,
                value.DESC01,
                value.DESC02,
                value.DESC03,
                value.VRUNITLIQUIDO,
                value.VRVENDA,
                value.VRTOTAL,
                value.STRECEBIDO,
                value.STECOMMERCE,
                value.STREDESOCIAL,
                value.STCANCELADO,
                value.VRCUSTOPRODATUAL,
                value.VRVENDAPRODATUAL,
                value.OBSPRODUTO,
                value.STTRANSFORMADO,
                value.IDCATEGORIAS,
                value.STREPOSICAO,
                value.NUCODBARRAS,
                value.IDPRODUTO,
                value.IDRESPCADASTRO,
                value.GRADE,
                value.STPEDIDOPORINTEMEDIARIO
            );
     
          
            return res.status(200).json(response);
        } catch (error) {
            console.error("error no ComprasControllers.postDetalhePedido:", error);
            throw error;
        }
    }

    async postClonarPedido(req, res) {
        let {  
          IDRESUMOPEDIDOCLONAR,
          IDRESPCADASTRO
        } = req.body;

        try {

            if(!IDRESUMOPEDIDOCLONAR) {
                return res.status(400).json({ error: "O campo 'IDRESUMOPEDIDOCLONAR' é obrigatório e não pode estar vazio." });
            }
            
            const apiUrl = `${url}/api/compras/clonar_pedidos.xsjs`
        
            const response = await axios.post(apiUrl, [{
                IDRESUMOPEDIDOCLONAR,
                IDRESPCADASTRO
            }]);
     
          
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postClonarPedido:", error);
            throw error;
        }
    }

}

export default new ComprasControllers();


// 2580 linhas antes da refatoração
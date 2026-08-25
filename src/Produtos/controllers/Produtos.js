import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
import schemaCriarAlteracaoPrecoProduto from "../schema/criarAlteracaoPrecoProduto.js";
import schemaAtualizarAlteracaoPrecoProduto from "../schema/atualizarAlteracaoPrecoProduto.js";
import schemaAtualizarProdutoAvulso from "../schema/atualizarProdutoAvulso.js";
import schemaCriarProdutoAvulso from "../schema/criarProdutoAvulso.js";
import { ProdutosClient } from "../client/index.js";
import { ProdutosServices } from "../service/index.js";

const url = process.env.API_URL;
const produtosClient = new ProdutosClient(url);
const produtosServices = new ProdutosServices(produtosClient);

class ProdutoControllers {

    async getListaPedidos(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idFornPesquisa, idMarcaPesquisa, NuPedidoPesquisa, idFabPesquisa, idCompradorPesq, STSituacoPedidoPesq, page, pageSize } = req.query;

        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        idFornPesquisa = idFornPesquisa ? idFornPesquisa : '';
        idMarcaPesquisa = idMarcaPesquisa ? idMarcaPesquisa : '';
        NuPedidoPesquisa = NuPedidoPesquisa ? NuPedidoPesquisa : '';
        idFabPesquisa = idFabPesquisa ? idFabPesquisa : '';
        idCompradorPesq = idCompradorPesq ? idCompradorPesq : '';
        STSituacoPedidoPesq = STSituacoPedidoPesq ? STSituacoPedidoPesq : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?&page=${page}&pageSize=${pageSize}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornPesquisa}&idMarcaPesquisa=${idMarcaPesquisa}&idpedido=${NuPedidoPesquisa}&idFabPesquisa=${idFabPesquisa}&idCompradorPesquisa=${idCompradorPesq}&stSituacaoSAP=${STSituacoPedidoPesq}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaParceiroNegocio(req, res) {
        let { page, pageSize } = req.query;

        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produto-sap/parceiro-negocio.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosLojaQuality(req, res) {
        let { descricaoProduto, idEmpresa, idListaLoja, codBarrasOuNome, page, pageSize } = req.query;


        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idListaLoja = idListaLoja ? idListaLoja : '';
        codBarrasOuNome = codBarrasOuNome ? codBarrasOuNome : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/produto-sap/produto-quality.xsjs?codeBarsOuNome=${codBarrasOuNome}&IdEmpresaLoja=${idEmpresa}&IdListaLoja=${idListaLoja}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosPrecoInformatica(req, res) {
        let { idEmpresa, dsProduto, page, pageSize } = req.query;


        dsProduto = dsProduto ? dsProduto : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/informatica/produto-preco.xsjs?idEmpresa=${idEmpresa}&dsProduto=${dsProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosInformaticaQuality(req, res) {
        let {

            descricaoProduto,
            idEmpresa,
            idListaEmpresa,
        } = req.query;


        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idListaEmpresa = idListaEmpresa ? idListaEmpresa : '';

        try {
            const apiUrl = `${url}/api/produto-sap/produto-quality.xsjs?codeBarsOuNome=${descricaoProduto}&IdEmpresaLoja=${idEmpresa}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosLojaSap(req, res) {
        let { descricaoProduto, idEmpresaLogin, idListaLoja, page, pageSize } = req.query;


        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
        idListaLoja = idListaLoja ? idListaLoja : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        try {

            const apiUrl = `${url}/api/produto-sap/produto-sap.xsjs?page=${page}&pageSize=${pageSize}&codeBarsOuNome=${descricaoProduto}&IdEmpresaLoja=${idEmpresaLogin}&IdListaLoja=${idListaLoja}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutos(req, res) {
        let { idEmpresa, idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/produto.xsjs?idEmpresa=${idEmpresa}&byId=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no ProdutoControllers getListaProdutos:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaGrade(req, res) {
        let { idGrupo } = req.query;
        idGrupo = idGrupo ? idGrupo : '';

        try {
            const apiUrl = `${url}/api/produto-sap/grade.xsjs?idgrupograde=${idGrupo}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaGrupoProdutoSap(req, res) {
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

    async ListaProdutosEtiqueta(req, res) {
        let { idEmpresa } = req.query;

        try {

            const apiUrl = `${url}/api/produtos/listas-de-precos-SAP.xsjs?page=1`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaResponsavelAlteracaoPreco(req, res) {
        let { idEmpresa } = req.query;

        try {

            const apiUrl = `${url}/api/produtos/responsaveis-alteracoes-de-precos.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaAlteracaoPrecoResumo(req, res) {
        let { idResumoAlteracao, dataPesquisaInicio, dataPesquisaFim, id, idLista, idLoja, idUsuario, idProduto, descProduto, codBarras, page, pageSize } = req.query;
        idResumoAlteracao = idResumoAlteracao ? idResumoAlteracao : '';
        idLoja = idLoja ? idLoja : '';
        idLista = idLista ? idLista : '';
        idUsuario = idUsuario ? idUsuario : '';
        idProduto = idProduto ? idProduto : '';
        codBarras = codBarras ? codBarras : '';
        descProduto = descProduto ? descProduto : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/produtos/alteracoes-de-precos-resumo.xsjs?dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&id=${idResumoAlteracao}&idLista=${idLista}&idLoja=${idLoja}&idUser=${idUsuario}&idProd=${idProduto}&descProd=${descProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaAlteracaoPrecoDetalhe(req, res) {
        let { idAlteracaoPreco, page, pageSize } = req.query;

        idAlteracaoPreco = idAlteracaoPreco ? idAlteracaoPreco : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/produtos/alteracoes-de-precos-detalhes.xsjs?idAlteracao=${idAlteracaoPreco}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async ListaProdutosEtiquetagem(req, res) {
        let { idLista, idProduto, descricao, codBarras, page, pageSize } = req.query;

        idLista = idLista ? idLista : '';
        idProduto = idProduto ? idProduto : '';
        descricao = descricao ? descricao : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produtos/lista-produtos-etiqueta-SAP.xsjs?idLista=${idLista}&id=${idProduto}&descProd=${descricao}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
           
            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no ProdutoControllers.ListaProdutosEtiquetagem:", error);
            throw error;
        }
    }

    async getProdutosEstruturaMercadologica(req, res) {
        let { dsGrupoEstrutura, page, pageSize } = req.query;

        dsGrupoEstrutura = dsGrupoEstrutura ? dsGrupoEstrutura : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produtos/grupo-estrutura-mercadologica.xsjs?dsGrupoEstrutura=${dsGrupoEstrutura}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
           
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ProdutoControllers.getProdutosEstruturaMercadologica:", error);
            throw error;
        }
    }

    async getProdutosSubGrupoEstruturaMercadologica(req, res) {
        let { idSubGrupo, page, pageSize } = req.query;

        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produtos/subgrupo-estrutura-mercadologica.xsjs?idsGrpEstruturas=${idSubGrupo}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
     
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ProdutoControllers.getProdutosSubGrupoEstruturaMercadologica:", error);
            throw error;
        }
    }

    async getListaProdutosCadastradosAvulso(req, res) {
        let { idProduto, nomeProduto, codBarras, dataPesquisaInicio, dataPesquisaFim, stAtivo, nomeCodBarras, page, pageSize } = req.query;

        idProduto = idProduto ? idProduto : '';
        nomeProduto = nomeProduto ? nomeProduto : '';
        codBarras = codBarras ? codBarras : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        stAtivo = stAtivo ? stAtivo : '';
        nomeCodBarras = nomeCodBarras ? nomeCodBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produtos/produto.xsjs?id=${idProduto}&nome=${nomeProduto}&codBarras=${codBarras}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&stAtivo=${stAtivo}&NomeOuCodBarras=${nomeCodBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
     
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ProdutoControllers.getProdutosSubGrupoEstruturaMercadologica:", error);
            throw error;
        }
    }

    async getListaProdutosParaAlterar(req, res) {
        let { 
            dataPesquisaInicio,
            dataPesquisaFim, 
            idProduto,
            idEmpresa, 
            idGrupoEmpresarial, 
            codBarras, 
            descricaoProduto,
            idGrupoEstrutura,
            idSubGrupo,
            precoInicial,
            precoFinal,
            page, 
            pageSize 
        } = req.query;

        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        idProduto = idProduto ? idProduto : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        codBarras = codBarras ? codBarras : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        idGrupoEstrutura = idGrupoEstrutura ? idGrupoEstrutura : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        precoInicial = precoInicial ? precoInicial : '';
        precoFinal = precoFinal ? precoFinal : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/produtos/busca-produtos-para-alterar.xsjs?dtCadProdInicio=${dataPesquisaInicio}&dtCadProdFim=${dataPesquisaFim}&id=${idProduto}&idEmpresa=${idEmpresa}&idGrupoEmpresarial=${idGrupoEmpresarial}&codeBars=${codBarras}&descProd=${descricaoProduto}&idGrpEstrutura=${idGrupoEstrutura}&idsSubgrpEstrutura=${idSubGrupo}&precoInicial=${precoInicial}&precoFinal=${precoFinal}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ProdutoControllers.getProdutosSubGrupoEstruturaMercadologica:", error);
            throw error;
        }
    }

    async putAlteracoesPrecoProduto(req, res) {

        try {
            const { error, value } = schemaAtualizarAlteracaoPrecoProduto.validate(req.body, {
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

            const response = await produtosServices.updateAlteracoesPrecoProduto({
                IDRESUMOALTERACAOPRECO: value.IDRESUMOALTERACAOPRECO,
                STAGENDAMENTOIMEDIATO: value.STAGENDAMENTOIMEDIATO,
                STAGENDAMENTOPERSONALIZADO: value.STAGENDAMENTOPERSONALIZADO,
                DTAGENDAMENTOPERSONALIZADO: value.DTAGENDAMENTOPERSONALIZADO,
                STATIVO: value.STATIVO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("erro no ProdutoControllers  putAlteracoesPrecoProduto:", error);
            res.status(500).json({ error: 'Erro ao atualizar alteração de preço' });
            throw error;
        }
    }

    async putProdutoAvulso(req, res) {

        try {
            const { error, value } = schemaAtualizarProdutoAvulso.validate(req.body, {

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

            const response = await produtosServices.updateProdutoAvulso({
                IDPRODUTO: value.IDPRODUTO,
                DSNOME: value.DSNOME,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                NUNCM: value.NUNCM,
                IDUND: value.IDUND,
                UND: value.UND,
                PRECOCUSTO: value.PRECOCUSTO,
                PRECOVENDA: value.PRECOVENDA,
                IDSUBGRUPO: value.IDSUBGRUPO,
                IDFABRICANTE: value.IDFABRICANTE,
                IDFORNECEDOR: value.IDFORNECEDOR,
                NUREFERENCIA: value.NUREFERENCIA,
                IDCOR: value.IDCOR,
                IDTAMANHO: value.IDTAMANHO,
                IDCATEGORIAPEDIDO: value.IDCATEGORIAPEDIDO,
                IDTIPOTECIDO: value.IDTIPOTECIDO,
                IDESTILO: value.IDESTILO,
                IDLOCALEXPOSICAO: value.IDLOCALEXPOSICAO,
                IDCATEGORIAS: value.IDCATEGORIAS,
                IDTIPOPRODUTOFISCAL: value.IDTIPOPRODUTOFISCAL,
                IDFONTEPRODUTOFISCAL: value.IDFONTEPRODUTOFISCAL,
                STECOMMERCE: value.STECOMMERCE,
                STREDESOCIAL: value.STREDESOCIAL
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("erro no ProdutoControllers  putProdutoAvulso:", error);
            res.status(500).json({ error: 'Erro ao atualizar produto avulso' });
            throw error;
        }
    }

    async postProdutoAvulso(req, res) {

        try {
            const { error, value } = schemaCriarProdutoAvulso.validate(req.body, {

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

            const response = await produtosServices.createProdutoAvulso({
                DSNOME: value.DSNOME,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                NUNCM: value.NUNCM,
                IDUND: value.IDUND,
                UND: value.UND,
                PRECOCUSTO: value.PRECOCUSTO,
                PRECOVENDA: value.PRECOVENDA,
                IDSUBGRUPO: value.IDSUBGRUPO,
                IDFABRICANTE: value.IDFABRICANTE,
                IDFORNECEDOR: value.IDFORNECEDOR,
                NUREFERENCIA: value.NUREFERENCIA,
                IDCOR: value.IDCOR,
                IDTAMANHO: value.IDTAMANHO,
                IDCATEGORIAPEDIDO: value.IDCATEGORIAPEDIDO,
                IDTIPOTECIDO: value.IDTIPOTECIDO,
                IDESTILO: value.IDESTILO,
                IDLOCALEXPOSICAO: value.IDLOCALEXPOSICAO,
                IDCATEGORIAS: value.IDCATEGORIAS,
                IDTIPOPRODUTOFISCAL: value.IDTIPOPRODUTOFISCAL,
                IDFONTEPRODUTOFISCAL: value.IDFONTEPRODUTOFISCAL,
                STECOMMERCE: value.STECOMMERCE,
                STREDESOCIAL: value.STREDESOCIAL
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("erro no ProdutoControllers  postProdutoAvulso:", error);
            res.status(500).json({ error: 'Erro ao cadastrar produto avulso' });
            throw error;
        }
    }

    async postAlteracoesPrecoProduto(req, res) {

        try {
            const { error, value } = schemaCriarAlteracaoPrecoProduto.validate(req.body, {

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

            const response = await produtosServices.createAlteracoesPrecoProduto({
                IDPRODUTO: value.IDPRODUTO,
                IDEMPRESA: value.IDEMPRESA,
                IDLISTAPRECO: value.IDLISTAPRECO,
                PRECOVENDAANTIGO: value.PRECOVENDAANTIGO,
                PRECOVENDANOVO: value.PRECOVENDANOVO,
                IDUSER: value.IDUSER,
                STAGENDAMENTOPADRAO: value.STAGENDAMENTOPADRAO,
                STAGENDAMENTOIMEDIATO: value.STAGENDAMENTOIMEDIATO,
                STAGENDAMENTOPERSONALIZADO: value.STAGENDAMENTOPERSONALIZADO,
                DTAGENDAMENTOPERSONALIZADO: value.DTAGENDAMENTOPERSONALIZADO
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("erro no ProdutoControllers  putAlteracoesPrecoProduto:", error);
            res.status(500).json({ error: 'Erro ao cadastrar alteração de preço' });
            throw error;
        }
    }

}

export default new ProdutoControllers();

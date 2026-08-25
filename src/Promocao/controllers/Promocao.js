import axios from "axios";
import 'dotenv/config';
import { PromocaoClient } from '../client/index.js';
import { PromocaoService } from '../service/index.js';
import updatePromocaoSchema from '../schema/updatePromocao.js';
import updateProdutoDestinoPromocaoSchema from '../schema/updateProdutoDestinoPromocao.js';
import updateProdutoOrigemPromocaoSchema from '../schema/updateProdutoOrigemPromocao.js';
import updateEmpresaPromocaoSchema from '../schema/updateEmpresaPromocao.js';
import updateStatusPromocaoSchema from '../schema/updateStatusPromocao.js';
import updatePromocaoSubGrupoSchema from '../schema/updatePromocaoSubGrupo.js';
import updatePromocaoProdutoSubGrupoSchema from '../schema/updatePromocaoProdutoSubGrupo.js';
import createListaProdutosPromocaoSchema from '../schema/createListaProdutosPromocao.js';
import createPromocaoSchema from '../schema/createPromocao.js';
import createPromocaoSubGrupoSchema from '../schema/createPromocaoSubGrupo.js';
import createPromocaoProdutoSubGrupoSchema from '../schema/createPromocaoProdutoSubGrupo.js';
import createMecanicaSchema from '../schema/createMecanica.js';

const url = process.env.API_URL;
const promocaoClient = new PromocaoClient(url);
const promocaoService = new PromocaoService(promocaoClient);

class PromocaoControllers {

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
        } catch (error) {
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
        } catch (error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error;
        }
    }

    async getListaDetalhesPromocoesAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/promocoes-ativas/detalhe-promocao-ativa.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;

            const response = await axios.get(apiUrl) 

            return res.json(response.data);
        } catch (error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error;
        }
    }

    async getListaProdutosPromocoesAtiva(req, res) {
        let { idEmpresa, idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-ativa.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaProdutosDestinoPromocoesAtiva(req, res) {
        let { idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-destino.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;

            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosDestinoPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaProdutosOrigemPromocoesAtiva(req, res) {
        let { idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-origem.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosOrigemPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaEmpresasPromocoesAtiva(req, res) {
        let { idResumoPromocao, page, pageSize } = req.query;
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/empresa-promocao.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaEmpresasPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar empresas." });
        }
    }

    async getListaProdutoSubGrupo(req, res) {
        let { idSubGrupo, dsProduto, codBarras, page, pageSize } = req.query;
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-subGrupo.xsjs?idSubGrupo=${idSubGrupo}&dsProduto=${dsProduto}&codBarra=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutoSubGrupo:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos por subgrupo." });
        }
    }

    async putPromocao(req, res) {
        try {
            const { error, value } = updatePromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updatePromocao({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                IDMECANICARESUMOPROMOCAOMARKETING: value.IDMECANICARESUMOPROMOCAOMARKETING,
                TPAPARTIRDE: value.TPAPARTIRDE,
                TPAPLICADOA: value.TPAPLICADOA,
                TPFATORPROMO: value.TPFATORPROMO,
                APARTIRDEQTD: value.APARTIRDEQTD,
                APARTIRDOVLR: value.APARTIRDOVLR,
                FATORPROMOVLR: value.FATORPROMOVLR,
                FATORPROMOPERC: value.FATORPROMOPERC,
                VLPRECOPRODUTO: value.VLPRECOPRODUTO,
                DTHORAINICIO: value.DTHORAINICIO,
                DTHORAFIM: value.DTHORAFIM,
                DSPROMOCAOMARKETING: value.DSPROMOCAOMARKETING,
                IDPRODUTO: value.IDPRODUTO,
                STATIVO: value.STATIVO,
                STEMPRESAPROMO: value.STEMPRESAPROMO,
                STDETPROMOORIGEM: value.STDETPROMOORIGEM,
                STDETPROMODESTINO: value.STDETPROMODESTINO,
                IDEMPRESA: value.IDEMPRESA,
                IDGRUPOEMDESTINO: value.IDGRUPOEMDESTINO,
                IDSUBGRUPOEMDESTINO: value.IDSUBGRUPOEMDESTINO,
                IDMARCAEMDESTINO: value.IDMARCAEMDESTINO,
                IDFORNECEDOREMDESTINO: value.IDFORNECEDOREMDESTINO,
                IDPRODUTODESTINO: value.IDPRODUTODESTINO,
                IDGRUPOEMORIGEM: value.IDGRUPOEMORIGEM,
                IDSUBGRUPOEMORIGEM: value.IDSUBGRUPOEMORIGEM,
                IDMARCAEMORIGEM: value.IDMARCAEMORIGEM,
                IDFORNECEDOREMORIGEM: value.IDFORNECEDOREMORIGEM,
                IDPRODUTOORIGEM: value.IDPRODUTOORIGEM
            });


            return res.status(200).json({
                message: "Promoção atualizada com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro ao atualizar promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar promoção." });
        }
    }
    
    async putProdutoDestinoPromocao(req, res) {
        try {
            const { error, value } = updateProdutoDestinoPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateProdutoDestinoPromocao({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                STATIVO: value.STATIVO,
                IDPRODUTODESTINO: value.IDPRODUTODESTINO
            });

            return res.status(200).json({
                message: "Produto Destino da Promoção atualizada com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro ao atualizar Produto Destino da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Produto Destino da Promoção." });
        }
    }

    async putProdutoOrigemPromocao(req, res) {
        try {
            const { error, value } = updateProdutoOrigemPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateProdutoOrigemPromocao({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                STATIVO: value.STATIVO,
                IDPRODUTOORIGEM: value.IDPRODUTOORIGEM
            });

            return res.status(200).json({
                message: "Produto Origem da Promoção atualizada com sucesso",
                data: response
            });

        } catch (error) {
            console.error("Erro ao atualizar Produto Origem da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Produto Origem da Promoção." });
        }
    }

    async putEmpresaPromocao(req, res) {
        try {
            const { error, value } = updateEmpresaPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateEmpresaPromocao({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                STATIVO: value.STATIVO,
                IDEMPRESA: value.IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING: value.IDEMPRESAPROMOCAOMARKETING
            });

            return res.status(200).json({
                message: "Empresa da Promoção atualizada com sucesso",
                data: response
            });

        } catch (error) {
            console.error("Erro ao atualizar Empresa da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Empresa da Promoção." });
        }
    }

    async putStatusPromocao(req, res) {
        try {
            const { error, value } = updateStatusPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateStatusPromocao({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                STATIVO: value.STATIVO,
                IDEMPRESA: value.IDEMPRESA,
                IDEMPRESAPROMOCAOMARKETING: value.IDEMPRESAPROMOCAOMARKETING
            });

            return res.status(200).json({
                message: "Empresa da Promoção atualizada com sucesso",
                data: response
            });

        } catch (error) {
            console.error("Erro ao atualizar Empresa da Promoção:", error);
            return res.status(500).json({ error: "Erro ao atualizar Empresa da Promoção." });
        }
    }

    async putPromocaoSubGrupo(req, res) {
        try {
            const { error, value } = updatePromocaoSubGrupoSchema.validate(req.body, {
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

            const response = await promocaoService.updatePromocaoSubGrupo({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                IDMECANICARESUMOPROMOCAOMARKETING: value.IDMECANICARESUMOPROMOCAOMARKETING,
                TPAPARTIRDE: value.TPAPARTIRDE,
                TPAPLICADOA: value.TPAPLICADOA,
                TPFATORPROMO: value.TPFATORPROMO,
                APARTIRDEQTD: value.APARTIRDEQTD,
                APARTIRDOVLR: value.APARTIRDOVLR,
                FATORPROMOVLR: value.FATORPROMOVLR,
                FATORPROMOPERC: value.FATORPROMOPERC,
                VLPRECOPRODUTO: value.VLPRECOPRODUTO,
                DTHORAINICIO: value.DTHORAINICIO,
                DTHORAFIM: value.DTHORAFIM,
                DSPROMOCAOMARKETING: value.DSPROMOCAOMARKETING,
                IDEMPRESA: value.IDEMPRESA,
                STATIVO: value.STATIVO,
                STEMPRESAPROMO: value.STEMPRESAPROMO,
                STDETPROMOORIGEM: value.STDETPROMOORIGEM,
                STDETPROMODESTINO: value.STDETPROMODESTINO,
                IDSUBGRUPOEMDESTINO: value.IDSUBGRUPOEMDESTINO,
                IDSUBGRUPOEMORIGEM: value.IDSUBGRUPOEMORIGEM
            });

            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro no PromocaoControllers putPromocaoSubGrupo:", error);
            throw error;
        }
    }

    async putPromocaoProdutoSubGrupo(req, res) {
        try {
            const { error, value } = updatePromocaoProdutoSubGrupoSchema.validate(req.body, {
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

            const response = await promocaoService.updatePromocaoProdutoSubGrupo({
                IDRESUMOPROMOCAOMARKETING: value.IDRESUMOPROMOCAOMARKETING,
                DSPROMOCAOMARKETING: value.DSPROMOCAOMARKETING,
                DTHORAINICIO: value.DTHORAINICIO,
                DTHORAFIM: value.DTHORAFIM,
                TPAPLICADOA: value.TPAPLICADOA,
                APARTIRDEQTD: value.APARTIRDEQTD,
                APARTIRDOVLR: value.APARTIRDOVLR,
                TPFATORPROMO: value.TPFATORPROMO,
                FATORPROMOVLR: value.FATORPROMOVLR,
                FATORPROMOPERC: value.FATORPROMOPERC,
                TPAPARTIRDE: value.TPAPARTIRDE,
                VLPRECOPRODUTO: value.VLPRECOPRODUTO,
                STEMPRESAPROMO: value.STEMPRESAPROMO,
                STDETPROMOORIGEM: value.STDETPROMOORIGEM,
                STDETPROMODESTINO: value.STDETPROMODESTINO,
                STATIVO: value.STATIVO,
                STPRODUTO: value.STPRODUTO,
                STESTRUTURA: value.STESTRUTURA,
                STESTRUTURAPRODUTO: value.STESTRUTURAPRODUTO,
                IDEMPRESA: value.IDEMPRESA,
                IDPRODUTO: value.IDPRODUTO,
                detalhesDestino: value.detalhesDestino,
                detalhesOrigem: value.detalhesOrigem
            });

            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro no PromocaoControllers putPromocaoProdutoSubGrupo:", error);
            throw error;
        }
    }

    async postListaProdutosPromocoesAtiva(req, res) {

        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];
            const { error, value } = createListaProdutosPromocaoSchema.validate(dados, {
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

            const response = await promocaoService.createListaProdutosPromocao({ dados: value });


            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async postPromocao(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];
            const { error, value } = createPromocaoSchema.validate(dados, {
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

            const response = await promocaoService.createPromocao({ dados: value });

            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postPromocaoSubGrupo(req, res) {
        try {
            const { error, value } = createPromocaoSubGrupoSchema.validate(req.body, {
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

            const response = await promocaoService.createPromocaoSubGrupo({
                TPAPARTIRDE: value.TPAPARTIRDE,
                TPAPLICADOA: value.TPAPLICADOA,
                TPFATORPROMO: value.TPFATORPROMO,
                APARTIRDEQTD: value.APARTIRDEQTD,
                APARTIRDOVLR: value.APARTIRDOVLR,
                FATORPROMOVLR: value.FATORPROMOVLR,
                FATORPROMOPERC: value.FATORPROMOPERC,
                VLPRECOPRODUTO: value.VLPRECOPRODUTO,
                DTHORAINICIO: value.DTHORAINICIO,
                DTHORAFIM: value.DTHORAFIM,
                DSPROMOCAOMARKETING: value.DSPROMOCAOMARKETING,
                IDEMPRESA: value.IDEMPRESA,
                STATIVO: value.STATIVO,
                STEMPRESAPROMO: value.STEMPRESAPROMO,
                STDETPROMOORIGEM: value.STDETPROMOORIGEM,
                STDETPROMODESTINO: value.STDETPROMODESTINO,
                IDGRUPOEMDESTINO: value.IDGRUPOEMDESTINO,
                IDSUBGRUPOEMDESTINO: value.IDSUBGRUPOEMDESTINO,
                IDMARCAEMDESTINO: value.IDMARCAEMDESTINO,
                IDFORNECEDOREMDESTINO: value.IDFORNECEDOREMDESTINO,
                IDGRUPOEMORIGEM: value.IDGRUPOEMORIGEM,
                IDSUBGRUPOEMORIGEM: value.IDSUBGRUPOEMORIGEM,
                IDMARCAEMORIGEM: value.IDMARCAEMORIGEM,
                IDFORNECEDOREMORIGEM: value.IDFORNECEDOREMORIGEM,
                IDPRODUTO: value.IDPRODUTO,
                IDPRODUTODESTINO: value.IDPRODUTODESTINO,
                IDPRODUTOORIGEM: value.IDPRODUTOORIGEM
            });

            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro no PromocaoControllers postPromocaoSubGrupo:", error);
            throw error;
        }
    }

    async postPromocaoProdutoSubGrupo(req, res) {
        try {
            const { error, value } = createPromocaoProdutoSubGrupoSchema.validate(req.body, {
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

            const response = await promocaoService.createPromocaoProdutoSubGrupo({
                DSPROMOCAOMARKETING: value.DSPROMOCAOMARKETING,
                DTHORAINICIO: value.DTHORAINICIO,
                DTHORAFIM: value.DTHORAFIM,
                TPAPLICADOA: value.TPAPLICADOA,
                APARTIRDEQTD: value.APARTIRDEQTD,
                APARTIRDOVLR: value.APARTIRDOVLR,
                TPFATORPROMO: value.TPFATORPROMO,
                FATORPROMOVLR: value.FATORPROMOVLR,
                FATORPROMOPERC: value.FATORPROMOPERC,
                TPAPARTIRDE: value.TPAPARTIRDE,
                VLPRECOPRODUTO: value.VLPRECOPRODUTO,
                STEMPRESAPROMO: value.STEMPRESAPROMO,
                STDETPROMOORIGEM: value.STDETPROMOORIGEM,
                STDETPROMODESTINO: value.STDETPROMODESTINO,
                STATIVO: value.STATIVO,
                STPRODUTO: value.STPRODUTO,
                STESTRUTURA: value.STESTRUTURA,
                STESTRUTURAPRODUTO: value.STESTRUTURAPRODUTO,
                IDEMPRESA: value.IDEMPRESA,
                IDPRODUTO: value.IDPRODUTO,
                detalhesDestino: value.detalhesDestino,
                detalhesOrigem: value.detalhesOrigem
            });

            return res.status(200).json({
                message: "Promoção(s) criada(s) com sucesso",
                data: response
            });
        } catch (error) {
            console.error("Erro no PromocaoControllers postPromocaoProdutoSubGrupo:", error);
            throw error;
        }
    }

    async postMecanicaAtivas(req, res) {

        try {
            const { error, value } = createMecanicaSchema.validate(req.body, {
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

            const response = await promocaoService.createMecanica({
                DESCRICAO: value.DESCRICAO,
                APLICACAODESTINO: value.APLICACAODESTINO,
                MECANICA: value.MECANICA,
                TIPODESCONTO: value.TIPODESCONTO
            });

            return res.json(response);
        } catch (error) {
            console.error("erro no PromocaoControllers  postMecanicaAtivas:", error);
            throw error;
        }
    }

}

export default new PromocaoControllers();

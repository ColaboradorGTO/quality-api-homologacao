import axios from 'axios';
import 'dotenv/config';
import { MarketingServices } from '../service/serviceMarketing.js';
import { MarketingClient } from '../client/clientMarketing.js';
import { atualizarCampanhaClientSchema } from '../schema/atualizarCampanhaClient.js';
import { atualizarProdutoPromocaoSchema } from '../schema/atualizarProdutoPromocao.js';
import { atualizarProdutoEmpresaSchema } from '../schema/atualizarCampanhaEmpresa.js';
import { createProdutoEmpresaSchema } from '../schema/createCampanhaEmpresa.js';
import { createCampanhaClientSchema } from '../schema/createCampanhaClient.js';
import { createProdutoPromocaoSchema } from '../schema/createProdutoPromocao.js';

const url = process.env.API_URL;
const marketingClient = new MarketingClient(url)
const marketingService = new MarketingServices(marketingClient);

class MarketingControllers {

    async getListaProdutosPromocao(req, res) {
        let { idProduto, codeBarsOuNome, page, pageSize, descricaoProduto } = req.query;
        try {
            idProduto = idProduto ? idProduto : '';
            codeBarsOuNome = codeBarsOuNome ? codeBarsOuNome : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/produto-promocao.xsjs?codeBarsOuNome=${descricaoProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPromocao(req, res) {
        let { idResumoPromocao, page, pageSize } = req.query;
        try {
            idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/promocao/listapromocao.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaCampanha(req, res) {
        let { idCampanha, page, pageSize } = req.query;
        try {
            idCampanha = idCampanha ? idCampanha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/campanha/todos.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaCampanhaCliente(req, res) {
        let { cpf, telefone, idCampanha, page, pageSize } = req.query;
        try {
            cpf = cpf ? cpf : '';
            telefone = telefone ? telefone : '';
            idCampanha = idCampanha ? idCampanha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/campanha/campanha-cliente.xsjs?cpf=${cpf}&telefone=${telefone}&idCampanha=${idCampanha}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async putCampanhaCliente(req, res) {
        try {
            const { error, value } = atualizarCampanhaClientSchema.validate(req.body, {
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

            const response = await marketingService.updateCampanhaCliente({
                IDCAMPANHA: value.IDCAMPANHA,
                NUCPFCNPJ: value.NUCPFCNPJ,
                EENDERECO: value.EENDERECO,
                NUENDERECO: value.NUENDERECO,
                ECOMPLEMENTO: value.ECOMPLEMENTO,
                EBAIRRO: value.EBAIRRO,
                ECIDADE: value.ECIDADE,
                SGUF: value.SGUF,
                NUCEP: value.NUCEP,
                EEMAIL: value.EEMAIL,
                NUTELEFONE: value.NUTELEFONE,
                NOME: value.NOME,
                ID: value.ID,
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.putCampanhaCliente", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

    async putProdutoPromocao(req, res) {
        try {
            const { error, value } = atualizarProdutoPromocaoSchema.validate(req.body, {
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

            const response = await marketingService.updateProdutoPromocao({

                IDPRODUTO: value.IDPRODUTO,
                IDGRUPOEMPRESARIAL: value.IDGRUPOEMPRESARIAL,
                NUNCM: value.NUNCM,
                NUCEST: value.NUCEST,
                NUCST_ICMS: value.NUCST_ICMS,
                NUCFOP: value.NUCFOP,
                PERC_OUT: value.PERC_OUT,
                NUCODBARRAS: value.NUCODBARRAS,
                DSNOME: value.DSNOME,
                STGRADE: value.STGRADE,
                UND: value.UND,
                PRECOCUSTO: value.PRECOCUSTO,
                PRECOVENDA: value.PRECOVENDA,
                QTDENTRADA: value.QTDENTRADA,
                QTDCOMERCIALIZADA: value.QTDCOMERCIALIZADA,
                QTDPERDA: value.QTDPERDA,
                QTDDISPONIVEL: value.QTDDISPONIVEL,
                PERCICMS: value.PERCICMS,
                PERCISS: value.PERCISS,
                PERCPIS: value.PERCPIS,
                PERCCOFINS: value.PERCCOFINS,
                COD_CSOS: value.COD_CSOS,
                PERCCSOSC: value.PERCCSOSC,
                NUCST_IPI: value.NUCST_IPI,
                NUCST_PIS: value.NUCST_PIS,
                NUCST_COFINS: value.NUCST_COFINS,
                PERCIPI: value.PERCIPI,
                DTULTALTERACAO: value.DTULTALTERACAO,
                STPESAVEL: value.STPESAVEL,
                GRP_MATERIAIS: value.GRP_MATERIAIS

            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.putProdutoPromocao", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

    async putCampanhaEmpresa(req, res) {
        try {
            const { error, value } = atualizarProdutoEmpresaSchema.validate(req.body, {
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

            const response = await marketingService.updateCampanhaEmpresa({
                DSCAMPANHA: value.DSCAMPANHA,
                IDOPERADOR: value.IDOPERADOR,
                DTINICIO: value.DTINICIO,
                DTFINAL: value.DTFINAL,
                VRPERCDESCONTO: value.VRPERCDESCONTO,
                IDCAMPANHA: value.IDCAMPANHA
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.putCampanhaEmpresa", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

    async postCampanhaCliente(req, res) {
        try {
            const { error, value } = createCampanhaClientSchema.validate(req.body, {
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

            const response = await marketingService.createCampanhaClient({
                IDCAMPANHA: value.IDCAMPANHA,
                NUCPFCNPJ: value.NUCPFCNPJ,
                NOME: value.NOME,
                EENDERECO: value.EENDERECO,
                NUENDERECO: value.NUENDERECO,
                ECOMPLEMENTO: value.ECOMPLEMENTO,
                EBAIRRO: value.EBAIRRO,
                ECIDADE: value.ECIDADE,
                SGUF: value.SGUF,
                NUCEP: value.NUCEP,
                EEMAIL: value.EEMAIL,
                NUTELEFONE: value.NUTELEFONE

            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.postCampanhaCliente", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

    async postCampanhaEmpresa(req, res) {
        try {
            const { error, value } = createProdutoEmpresaSchema.validate(req.body, {
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

            const response = await marketingService.createCampanhaEmpresa({
                DSCAMPANHA: value.DSCAMPANHA,
                IDOPERADOR: value.IDOPERADOR,
                DTINICIO: value.DTINICIO,
                DTFINAL: value.DTFINAL,
                VRPERCDESCONTO: value.VRPERCDESCONTO,
                EMPRESAS: value.EMPRESAS
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.postCampanhaCliente", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

    async postProdutoPromocao(req, res) {
        try {
            const { error, value } = createProdutoPromocaoSchema.validate(req.body, {
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

            const response = await marketingService.createProdutoPromocao({
                DSPROMO: value.DSPROMO,
                VRPERCDESCONTO: value.VRPERCDESCONTO,
                VRPRECODESCONTO: value.VRPRECODESCONTO,
                VRAPARTIRDE: value.VRAPARTIRDE,
                VRLIMITEDE: value.VRLIMITEDE,
                QTDAPARTIRDE: value.QTDAPARTIRDE,
                QTDLIMITEDE: value.QTDLIMITEDE,
                DTINICIOPROMO: value.DTINICIOPROMO,
                DTFIMPROMO: value.DTFIMPROMO,
                STATIVO: value.STATIVO,
                IDGRUPO: value.IDGRUPO,
                PRODUTOS: value.PRODUTOS,
                EMPRESAS: value.EMPRESAS
            });

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no MarketingControllers.putCaixaLoja", error);
            return res.status(500).json({ error: "Erro no servidor" });
        }
    }

}

export default new MarketingControllers();

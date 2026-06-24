/* import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;
import axios from 'axios';

class DashBoardControllers {

    //vendas
    async getResumoVendaGerencia(req, res) {

        let { idEmpresa, page, pageSize, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataPesquisa = dataPesquisa ? dataPesquisa : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            try {
                const apiUrl = `${url}/api/dashboard/resumo-venda.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
                const response = await axios.get(apiUrl);

                return res.json(response.data);
            } catch (error) {
                console.error("Erro ao conectar ao servidor:", error);

                throw error;
            }

        }
    }

    //vendas
    async getListaVendasLojaResumidoGerencia(req, res) {

        let { idEmpresaLogin, dataPesquisaInicio, dataPesquisaFim } = req.query;

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
        dataPesquisaFim = dataFormatada(dataPesquisaFim)

        try {
            const apiUrl = `${url}/api/dashboard/venda/venda-resumido.xsjs?pageSize=500&idLoja=${idEmpresaLogin}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;

            const response = await axios.get(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("Erro ao conectar ao servidor:", error);

            throw error;
        }
    }

    //quebra caixa
    async getListaQuebraCaixa(req, res) {
        let { idMarca, idEmpresa, cpfOperadorQuebra, stQuebraPositivaNegativa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';
        stQuebraPositivaNegativa = stQuebraPositivaNegativa ? stQuebraPositivaNegativa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DashBoardControllers.getListaQuebraCaixa:", error);
            throw error;
        }
    }

    //quebra caixa
    async getListaQuebraCaixaPositiva(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, quebra, idMarca, cpfOperadorQuebra } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        quebra = quebra ? quebra : '';
        idMarca = idMarca ? idMarca : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=1000&page=1&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stQuebraPositivaNegativa=${quebra}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    //quebra caixa 
    async getListaQuebraCaixaNegativa(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, quebra, idMarca, cpfOperadorQuebra } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        quebra = quebra ? quebra : '';
        idMarca = idMarca ? idMarca : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';


        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=1000&page=1&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stQuebraPositivaNegativa=${quebra}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //quebra caixa
    async getRetornoTableImprimeQuebra(req, res) {
        let { idQuebraCaixa } = req.query;

        if (!isNaN(idQuebraCaixa)) {
            idQuebraCaixa = Number(idQuebraCaixa)

            try {
                const apiUrl = `${url}/api/dashboard/quebra-caixa/quebra-caixa.xsjs?id=${idQuebraCaixa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Error no DashBoardControllers.getRetornoTableImprimeQuebra:", error);
                return res.status(500).json({ error: error.message });

            }
        }

    }

    //vendas
    async getRetornoListaVendaDetalhe(req, res) {
        let { idEmpresa, idVenda } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa-detalhado.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //vendas
    async getRetornoListaVendasAtivasDetalheProduto(req, res) {
        let { idEmpresa, idVenda } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/detalhe-venda.xsjs?idEmpresa=${idEmpresa}&idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //vendas
    async getRetornoListaVendasConvenioDescontoFuncionario(req, res) {
        let { idEmpresaLogin, idFuncionarioPN, dataFechamento, dataInicio, page, pageSize } = req.query;
        idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
        idFuncionarioPN = idFuncionarioPN ? idFuncionarioPN : '';
        dataFormatada(dataFechamento)
        dataFormatada(dataInicio)
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?page=${page}&pageSize=${pageSize}&status=False&idEmpresa=${idEmpresaLogin}&dataInicio=${dataInicio}&dataFechamento=${dataFechamento}&idFuncPN=${idFuncionarioPN}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //vendas
    async getRetornoListaVendasConvenioDesconto(req, res) {
        let { idEmpresa, dataFechamento, dataInicio } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataFormatada(dataFechamento) = dataFormatada(dataFechamento) ? dataFormatada(dataFechamento) : '';
            dataFormatada(dataInicio) = dataFormatada(dataInicio) ? dataFormatada(dataInicio) : '';
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-convenio-desconto.xsjs?pagesize=1000&status=False&idEmpresa=${idEmpresa}&dataInicio=${dataInicio}&dataFechamento=${dataFechamento}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //vendas
    async getListaVendasVendedorGerencia(req, res) {
        let { idEmpresa, page, pageSize, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataFechamento = dataFechamento ? dataFechamento : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
            try {
                const apiUrl = `${url}/api/dashboard/venda/vendedor.xsjs?page=${page}&pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    //vendas
    async getListaResumoVendasAtivaGerencia(req, res) {
        let { idEmpresa, page, pageSize, dataFechamento, status } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataFechamento = dataFechamento ? dataFechamento : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?pagesize=100&status=False&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    //vendas
    async getListaVendasGerencia(req, res) {
        let { idVenda } = req.query;

        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?idVenda=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    //vendas
    async getListaResumoVendasCanceladasGerencia(req, res) {
        let { idEmpresa, pageNumber, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);

            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataFechamento = dataFormatada(dataFechamento)
            try {
                const apiUrl = `${url}/api/dashboard/venda/resumo-venda-caixa.xsjs?pagesize=100&status=True&idEmpresa=${idEmpresa}&dataFechamento=${dataFechamento}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    //adiantamento
    async getListAdiantamentoLoja(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial/funcionarios.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    //adiantamento
    async getListAdiantamentoSalarialData(req, res) {
        let { idEmpresa, pageNumber, dataPesquisa } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataFormatada(dataPesquisa) ? dataFormatada(dataPesquisa) : '';

        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //adiantamento
    async getListaAdiantamentoSalarialLoja(req, res) {
        let { idMarca, idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idMarca = idMarca ? idMarca : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {
            const apiUrl = `${url}/api/dashboard/adiantamento-salarial/adiantamentolojas.xsjs?idEmpresa=${idEmpresa}&dataPesquisaIni=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}`

            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    //adiantamento
    async getAdiantamentoSalarialFuncionario(req, res) {
        let { idFuncionario } = req.query;
        try {
            const apiUrl = `${url}/api/adiantamento-salarial.xsjs?id=${idFuncionario}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna os dados da resposta
        } catch (error) {
            console.error("Erro no DashBoardControllers.getAdiantamentoSalarialFuncionario:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }

    //extrato
    async getListaExtratoDaLojaPeriodo(req, res) {
        let { idEmpresa, page, pageSize, dataPesquisaInicio, dataPesquisaFim } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
            dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            try {
                const apiUrl = `${url}/api/dashboard/extrato-loja-periodo.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)


                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    //extrato
    async getListaExtratoDaLojaPeriodoADM(req, res) {
        let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);

            dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
            dataPesquisaFim = dataFormatada(dataPesquisaFim)


            try {
                const apiUrl = `${url}/api/dashboard/extrato-loja-periodo.xsjs?pageSize=500&page=1&idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    //relatorio
    async getListaRelatorioBIGerencia(req, res) {
        let { idEmpresaLogin, idRelatorio } = req.query;

        if (!isNaN(idEmpresaLogin)) {
            idEmpresaLogin = Number(idEmpresaLogin);

            try {
                const apiUrl = `${url}/api/relatorio-bi.xsjs?pageSize=500&page=1&id=${idEmpresaLogin}&idrelatorio=${idRelatorio}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Erro no DashBoardControllers.getListaRelatorioBIGerencia:", error);
                throw error;
            }
        }
    }


    //quebra caixa
    async updateStatusQuebraCaixaLoja(req, res) {
        let {
            IDQUEBRACAIXA,
            STATIVO,
        } = req.body;

        try {
            const response = await axios.put(`${url}/api/dashboard/quebra-caixa/atualizacao-status.xsjs`, {
                IDQUEBRACAIXA,
                STATIVO,
            })

            return res.status(200).json({ message: 'Status Atualizado com sucesso!' })
        } catch (error) {
            console.error("Erro Verifique verifique os dados do banco:", error);
            throw error;
        }
    }
}

export default new DashBoardControllers();


 */
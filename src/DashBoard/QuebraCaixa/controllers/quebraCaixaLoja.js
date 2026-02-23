import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;


class QuebraCaixaControllers {
    async getListaQuebraCaixaResumoADM(req, res) {
        let { idEmpresa, dataPesquisa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';

        try {


            const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaQuebraCaixa(req, res) {
        let { idMarca, idEmpresa, cpfOperadorQuebra, uf, stQuebraPositivaNegativa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        cpfOperadorQuebra = cpfOperadorQuebra ? cpfOperadorQuebra : '';
        uf = uf ? uf : '';
        stQuebraPositivaNegativa = stQuebraPositivaNegativa ? stQuebraPositivaNegativa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}&stQuebraPositivaNegativa=${stQuebraPositivaNegativa}&uf=${uf}`;
            // const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/dashboard/quebra-caixa/lista-quebra-caixa.xsjs?pageSize=${pageSize}&page=${page}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&cpfquebraop=${cpfOperadorQuebra}&stQuebraPositivaNegativa=${stQuebraPositivaNegativa}&uf=${uf}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no QuebraCaixaControllers.getListaQuebraCaixa:", error);
            throw error;
        }

    }

    async getQuebraCaixaID(req, res) {
        let { idQuebraCaixa, page, pageSize } = req.query;

        idQuebraCaixa = idQuebraCaixa ? idQuebraCaixa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/dashboard/quebra-caixa/quebra-caixa.xsjs?id=${idQuebraCaixa}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putListaStatusQuebraCaixa(req, res) {
        try {
            let { IDQUEBRACAIXA, STATIVO } = req.body

            if (!IDQUEBRACAIXA || !STATIVO) {
                return res.status(400).json({ error: "IDQUEBRACAIXA and STATIVO are required." });
            }
            const response = await axios.put(`${url}/api/dashboard/quebra-caixa/atualizacao-status.xsjs`, { IDQUEBRACAIXA, STATIVO });
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });
        }

    }

    async putQuebraCaixa(req, res) {
        try {
            const quebras = Array.isArray(req.body) ? req.body : [req.body];
            const response = await axios.post(`${url}/api/dashboard/quebra-caixa/todos.xsjs`, quebras);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });
        }

    }

    async putConferirQuebraCaixa(req, res) {

        try {
            let { 
                IDQUEBRACAIXA,
                STCONFERIDO,
                IDFUNCIONARIO,
            } = req.body;

            if (!IDQUEBRACAIXA) {
                return res.status(400).json({ error: "IDQUEBRACAIXA is required." });
            }

            if (!IDFUNCIONARIO) {
                return res.status(400).json({ error: "IDFUNCIONARIO is required." });
            }

            // const response = await axios.put(`${url}/api/financeiro/quebra-caixa-conferencia.xsjs`, {
            const response = await axios.put(`http://164.152.245.77:8000/quality/concentrador_homologacao/api/financeiro/quebra-caixa-conferencia.xsjs`, {
                IDQUEBRACAIXA,
                STCONFERIDO,
                IDFUNCIONARIO
            });
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no QuebraCaixaControllers.putConferirQuebraCaixa:", error);
            return res.status(500).json({ error: error.message });
        }

    }

    async postQuebraCaixa(req, res) {

        try {
            let { IDCAIXAWEB,
                IDMOVIMENTOCAIXA,
                IDGERENTE,
                IDFUNCIONARIO,
                DTLANCAMENTO,
                VRQUEBRASISTEMA,
                VRQUEBRAEFETIVADO,
                TXTHISTORICO,
                STATIVO
            } = req.body;

            if (!IDCAIXAWEB) {
                return res.status(400).json({ error: "IDCAIXAWEB is required." });
            }

            if (!IDMOVIMENTOCAIXA) {
                return res.status(400).json({ error: "IDMOVIMENTOCAIXA is required." });
            }

            if (!IDGERENTE) {
                return res.status(400).json({ error: "IDGERENTE is required." });
            }

            if (!IDFUNCIONARIO) {
                return res.status(400).json({ error: "IDFUNCIONARIO is required." });
            }

            const response = await axios.post(`${url}/api/dashboard/quebra-caixa/todos.xsjs`, [{
                
                IDCAIXAWEB,
                IDMOVIMENTOCAIXA,
                IDGERENTE,
                IDFUNCIONARIO,
                DTLANCAMENTO,
                VRQUEBRASISTEMA,
                VRQUEBRAEFETIVADO,
                TXTHISTORICO,
                STATIVO
            }]);
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no QuebraCaixaControllers.postQuebraCaixa:", error);
            return res.status(500).json({ error: error.message });
        }

    }
}

export default new QuebraCaixaControllers();
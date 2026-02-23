import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;


class FuncionariosControllers {
    async getAllFuncionarios(req, res,) {

        try {
            const apiUrl = `${url}/api/funcionario/todos.xsjs`
            const response = await axios.get(apiUrl);


            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }

    async getListaTodosFuncionarios(req, res,) {
        let { byId, idEmpresa, cpf, matricula, senha, page, pageSize } = req.query;
        try {
            byId = byId ? byId : '';
            idEmpresa = idEmpresa ? idEmpresa : '';
            cpf = cpf ? cpf : '';
            matricula = matricula ? matricula : '';
            senha = senha ? senha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/funcionario/todos.xsjs?idEmpresa=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl);
          

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }

    async getListaFuncionariosAtivos(req, res,) {
        let { idEmpresa } = req.query;
        try {
            const apiUrl = `${url}/api/funcionario/funcionario-ativo-por-empresa.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl);

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no FuncionariosControllers getListaFuncionariosAtivos:", error);
            return res.status(500).json({ error: 'Erro ao buscar funcionários ativos' });
            
        }
    }

    async getAutorizacaoVoucherFuncionarios(req, res,) {
        let { matricula, senha } = req.query;
        
        try {
            const apiUrl = `${url}/api/funcionario/todos.xsjs?matricula=${matricula}&senha=${senha}`
            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; // Lança o erro para tratamento posterior, se necessário
        }
    }
    async getAdiantamentoFuncionario(req, res,) {
        let { idFuncionario } = req.query;
        
        try {
            const apiUrl = `${url}/api/adiantamento-salarial.xsjs?id=${idFuncionario}`
            const response = await axios.get(apiUrl);

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; 
        }
    }

}

export default new FuncionariosControllers();
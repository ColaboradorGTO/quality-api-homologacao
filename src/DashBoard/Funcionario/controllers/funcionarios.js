import axios from "axios";
import 'dotenv/config';
import { FuncionarioServices } from "../service/index.js";
import { FuncionarioClient } from "../client/index.js";
const url = process.env.API_URL;

const funcionarioClient = new FuncionarioClient(url)
const funcionarioService = new FuncionarioServices(funcionarioClient);

class DashBoardFuncionariosControllers {

    async getListaFuncionarios(req, res,) {
        let { idEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/dashboard/funcionario.xsjs?idEmpresa=${idEmpresa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);
        
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error; 
        }
    }
}

export default new DashBoardFuncionariosControllers();
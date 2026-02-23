import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;


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
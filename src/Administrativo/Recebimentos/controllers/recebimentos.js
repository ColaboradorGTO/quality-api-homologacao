import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class AdmRecebimentosControllers {

    async getListaFuncionarioRecebimento(req, res) {
        let { idEmpresa } = req.query;
        try {

            const apiUrl = `${url}/api/administrativo/funcionarioreceb.xsjs?idEmpresa=${idEmpresa}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no AdmRecebimentosControllers.getListaFuncionarioRecebimento:", error);
            return res.status(500).json({ message: 'Erro AdmRecebimentosControllers.getListaFuncionarioRecebimento', error });
        }
    }

    async getListaPagamentoVenda(req, res) {
        let { idVenda, } = req.query;

        idVenda = idVenda ? idVenda : '';
        try {
            const apiUrl = `${url}/api/dashboard/venda/recebimento.xsjs?id=${idVenda}`;

            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Error no AdmRecebimentosControllers.getListaPagamentoVenda:", error);
            return res.status(500).json({ message: 'Erro AdmRecebimentosControllers.getListaPagamentoVenda', error });
        }
    }

}

export default new AdmRecebimentosControllers();
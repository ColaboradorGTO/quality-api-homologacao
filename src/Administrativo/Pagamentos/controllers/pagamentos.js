import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class AdmPagamentosControllers {
 
    async getListaFormaPagamento(req, res) {
        let {} = req.query; 
        try {

            const apiUrl = `${url}/api/administrativo/formapagamento.xsjs`;
            const response = await axios.get(apiUrl)
        
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no AdmPagamentosControllers.getListaFormaPagamento:", error);
            return res.status(500).json({ message: 'Erro AdmPagamentosControllers.getListaFormaPagamento', error });
        }  
    }

    async getListaPagamentoTef(req, res) {
        let {numeroTef, page, pageSize} = req.query; 
        try {

            numeroTef = numeroTef ? numeroTef : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/administrativo/pagamento-tef.xsjs`;
            const response = await axios.get(apiUrl)
          
        
            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no AdmPagamentosControllers.getListaPagamentoTef:", error);
            return res.status(500).json({ message: 'Erro AdmPagamentosControllers.getListaPagamentoTef', error });
        }  
    }
    
    async getListaPagamentoPos(req, res) {
        let {numeroPos, page, pageSize} = req.query; 
        try {

            numeroPos = numeroPos ? numeroPos : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const response = `${url}/api/administrativo/pagamento-pos.xsjs`
        
            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no AdmPagamentosControllers.getListaPagamentoPos:", error);
            return res.status(500).json({ message: 'Erro AdmPagamentosControllers.getListaPagamentoPos', error });
        }  
    }
    
}

export default new AdmPagamentosControllers();
import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class ConfiguracaoPixPDVControllers {

    async getListaConfiguracaoPixPDV(req, res) {
        let { idConfiguracao, idEmpresa, idPixPgtoVenda, idPixPgtoFatura, page, pageSize } = req.query;
        idConfiguracao = idConfiguracao ? idConfiguracao : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idPixPgtoVenda = idPixPgtoVenda ? idPixPgtoVenda : '';
        idPixPgtoFatura = idPixPgtoFatura ? idPixPgtoFatura : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/configuracao_pix_pdv.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async updateConfiguracaoPixPDV(req, res) {
        try {
            const quebras = Array.isArray(req.body) ? req.body : [req.body];

            const quebrasProcessadas = quebras.map(item => ({
                ...item,
                IDPSPPIX: item.IDPSPPIX?.value ?? item.IDPSPPIX,
                IDPSPPIXFATURA: item.IDPSPPIXFATURA?.value ?? item.IDPSPPIXFATURA
            }));

            const result = await axios.put(`${url}/api/configuracao_pix_pdv.xsjs`, quebrasProcessadas);
            res.status(200).json(result.data);

        } catch (error) {
            res.status(500).json({
                msg: 'Erro ao atualizar configuração',
                error: error.message
            });
        }
    }
    /* async updateConfiguracaoPixPDV(req, res) {
        
        try {
            const quebras = Array.isArray(req.body) ? req.body : [req.body];
            const result = await axios.put(`${url}/api/configuracao_pix_pdv.xsjs`, quebras);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ msg: 'Erro ao atualizar configuração', error: error.message });
        }
    } */


}

export default new ConfiguracaoPixPDVControllers();
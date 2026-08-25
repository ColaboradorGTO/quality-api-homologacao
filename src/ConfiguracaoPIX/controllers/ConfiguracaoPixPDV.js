import { ConfiguracaoPixPDVClient } from '../client/index.js';
import { ConfiguracaoPixPDVServices } from '../services/index.js';
import atualizarConfiguracaoPixPDVSchema from '../schema/atualizarConfiguracaoPixPDV.js';
import consultarConfiguracaoPixPDVSchema from '../schema/consultarConfiguracaoPixPDV.js';
import 'dotenv/config';

const url = process.env.API_URL;

const configuracaoPixPDVClient = new ConfiguracaoPixPDVClient(url);
const configuracaoPixPDVServices = new ConfiguracaoPixPDVServices(configuracaoPixPDVClient);

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
            const configuracoes = Array.isArray(req.body) ? req.body : [req.body];

            const configuracoesProcessadas = configuracoes.map(item => ({
                ...item,
                IDPSPPIX: item.IDPSPPIX?.value ?? item.IDPSPPIX,
                IDPSPPIXFATURA: item.IDPSPPIXFATURA?.value ?? item.IDPSPPIXFATURA
            }));

            const { error, value } = atualizarConfiguracaoPixPDVSchema.validate(configuracoesProcessadas, {
                abortEarly: false,
                stripUnknown: false
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos.',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const result = await configuracaoPixPDVServices.updateConfiguracaoPixPDV(value);

            return res.status(200).json(result);

        } catch (error) {
            console.error('Erro no ConfiguracaoPixPDVControllers.updateConfiguracaoPixPDV:', error);
            return res.status(error.response?.status || 500).json({
                message: 'Erro ao atualizar configuração PIX.',
                error: error.message
            });
        }
    }

}

export default new ConfiguracaoPixPDVControllers();


import { DepositoService } from "../services/index.js";
import { ServiceLayerClient } from "../client/index.js";
const sapClient = new ServiceLayerClient(process.env.API_URL);
const depositoService = new DepositoService(sapClient);
import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;

class ServiceLayerControllers {
    async postMigrarProdutoAvulso(req, res) {
        try {
          
            let { IDDETALHEPRODUTOPEDIDO } = req.body;
   
            const response = await axios.post(`${url}/api/service-layer/pedido-compra/por-codigo/produtos-avulso.xsjs?codProdAvulso=${IDDETALHEPRODUTOPEDIDO}`)

            return res.status(200).json(response.data);
        } catch (error) {
            console.error("Erro no ServiceLayerControllers.postMigrarProdutoAvulso:", error);
            return res.status(400).json({ error: error.message });
        }
    }

    async postDepositoIntegrarNoSAP(req, res) {
        
        try {

            let {IDDEPOSITOLOJA} = req.body;

            if (Array.isArray(req.body) && req.body.length > 0) {
                IDDEPOSITOLOJA = req.body[0].IDDEPOSITOLOJA;
            } else {
                IDDEPOSITOLOJA = req.body.IDDEPOSITOLOJA;
            }
            
            const message = await depositoService.integrarDeposito([{ IDDEPOSITOLOJA }]);
            res.status(200).json({ message });
        } catch (error) {
            console.error('Erro ao integrar depósito no SAP:', error);
            res.status(500).json({ message: 'Erro ao integrar depósito no SAP.' });
        }
    }

    async postVoucher(req, res) {
        try {
          
            let { } = req.body;
   
            const response = await axios.post(`${url}/api/service-layer/devolucao/devolucao-produtos-voucher-nova/jobs/gerar-devolucao-rotina-completa.xsjs`)

            return res.status(200).json(response.data);
        } catch (error) {
            console.error("Erro no ServiceLayerControllers.postVoucher:", error);
            return res.status(400).json({ error: error.message });
        }
    }

    async postIntegrarAdiantamentoSalarial(req, res) {
        try {
          
            let { IDADIANTAMENTOSALARIO, IDFUNCIONARIO } = req.body;
   
          
            const response = await axios.post(`${url}/api/service-layer/adiantamento-salarial/jobs/adiantamentos-salariais-integracao.xsjs`, [{
                IDADIANTAMENTOSALARIO,
                IDFUNCIONARIO,
            }])

            return res.status(200).json(response.data);
        } catch (error) {
            console.error("Erro no ServiceLayerControllers.postIntegrarAdiantamentoSalarial:", error);
            return res.status(400).json({ error: error.message });
        }
    }

    async postIntegrarQuebraCaixaSAP(req, res) {
        try {
          
            let { IDQUEBRACAIXA, IDFUNCIONARIO } = req.body;
   
            const response = await axios.post(`${url}/api/service-layer/quebra-caixa/jobs/quebras-de-caixas-integracao.xsjs`, [{
                IDQUEBRACAIXA,
                IDFUNCIONARIO,
            }])

            return res.status(200).json(response.data);
        } catch (error) {
            console.error("Erro no ServiceLayerControllers.postIntegrarQuebraCaixaSAP:", error);
            return res.status(400).json({ error: error.message });
        }
    }

    async postIntegrarPagamentoPixSAP(req, res) {
        try {
          
            let { IDVENDAPAGAMENTO } = req.body;
   
            const response = await axios.post(`${url}/api/service-layer/pagamentos/jobs/pix-integracao.xsjs`, [{
                IDVENDAPAGAMENTO,
            }])

            return res.status(200).json(response.data);
        } catch (error) {
            console.error("Erro no ServiceLayerControllers.postIntegrarPagamentoPixSAP:", error);
            return res.status(400).json({ error: error.message });
        }
    }
}

export default new ServiceLayerControllers();
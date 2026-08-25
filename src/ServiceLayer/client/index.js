import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class ServiceLayerClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async migrarProdutoAvulso(IDDETALHEPRODUTOPEDIDO) {
        const response = await this.api.post(
            `${url}/api/service-layer/pedido-compra/por-codigo/produtos-avulso.xsjs?codProdAvulso=${IDDETALHEPRODUTOPEDIDO}`
        );
        return response.data;
    }

    async integrarDeposito(IDDEPOSITOLOJA) {
        const response = await this.api.post(
            `${url}/api/service-layer/deposito/jobs/depositos-integracao.xsjs`,
            [{ IDDEPOSITOLOJA }]
        );
        return response.data;
    }

    async gerarVoucher() {
        const response = await this.api.post(
            `${url}/api/service-layer/devolucao/devolucao-produtos-voucher-nova/jobs/gerar-devolucao-rotina-completa.xsjs`
        );
        return response.data;
    }

    async integrarAdiantamentoSalarial(IDADIANTAMENTOSALARIO, IDFUNCIONARIO) {
        const response = await this.api.post(
            `${url}/api/service-layer/adiantamento-salarial/jobs/adiantamentos-salariais-integracao.xsjs`,
            [{
                IDADIANTAMENTOSALARIO,
                IDFUNCIONARIO
            }]
        );
        return response.data;
    }

    async integrarQuebraCaixa(IDQUEBRACAIXA, IDFUNCIONARIO) {
        const response = await this.api.post(
            `${url}/api/service-layer/quebra-caixa/jobs/quebras-de-caixas-integracao.xsjs`,
            [{
                IDQUEBRACAIXA,
                IDFUNCIONARIO
            }]
        );
        return response.data;
    }

    async integrarPagamentoPix(IDVENDAPAGAMENTO) {
        const response = await this.api.post(
            `${url}/api/service-layer/pagamentos/jobs/pix-integracao.xsjs`,
            [{ IDVENDAPAGAMENTO }]
        );
        return response.data;
    }

    async integrarDespesa(IDDESPESASLOJA, IDFUNCIONARIO) {
        const response = await this.api.post(
            `${url}/api/service-layer/despesa/jobs/despesas-integracao.xsjs`,
            [{
                IDDESPESASLOJA,
                IDFUNCIONARIO
            }]
        );
        return response.data;
    }
}

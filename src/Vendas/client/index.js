import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class VendasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async alterarVendasPrazoExcedido(
        DIASAPOSCOMPRAR,
        IDPRODUTO,
        IDVENDA,
        IDVENDADETALHE,
        MOTIVOEXCECAO,
        QTD,
        TIPOTROCA,
        USERAUTORIZADOR,
        VRPRODUTO,
        VRTOTALLIQUIDO
    ) {
        const response = await this.api.post(
            `${url}/api/venda/vendas-prazo-excedido-troca.xsjs`,
            [{
                DIASAPOSCOMPRAR,
                IDPRODUTO,
                IDVENDA,
                IDVENDADETALHE,
                MOTIVOEXCECAO,
                QTD,
                TIPOTROCA,
                USERAUTORIZADOR,
                VRPRODUTO,
                VRTOTALLIQUIDO
            }]
        );
        return response.data;
    }
}

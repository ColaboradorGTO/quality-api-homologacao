import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class CadastroClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarStatusProdutoAvulso(
        IDDETALHEPRODUTOPEDIDO,
        IDRESPCANCELAMENTO,
        DSMOTIVOCANCELAMENTO,
        DTCANCELAMENTO,
        STCANCELADO   
    ) {
        const response = await this.api.put(`${url}/api/cadastro/atualizacao-status-produto-avulso.xsjs`, {       
            IDDETALHEPRODUTOPEDIDO,
            IDRESPCANCELAMENTO,
            DSMOTIVOCANCELAMENTO,
            DTCANCELAMENTO,
            STCANCELADO
        });
      
        return response.data;
    }

    async atualizarDesvincularNFPedido(
        IDRESUMOPEDIDO,
        IDRESUMOENTRADA,
        STATIVO  
    ) {
        const response = await this.api.put(`${url}/api/cadastro/vincula_nfpedido.xsjs`, [{       
            IDRESUMOPEDIDO,
            IDRESUMOENTRADA,
            STATIVO
        }]);
      
        return response.data;
    }
  
    async criarVinculoNFPedido(
        IDRESUMOPEDIDO,
        IDRESUMOENTRADA
    ) {
        const response = await this.api.put(`${url}/api/cadastro/vincula_nfpedido.xsjs`, [{       
            IDRESUMOPEDIDO,
            IDRESUMOENTRADA
        }]);
      
        return response.data;
    }

}


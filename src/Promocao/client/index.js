import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL;

export class PromocaoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarPromocao(
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDPRODUTO,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDEMPRESA,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDPRODUTODESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTOORIGEM
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDPRODUTO,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDEMPRESA,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDPRODUTODESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTOORIGEM
        }]);
        return response.data;
    }

    async atualizarProdutoDestinoPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTODESTINO
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-destino.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTODESTINO
        }]);
        return response.data;
    }

    async atualizarProdutoOrigemPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTOORIGEM
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-origem.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTOORIGEM
        }]);
        return response.data;
    }

    async atualizarEmpresaPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-empresa-promocao.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        }]);
        return response.data;
    }

    async atualizarStatusPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-status-promocao.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        }]);
        return response.data;
    }

    async atualizarPromocaoSubGrupo(
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDEMPRESA,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDSUBGRUPOEMDESTINO,
        IDSUBGRUPOEMORIGEM
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/promocao-ativa-subgrupo.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDEMPRESA,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDSUBGRUPOEMDESTINO,
            IDSUBGRUPOEMORIGEM
        }]);
        return response.data;
    }

    async atualizarPromocaoProdutoSubGrupo(
        IDRESUMOPROMOCAOMARKETING,
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        STATIVO,
        STPRODUTO,
        STESTRUTURA,
        STESTRUTURAPRODUTO,
        IDEMPRESA,
        IDPRODUTO,
        detalhesDestino,
        detalhesOrigem
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/promocao-ativa-subgrupo-produto.xsjs`, {
            IDRESUMOPROMOCAOMARKETING,
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            STATIVO,
            STPRODUTO,
            STESTRUTURA,
            STESTRUTURAPRODUTO,
            IDEMPRESA,
            IDPRODUTO,
            detalhesDestino,
            detalhesOrigem
        });
        return response.data;
    }

    async criarListaProdutosPromocao(dados) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/produto-promocao-ativa.xsjs`, dados);
        return response.data;
    }

    async criarPromocao(dados) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, dados);
        return response.data;
    }

    async criarPromocaoSubGrupo(
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDEMPRESA,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTO,
        IDPRODUTODESTINO,
        IDPRODUTOORIGEM
    ) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/promocao-ativa-subgrupo.xsjs`, [{
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDEMPRESA,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTO,
            IDPRODUTODESTINO,
            IDPRODUTOORIGEM
        }]);
        return response.data;
    }

    async criarPromocaoProdutoSubGrupo(
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        STATIVO,
        STPRODUTO,
        STESTRUTURA,
        STESTRUTURAPRODUTO,
        IDEMPRESA,
        IDPRODUTO,
        detalhesDestino,
        detalhesOrigem
    ) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/promocao-ativa-subgrupo-produto.xsjs`, {
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            STATIVO,
            STPRODUTO,
            STESTRUTURA,
            STESTRUTURAPRODUTO,
            IDEMPRESA,
            IDPRODUTO,
            detalhesDestino,
            detalhesOrigem
        });
        return response.data;
    }

    async criarMecanica(
        DESCRICAO,
        APLICACAODESTINO,
        MECANICA,
        TIPODESCONTO
    ) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/select-mecanica.xsjs`, {
            DESCRICAO,
            APLICACAODESTINO,
            MECANICA,
            TIPODESCONTO
        });
        return response.data;
    }
}

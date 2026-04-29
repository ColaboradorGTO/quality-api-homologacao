import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL;

class EstoqueControllers {
    async getListaEstoqueAtual(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, stAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        stAtivo = stAtivo ? stAtivo : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/administrativo/inventariomovimento.xsjs?idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo=${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descricaoProduto}&dtinicial=${dataPesquisaInicio}&dtfinal=${dataPesquisaFim}&stativo=${stAtivo}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            // const response = await getInventarioMovimento(idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, stAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize);
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no EstoqueControllers.getListaEstoqueAtual:", error);
            return res.status(500).json({ message: 'Erro EstoqueControllers.getListaEstoqueAtual', error });
        }

    }

    async getListaEstoqueUltimaPosicao(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, STAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        STAtivo = STAtivo ? STAtivo : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/administrativo/ultima-posicao-estoque.xsjs?&idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo=${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descricaoProduto}&dtinicial=${dataPesquisaInicio}&stativo=True`;
            const response = await axios.get(apiUrl)
            // const response = await getUltimaPosicaoEstoque(idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, STAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no EstoqueControllers.getListaEstoqueUltimaPosicao:", error);
            return res.status(500).json({ message: 'Erro EstoqueControllers.getListaEstoqueUltimaPosicao', error });
        }
    }

    async getEstoqueAtual(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descProduto, pageNumber, dataInicial, dataFinal, } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descProduto = descProduto ? descProduto : '';
        dataInicial = dataFormatada(dataInicial) ? dataFormatada(dataInicial) : ''
        dataFinal = dataFormatada(dataFinal) ? dataFormatada(dataFinal) : ''

        const pageSize = 100;
        const offset = (pageNumber - 1) * pageSize;
        try {

            const apiUrl = `${url}/api/administrativo/inventariomovimento.xsjs?idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo=${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descProduto}&dtinicial=${dataInicial}&dtfinal=${dataFinal}&stativo=True`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Erro no EstoqueControllers.getEstoqueAtual:", error);
            return res.status(500).json({ message: 'Erro EstoqueControllers.getEstoqueAtual', error });
        }
    }
}

export default new EstoqueControllers();
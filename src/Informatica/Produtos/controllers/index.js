import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;
import { ProdutosInformaticaClient } from "../client/index.js";
import { ProdutosInformaticaServices } from "../service/index.js";

const produtosInformaticaClient = new ProdutosInformaticaClient(url);
const produtosInformaticaServices = new ProdutosInformaticaServices(ProdutosInformaticaClient);

class ProdutosInformaticaControllers {

    async getListaProdutoPreco(req, res) {
        let { idEmpresa, dsProduto, page, pageSize } = req.query;
        if (!isNaN(idEmpresa)) {

            idEmpresa = Number(idEmpresa);
            dsProduto = dsProduto ? dsProduto : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            try {
                const apiUrl = `${url}/api/informatica/produto-preco.xsjs?page=${page}&pageSize=${pageSize}&idEmpresa=${idEmpresa}&dsProduto=${dsProduto}`
                const response = await axios.get(apiUrl)
                if (response.status === 200) {
                    return res.json(response.data);
                } else {
                    return res.status(500).json({ message: "Erro ao buscar produtos." });
                }
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaProdutoPrecoInformatica(req, res) {
        let { idEmpresa, descricaoProduto, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/informatica/produto-preco.xsjs?idEmpresa=${idEmpresa}&dsProduto=${descricaoProduto}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar produtos." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

}


export default new ProdutosInformaticaControllers();
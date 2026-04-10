import axios from "axios";
import { dataFormatada } from "../utils/dataFormatada.js";
import 'dotenv/config';
// const url = process.env.API_URL;
const url = process.env.API_URL_HML;

class ListaPrecoControllers {

    async getListaPrecoPorMarca(req, res) {
        let { idLoja, idLista, nomeLista, dataPesquisaInicio, dataPesquisaFim, page, pageSize} = req.query;
    
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''; 
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        idLoja = idLoja ? idLoja : '';
        idLista = idLista ? idLista : '';
        nomeLista = nomeLista ? nomeLista : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/listas-de-precos.xsjs?dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&idLoja=${idLoja}&idLista=${idLista}&nomeLista=${nomeLista}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); 
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        } 
    }
}

export default new ListaPrecoControllers()
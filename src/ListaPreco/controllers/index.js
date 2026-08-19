import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;
// const url = process.env.API_URL_HML;

import criarListaPrecoSchem from "../schema/criarListaPreco.js";
import atualizarListaPrecoSchema from "../schema/atualizarListaPreco.js";
import { ListaPrecoServices } from "../service/index.js";
import { ListaPrecoClient } from "../client/index.js";

const listaPrecoClient = new ListaPrecoClient(url);
const listaPrecoServices = new ListaPrecoServices(listaPrecoClient);

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

    async putListasDePrecos(req, res) {   
        try {   
            const { error, value } = atualizarListaPrecoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }


            const response = await listaPrecoServices.updateListaPreco(
                value.IDRESUMOLISTAPRECO,
                value.IDUSERALTERACAO,
                value.IDUSERCRIACAO,
                value.NOMELISTA,
                value.STATIVO,
                value.lojas
            )
            
            return res.status(200).json(response);
        } catch(error) {
            console.error("erro no ListaPrecoControllers  putListasDePrecos:", error);
            throw error;
        } 
    }

    async postListasDePrecos(req, res) {
       
        try {   
         
            const { error, value } = criarListaPrecoSchem.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await listaPrecoServices.createListaPreco(
                value.IDRESUMOLISTAPRECO, 
                value.IDUSERALTERACAO,
                value.IDUSERCRIACAO,
                value.NOMELISTA,
                value.STATIVO,
                value.lojas
            )
            
            return res.status(200).json(response);
        } catch(error) {
            console.error("erro no ListaPrecoControllers  postListasDePrecos:", error);
            throw error;
        } 
    }
}

export default new ListaPrecoControllers()
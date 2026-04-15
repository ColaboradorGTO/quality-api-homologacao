import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
const url = process.env.API_URL

class InformaticaControllers {

    async getListaEmpresas(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/informatica/empresa.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaEmpresasInformatica(req, res) {
        let {
            idEmpresa

        } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        try {

            const apiUrl = `${url}/api/informatica/empresa.xsjs?id=${idEmpresa}`

            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaMarcas(req, res) {
        let { } = req.query;
        try {
            const apiUrl = `${url}/api/grupo-empresarial.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaGrupoEmpresas(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/informatica/grupoempresas.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

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

    async getListaCaixas(req, res) {
        let { idEmpresa, idCaixaWeb, dataUltimaAtualizacao, page, pageSize, byId } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            idCaixaWeb = idCaixaWeb ? idCaixaWeb : '';
            dataUltimaAtualizacao = dataUltimaAtualizacao ? dataFormatada(dataUltimaAtualizacao) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            byId = byId ? byId : '';

            const apiUrl = `${url}/api/informatica/caixa.xsjs?idEmpresa=${idEmpresa}&id=${idCaixaWeb}&page=${page}&pageSize=${pageSize}&byId=${byId}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaCaixasID(req, res) {
        let { idCaixa } = req.query;
        if (!isNaN(idCaixa)) {
            try {
                const apiUrl = `${url}/api/informatica/caixa.xsjs?id=${idCaixa}`
                const response = await axios.get(apiUrl)
                if (response.status === 200) {
                    return res.json(response.data);
                } else {
                    return res.status(500).json({ message: "Erro ao buscar caixas." });
                }
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaAtualizaEmpresaDiario(req, res) {
        let { idEmpresa, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/atualiza-empresa-diario.xsjs?id=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;

        }

    }

    async getListaVendasLojaInformatica(req, res) {
        let { idEmpresa, status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            status = status ? status : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/vendas-lojas.xsjs?idEmpresa=${idEmpresa}&status=${status}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaAtualizarFuncionario(req, res) {
        let { idFuncionario, page, pageSize } = req.query;
        idFuncionario = idFuncionario ? idFuncionario : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/informatica/funcionario-loja.xsjs?page=${page}&pageSize=${pageSize}&id=${idFuncionario}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar caixas." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaFuncionariosLoja(req, res) {
        let { byId, idEmpresa, cpf, noFuncionarioCPF, page, pageSize } = req.query;

        try {
            byId = byId ? byId : '';
            idEmpresa = idEmpresa ? idEmpresa : '';
            cpf = cpf ? cpf : '';
            noFuncionarioCPF = noFuncionarioCPF ? noFuncionarioCPF : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/funcionario-loja.xsjs?id=${byId}&idEmpresa=${idEmpresa}&dsNomeFunc=${noFuncionarioCPF}&nuCPF=${cpf}&page=${page}&pagesize=${pageSize}`;

            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasAlloc(req, res) {
        let { idEmpresa, status, idVenda, dataPesquisaInicio, dataPesquisaFim, stVendasAlloc, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        status = status ? status : '';
        idVenda = idVenda ? idVenda : '';
        stVendasAlloc = stVendasAlloc ? stVendasAlloc : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/informatica/lista-vendas-alloc.xsjs?idVenda=${idVenda}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stvendasalloc=${stVendasAlloc}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaVendasContigenciaIformatica(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {

            const apiUrl = `${url}/api/informatica/lista-vendas-contingencia.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaCliente(req, res) {
        let { idCliente } = req.query;

        try {
            idCliente = idCliente ? idCliente : '';

            const apiUrl = `${url}/api/informatica/cliente.xsjs?id=${idCliente}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar caixas." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaClienteIformatica(req, res) {
        let { idEmpresa, idCliente, idMarca, cpf, descCliente, tpCliente, status, page, pageSize } = req.query;


        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            idCliente = idCliente ? idCliente : '';
            idMarca = idMarca ? idMarca : '';
            cpf = cpf ? cpf : '';
            descCliente = descCliente ? descCliente : '';
            tpCliente = tpCliente ? tpCliente : '';
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';


            const apiUrl = `${url}/api/informatica/cliente.xsjs?idmarca=${idMarca}&idloja=${idEmpresa}&dscliente=${descCliente}&idcpfcnpj=${cpf}&idtipocliente=${tpCliente}&idstatus=${status}&id=${idCliente}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaLinkRelatorioBI(req, res) {
        let { idRelatorio, idEmpresa, page, pageSize, idLoja } = req.query;

        idRelatorio = idRelatorio ? idRelatorio : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        idLoja = idLoja ? idLoja : '';

        try {

            const apiUrl = `${url}/api/informatica/linkrelatoriobi.xsjs?id=${idRelatorio}&idfilial=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaRelatorioBI(req, res) {
        let { idRelatorio, status, page, pageSize } = req.query;

        try {
            idRelatorio = idRelatorio ? idRelatorio : '';
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/relatoriobi.xsjs?id=${idRelatorio}&status=${status}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)


            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaCadastroClienteCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/informatica/cadastro-cliente-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMeioPagamentoCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/informatica/meio-pagamento-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaParceriaCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/parceria-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    // Create



    // Update
    async putInativarFuncionario(req, res) {
        try {
            let { DATAULTIMAALTERACAO, STATIVO, DATA_DEMISSAO, ID } = req.body;
            const response = await axios.put(`${url}/api/informatica/funcionario-inativa.xsjs`, {
                DATAULTIMAALTERACAO,
                DATA_DEMISSAO,
                STATIVO,
                ID
            })

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });
        }
    }
    async putRelatorioBI(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];

            const response = await axios.put(`${url}/api/informatica/relatoriobi.xsjs`, dados)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putFuncionarioLoja(req, res) {
        try {
            let {
                DATA_ADMISSAO,
                NOFUNCIONARIO,
                NUCPF,
                NOLOGIN,
                PWSENHA,
                IDEMPRESA,
                IDSUBGRUPOEMPRESARIAL,
                IDFUNCIONARIO,
                DSTIPO,
                PERC,
                VALORSALARIO,
                VALORDISPONIVEL,
                IDPERFIL,
                DSFUNCAO,
                STCONVENIO,
                STDESCONTOFOLHA,
                STLOJA,
                STATIVO,
                IDFUNCALTERACAO,
                MOTIVODESC,
                ID,
                TELEFONE,
                DEPARTAMENTO
            } = req.body;
            const response = await axios.put(`${url}/api/informatica/funcionario-loja.xsjs`, {
                DATA_ADMISSAO,
                NOFUNCIONARIO,
                NUCPF,
                NOLOGIN,
                PWSENHA,
                IDEMPRESA,
                IDSUBGRUPOEMPRESARIAL,
                IDFUNCIONARIO,
                DSTIPO,
                PERC,
                VALORSALARIO,
                VALORDISPONIVEL,
                IDPERFIL,
                DSFUNCAO,
                STCONVENIO,
                STDESCONTOFOLHA,
                STLOJA,
                STATIVO,
                IDFUNCALTERACAO,
                MOTIVODESC,
                ID,
                TELEFONE,
                DEPARTAMENTO
            })


            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async postFuncionarioLoja(req, res) {
        try {
            let {
                ID,
                IDFUNCIONARIO,
                IDSUBGRUPOEMPRESARIAL,
                IDEMPRESA,
                NOFUNCIONARIO,
                NUCPF,
                NOLOGIN,
                PWSENHA,
                DSFUNCAO,
                VALORSALARIO,
                PERC,
                STATIVO,
                DSTIPO,
                VALORDISPONIVEL,
                STCONVENIO,
                STDESCONTOFOLHA,
                STLOJA,
                DATA_ADMISSAO,
                TELEFONE,
                DEPARTAMENTO
            } = req.body;
            const response = await axios.post(`${url}/api/informatica/funcionario-loja.xsjs`, {
                ID,
                IDFUNCIONARIO,
                IDSUBGRUPOEMPRESARIAL,
                IDEMPRESA,
                NOFUNCIONARIO,
                NUCPF,
                NOLOGIN,
                PWSENHA,
                DSFUNCAO,
                VALORSALARIO,
                PERC,
                STATIVO,
                DSTIPO,
                VALORDISPONIVEL,
                STCONVENIO,
                STDESCONTOFOLHA,
                STLOJA,
                DATA_ADMISSAO,
                TELEFONE,
                DEPARTAMENTO

            })

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putFuncionarioDesconto(req, res) {
        try {
            let { DTINICIODESC, DTFIMDESC, PERCDESCUSUAUTORIZADO, TXTMOTIVODESCONTO, IDFUNCALTERACAO, ID } = req.body;
            if (!ID) {
                return res.status(400).json({ error: "ID do funcionário é obrigatório." });
            }

            if (!IDFUNCALTERACAO) {
                return res.status(400).json({ error: "ID do usuário que está alterando é obrigatório." });
            }

            const response = await axios.put(`${url}/api/informatica/funcionario-desconto.xsjs`, [{
                DTINICIODESC,
                DTFIMDESC,
                PERCDESCUSUAUTORIZADO,
                TXTMOTIVODESCONTO,
                IDFUNCALTERACAO,
                ID
            }])

            return res.json(response.data);
        } catch (error) {
            console.error("Erro em InformaticaControllers.putFuncionarioDesconto:", error);
            throw error;
        }
    }
}

export default new InformaticaControllers();


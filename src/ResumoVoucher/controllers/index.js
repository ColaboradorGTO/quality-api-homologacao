
import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;


class ResumoVoucherControllers {

    async getResumoDetalheVoucher(req, res) {
        let { numeroVoucher, dataPesquisaInicio, dataPesquisaFim } = req.query;

    
        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
    
        try {
            
            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${numeroVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
        
    
    }
    async getListaVoucherGerencia(req, res) {
        let { idVoucher, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        if(idVoucher) {
        
            try {
                idVoucher = idVoucher ? idVoucher : ''
                dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
                dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '' 
                page = page ? page : '' 
                pageSize = pageSize ? pageSize : ''
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)
              
                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ResumoVoucherControllers.getListaVoucherGerencia:", error);
                throw error;
            }
        }
    
    }

    async getListaDetalheVoucherDados(req, res) {
        let { idSubGrupoEmpresa, idEmpresa, idVoucher, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, stTipoTroca, page, pageSize} = req.query;
        
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        idVoucher = idVoucher ? idVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        stTipoTroca = stTipoTroca ? stTipoTroca : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {
            
            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
           console.log(apiUrl, 'apiUrl')
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;
        }
    }

      async getListaVoucherCompleto(req, res) {
        let { idVoucher, numeroVoucher, idSubGrupoEmpresa, idEmpresa, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, page, pageSize} = req.query;
        
        idVoucher = idVoucher ? idVoucher : ''
        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {
           
            const apiUrl = `${url}/api/administrativo/voucher-completo.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;
        }
    }

    async getListaEmpresasVoucher(req, res) {
        let { idEmpresa, idSubGrupoEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            
            const apiUrl = `${url}/api/resumo-voucher/empresa.xsjs?idEmpresa=${idEmpresa}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);
         
            return res.json(response.data); // Retorna
        } catch (error) {

            throw error;    
        
        }
    }

    async getDetalheNumeroVoucherDados(req, res) {
        let { numeroVoucher, idSubGrupoEmpresa } = req.query;

        if(!isNaN(numeroVoucher)) {

            idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
            numeroVoucher = numeroVoucher ? numeroVoucher : ''
            try {
                
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?dadosVoucher=${numeroVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
                const response = await axios.get(apiUrl)
        
                return res.json(response.data); // Retorna
            } catch (error) {

                throw error;
            }
        }
    
    }
    async getDetalheIDVoucherDados(req, res) {
        let { idVoucher, idSubGrupoEmpresa } = req.query;

        
        idVoucher = idVoucher ? idVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''        
    
        try {
            
            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
            const response = await axios.get(apiUrl)
    
            return res.json(response.data); // Retorna
        } catch (error) {
            throw error;
        } 
    
    }
    async getDetalheIDVoucherDadosModal(req, res) {
        let { idVoucher } = req.query;

        if(!isNaN(idVoucher) ) {
            idVoucher = idVoucher ? idVoucher : ''
                    
        
            try {
               
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)
        
                return res.json(response.data); // Retorna
            } catch (error) {
                throw error;
            }
        }
    
    }

      async getListaTodosClientes(req, res) {
        let { idCliente, numeroCpfCnpj, pageSize, page } = req.query;

        idCliente = idCliente ? idCliente : '';
        numeroCpfCnpj = numeroCpfCnpj ? numeroCpfCnpj : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/gerencia/cliente.xsjs?id=${idCliente}&numeroCpfCnpj=${numeroCpfCnpj}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl);


            return res.json(response.data);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async autorizacaoEditarStatusVoucher(req, res) {
        let {
            MATRICULA,
            SENHA
        } = req.body;

        try {
            const response = await axios.post(`${url}/api/resumo-voucher/autFuncionario.xsjs`, {
                MATRICULA,
                SENHA
            })

            if (!MATRICULA || !SENHA ) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            return res.status(200).json({message: 'Usuário autorizado com sucesso!'})
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async postAuthFuncionarioCreateVoucher(req, res) {
        try {
            let {MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVENDA, STTIPOTROCA} = req.body;  

            if (!MATRICULA || !SENHA || !IDEMPRESALOGADA || !IDGRUPOEMPRESARIAL || !IDVENDA) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }

            const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-create-voucher.xsjs`, {
                MATRICULA,
                SENHA,
                IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL,
                IDVENDA,
                STTIPOTROCA
            })

            return res.json(response.data);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async postAuthFuncionarioPrintVoucher(req, res) {
        try {
            let {MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVOUCHER} = req.body;  
           
            if (!MATRICULA || !SENHA || !IDEMPRESALOGADA || !IDGRUPOEMPRESARIAL || !IDVOUCHER) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }
   
            const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-print-voucher.xsjs`, {
                MATRICULA, 
                SENHA, 
                IDEMPRESALOGADA, 
                IDGRUPOEMPRESARIAL, 
                IDVOUCHER
            })
            
            return res.json(response.data);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async postAuthFuncionarioUpdateVoucher(req, res) {
        try {
            let { MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVOUCHER } = req.body;
            if (!MATRICULA || !SENHA || !IDEMPRESALOGADA || !IDGRUPOEMPRESARIAL || !IDVOUCHER) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            }
            const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-update-voucher.xsjs`, {
                MATRICULA,
                SENHA,
                IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL,
                IDVOUCHER
            });
            return res.json(response.data);
        } catch (error) {
            if (error.response) {
                return res.status(error.response.status).json({
                    error: error.response.data.error
                });
            }

            if (error.request) {
                return res.status(502).json({
                    error: 'Falha ao se comunicar com o serviço de voucher'
                });
            }

            return res.status(500).json({
                error: 'Erro interno no servidor'
            });
        }
    }

    async postAuthAutorizarExecaoVenda(req, res) {
        try {
            let { MATRICULA, SENHA } = req.body;
            // if (!MATRICULA || !SENHA) {
            //     return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
            // }
            const response = await axios.post(`${url}/api/resumo-voucher/autFuncionarioExcecaoVenda.xsjs`, {
                MATRICULA,
                SENHA,
            });
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ResumoVoucherControllers.postAuthAutorizarExecaoVenda:", error);
            throw error;
            // if (error.response) {
            //     return res.status(error.response.status).json({
            //         error: error.response.data.error
            //     });
            // }

            // if (error.request) {
            //     return res.status(502).json({
            //         error: 'Falha ao se comunicar com o serviço de vendas'
            //     });
            // }

            // return res.status(500).json({
            //     error: 'Erro interno no servidor'
            // });
        }
    }

    async putCliente(req, res) {
        try {
            let { 
                IDCLIENTE,
                IDEMPRESA,
                DSNOMERAZAOSOCIAL,
                DSAPELIDONOMEFANTASIA,
                TPCLIENTE,
                NUCPFCNPJ,
                NURGINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUCEP,
                NUIBGE,
                EENDERECO,
                NUENDERECO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                EEMAIL,
                NUTELCOMERCIAL,
                NUTELCELULAR,
                DTNASCFUNDACAO,
                IDINDICACAOIE,
                DSINDICACAOIE,
                IDFUNCIONARIO 
            } = req.body
   
               if(!IDCLIENTE) {
                return res.status(400).json({ error: 'IDCLIENTE é obrigatório.' });
            }   

            if(!IDFUNCIONARIO) {
                return res.status(400).json({ error: 'IDFUNCIONARIO é obrigatório.' });
            }

            if(!NUCPFCNPJ) {
                return res.status(400).json({ error: 'NUCPFCNPJ é obrigatório.' });
            }

            
            const response = await axios.put(`${url}/api/gerencia/cliente.xsjs`, [{
                IDCLIENTE,
                IDEMPRESA,
                DSNOMERAZAOSOCIAL,
                DSAPELIDONOMEFANTASIA,
                TPCLIENTE,
                NUCPFCNPJ,
                NURGINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUCEP,
                NUIBGE,
                EENDERECO,
                NUENDERECO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                EEMAIL,
                NUTELCOMERCIAL,
                NUTELCELULAR,
                DTNASCFUNDACAO,
                IDINDICACAOIE,
                DSINDICACAOIE,
                IDFUNCIONARIO 
            }]);
         
            return res.status(200).json(response.data);
    
        } catch (error) {
            console.log(error, 'error putCliente')
            return res.status(400).json({ error: error.message });
        }
    }
    
    async postCliente(req, res) {
        try {
           
            let { 
                IDCLIENTE,
                IDEMPRESA,
                DSNOMERAZAOSOCIAL,
                DSAPELIDONOMEFANTASIA,
                TPCLIENTE,
                NUCPFCNPJ,
                NURGINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUCEP,
                NUIBGE,
                EENDERECO,
                NUENDERECO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                EEMAIL,
                NUTELCOMERCIAL,
                NUTELCELULAR,
                DTNASCFUNDACAO,
                IDINDICACAOIE,
                DSINDICACAOIE,
                IDFUNCIONARIO 
            } = req.body

            if(!NUCPFCNPJ) {
                return res.status(400).json({ error: 'NUCPFCNPJ é obrigatório.' });
            }

            const response = await axios.post(`${url}/api/gerencia/cliente.xsjs`, [{
                IDEMPRESA,
                DSNOMERAZAOSOCIAL,
                DSAPELIDONOMEFANTASIA,
                TPCLIENTE,
                NUCPFCNPJ,
                NURGINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUCEP,
                NUIBGE,
                EENDERECO,
                NUENDERECO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                EEMAIL,
                NUTELCOMERCIAL,
                NUTELCELULAR,
                DTNASCFUNDACAO,
                IDINDICACAOIE,
                DSINDICACAOIE,
                IDFUNCIONARIO 
            }]);
    
            return res.status(200).json(response.data);
        } catch (error) {

            return res.status(400).json({ error: error.message });
        }
    }
    async postResumoVoucher(req, res) {
        try {
            let { 
                IDGRUPOEMPRESARIAL,
                IDEMPRESAORIGEM,
                IDCAIXAORIGEM,
                IDNFEDEVOLUCAO,
                IDUSRINVOUCHER,
                IDVENDEDOR,
                IDCLIENTE,
                NUCPF,
                VRVOUCHER,
                IDRESUMOVENDAWEB,
                STTIPOTROCA,
                MOTIVOTROCA,
                IDUSRLIBERACAOCRIACAO,
                detVoucher,
                produtosVoucher
            } = req.body;

      
            const response = await axios.post(`${url}/api/resumo-voucher/todos-web.xsjs`, [{
                IDGRUPOEMPRESARIAL,
                IDEMPRESAORIGEM,
                IDCAIXAORIGEM,
                IDNFEDEVOLUCAO,
                IDUSRINVOUCHER,
                IDVENDEDOR,
                IDCLIENTE,
                NUCPF,
                VRVOUCHER,
                IDRESUMOVENDAWEB,
                STTIPOTROCA,
                MOTIVOTROCA,
                IDUSRLIBERACAOCRIACAO,
                detVoucher,
                produtosVoucher
            }]);

            return res.status(200).json(response.data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async putResumoVoucher(req, res) {
        try {
          
            let { STATIVO, STCANCELADO, DSMOTIVOTROCASTATUS, IDFUNCIONARIO, STSTATUS, STTIPOTROCA, IDVOUCHER, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL } = req.body;

            const response = await axios.put(`${url}/api/resumo-voucher/todos-web.xsjs`, [{
                STATIVO,
                STCANCELADO,
                DSMOTIVOTROCASTATUS,
                IDFUNCIONARIO,
                STSTATUS,
                STTIPOTROCA,
                IDVOUCHER,
                IDEMPRESALOGADA,
                IDGRUPOEMPRESARIAL
            }])

            return res.status(200).json(response.data);
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
}


export default new ResumoVoucherControllers();

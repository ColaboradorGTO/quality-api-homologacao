import axios from "axios";
import 'dotenv/config';
const url = process.env.API_URL;
import argon2 from "argon2";


async function gerarHashSenha(senha) {
  return await argon2.hash(senha, {
    type: argon2.argon2id,
  });
}

class AuthentiCationController {

  async criarHashSenha(req, res) {
    try {
      const { senha } = req.body;

      if (typeof senha !== "string" || senha.length === 0) {
        return res.status(400).json({
          sucesso: false,
          mensagem: "Informe uma senha válida.",
        });
      }

      const hash = await gerarHashSenha(senha);

      return res.status(200).json({
        sucesso: true,
        hash,
      });
    } catch (error) {
      console.error("Erro ao gerar hash da senha:", error.message);

      return res.status(500).json({
        sucesso: false,
        mensagem: "Erro ao gerar hash da senha.",
      });
    }
  }

  /*   async login novo(req, res) {
  
      const { usuario, senha } = req.body;
  
      try {
  
        const funcionarioResponse = await axios.post(
          `${url}/api/login-tst.xsjs?acao=buscarUsuario`,
          { usuario },
          { timeout: 10000 }
        );
  
        const funcionario = funcionarioResponse.data;
  
        if (!funcionario || funcionario.error) {
          return res.status(401).json({
            error: "Usuário ou senha inválido."
          });
        }
  
        let senhaValida = false;
  
        if (funcionario.SENHAHASH) {
  
          senhaValida = await argon2.verify(
            funcionario.SENHAHASH,
            senha
          );
  
        } else {
  
          senhaValida = funcionario.PWSENHA === senha;
  
          if (senhaValida) {
  
            const novoHash = await argon2.hash(senha, {
              type: argon2.argon2id
            });
  
            await axios.put(
              `${url}/api/informatica/hash-funcionario.xsjs`,
              [{
                ID: funcionario.IDFUNCIONARIO,
                SENHAHASH: novoHash
              }],
              { timeout: 10000 }
            );
          }
        }
  
        if (!senhaValida) {
          return res.status(401).json({
            error: "Usuário ou senha inválido."
          });
        }
  
        const loginResponse = await axios.post(
          `${url}/api/login-tst.xsjs?acao=gerarSessao`,
          {
            funcionario
          },
          { timeout: 10000 }
        );
  
        const token = loginResponse.data;
  
        if (!token || token.error) {
          return res.status(401).json({
            error: "Não foi possível gerar a sessão."
          });
        }
  
        return res.json(token);
  
      } catch (error) {
  
        console.error(
          "Erro ao realizar login:",
          error.response?.data || error.message
        );
  
        return res.status(500).json({
          error: "Erro ao realizar login."
        });
      }
    } */



  async login(req, res) {

    const { usuario, senha, modulo, empusuario } = req.body;

    try {
      const loginResponse = await axios.post(
        `${url}/api/login-tst.xsjs`,
        {
          timeout: 100000,
          usuario: usuario,
          senha: senha,
          modulo: modulo,
          empusuario: empusuario,
        }
      );
      // const loginResponse = await autenticacaoUsuario(

      //   {
      //     timeout: 10000,
      //     usuario: usuario,
      //     senha: senha,
      //     modulo: modulo,
      //     empusuario: empusuario,
      //   }
      // );

      const token = loginResponse.data;

      // console.log(loginResponse.data, 'loginResponse.data');

      if (!token) {
        return res
          .status(401)
          .json({ error: "Credenciais inválidas ou token não recebido" });
      }


      return res.json(token);
    } catch (error) {
      console.error("Erro ao se conectar à API externa:", error);
      return res
        .status(500)
        .json({ error: "Erro ao se conectar à API externa" });
    }
  }



  // async login2(req, res) {
  //   const { usuario, senha, modulo, empusuario } = req.body;

  //   try {
  //     // const loginResponse = await axios.post(
  //     //   "http://164.152.245.77:8000/quality/concentrador_react_node/api/login.xsjs",
  //     //   {
  //     //     timeout: 10000,
  //     //     usuario: usuario,
  //     //     senha: senha,
  //     //     modulo: modulo,
  //     //     empusuario: empusuario,
  //     //   }
  //     // );

  //     const loginResponse = await autenticacaoUsuario(

  //       {
  //         timeout: 10000,
  //         usuario: usuario,
  //         senha: senha,
  //         modulo: modulo,
  //         empusuario: empusuario,
  //       }
  //     );

  //     const token = loginResponse;



  //     if (!token) {
  //       return res
  //         .status(401)
  //         .json({ error: "Credenciais inválidas ou token não recebido" });
  //     }

  //     // localStorage.setItem("token", JSON.stringify(token));
  //     return res.json(token);
  //   } catch (error) {
  //     console.error("Erro ao se conectar à API externa:", error);
  //     return res
  //       .status(500)
  //       .json({ error: "Erro ao se conectar à API externa" });
  //   }
  // }
}

export default new AuthentiCationController();

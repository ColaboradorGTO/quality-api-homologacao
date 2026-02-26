
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export async function getCertOptions(senha, fallbackPfxPath = './GTO COMERCIO 2026-2027.pfx') {
  // -----------------------------
  // 1) PFX BASE64 VIA ENV
  // -----------------------------
  if (process.env.CERT_PFX_BASE64) {
    try {
      const buf = Buffer.from(process.env.CERT_PFX_BASE64, "base64");
      if (buf.length > 0) {
        return { pfx: buf, senha };
      }
    } catch (e) {
      console.error("ERRO: CERT_PFX_BASE64 inválido:", e.message);
    }
  }

  // -----------------------------
  // 2) PFX ARQUIVO LOCAL
  // -----------------------------
  if (fallbackPfxPath && fs.existsSync(fallbackPfxPath)) {
    try {
      const buf = fs.readFileSync(path.resolve(fallbackPfxPath));
      if (buf.length > 0) {
        return { pfx: buf, senha };
      }
    } catch (e) {
      console.error("ERRO ao ler arquivo PFX local:", e.message);
    }
  }

  // -----------------------------
  // 3) PEM BASE64 (cert + key)
  // -----------------------------
  if (process.env.CERT_PEM_CERT_BASE64 && process.env.CERT_PEM_KEY_BASE64) {
    try {
      const cert = Buffer.from(process.env.CERT_PEM_CERT_BASE64, "base64");
      const key = Buffer.from(process.env.CERT_PEM_KEY_BASE64, "base64");
      return { cert, key };
    } catch (e) {
      console.error("ERRO: CERT_PEM_*_BASE64 inválido:", e.message);
    }
  }

  // -----------------------------
  // 4) PEM POR CAMINHO
  // -----------------------------
  if (process.env.CERT_PEM_CERT_PATH && process.env.CERT_PEM_KEY_PATH) {
    try {
      const cert = fs.readFileSync(process.env.CERT_PEM_CERT_PATH);
      const key = fs.readFileSync(process.env.CERT_PEM_KEY_PATH);
      return { cert, key };
    } catch (e) {
      console.error("ERRO ao ler caminhos PEM:", e.message);
    }
  }

  // -----------------------------
  // 5) NADA ENCONTRADO
  // -----------------------------
  return null;
}


class ConsultaStatusNfeController {
  async gerarPFX(req, res) {
    try {
      const pfxPath = path.resolve(__dirname, '../GTO COMERCIO 2026-2027.pfx');
      const senha = '#GTO@2026#';
      
      // Verifica se o arquivo existe
      if (!fs.existsSync(pfxPath)) {
        return res.status(404).json({ 
          error: 'Arquivo PFX não encontrado',
          path: pfxPath 
        });
      }

      // Lê o arquivo PFX
      const pfxBuffer = fs.readFileSync(pfxPath);
      
      // Converte para base64
      const pfxBase64 = pfxBuffer.toString('base64');
      
      return res.status(200).json({
        message: 'Certificado PFX convertido para base64 com sucesso',
        certificado: {
          nome: 'GTO COMERCIO 2026-2027.pfx',
          senha: senha,
          base64: pfxBase64,
          tamanho: pfxBuffer.length
        }
      });
      
    } catch (err) {
      console.error('Erro ao gerar base64 do PFX:', err);
      return res.status(500).json({ error: err.message });
    }
  } 

 
}

export default new ConsultaStatusNfeController();
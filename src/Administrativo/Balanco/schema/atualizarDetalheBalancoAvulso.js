import Joi from 'joi';

const updateDetalheBalancoAvulsoSchema = Joi.object({
   IDEMPRESA: Joi.number().integer().required()
      .messages({
         'number.base': 'O campo IDEMPRESA deve ser um número',
         'number.integer': 'O campo IDEMPRESA deve ser um número inteiro',
         'any.required': 'O campo IDEMPRESA é obrigatório'
      }),
   NUMEROCOLETOR: Joi.number().required()
      .messages({
         'number.base': 'O campo NUMEROCOLETOR deve ser um número',
         'any.required': 'O campo NUMEROCOLETOR é obrigatório'
      }),
   DSCOLETOR: Joi.string().max(255).allow('')
      .messages({
         'string.base': 'O campo DSCOLETOR deve ser uma string',
         'string.max': 'O campo DSCOLETOR deve ter no máximo 255 caracteres'
      }),
   IDPRODUTO: Joi.string().required()
      .messages({
         'string.base': 'O campo IDPRODUTO deve ser uma string',
         'any.required': 'O campo IDPRODUTO é obrigatório'
      }),
   CODIGODEBARRAS: Joi.string().allow(null, "")
      .messages({
         'string.base': 'O campo CODIGODEBARRAS deve ser uma string'
      }),
   DSPRODUTO: Joi.string().allow(null, "")
      .messages({
         'string.base': 'O campo DSPRODUTO deve ser uma string'
      }),
   TOTALCONTAGEMGERAL: Joi.number().required()
      .messages({
         'number.base': 'O campo TOTALCONTAGEMGERAL deve ser um número',
         'any.required': 'O campo TOTALCONTAGEMGERAL é obrigatório'
      }),
   PRECOCUSTO: Joi.number().allow(null, "")
      .messages({
         'number.base': 'O campo PRECOCUSTO deve ser um número'
      }),
   PRECOVENDA: Joi.number().allow(null, "")
      .messages({
         'number.base': 'O campo PRECOVENDA deve ser um número'
      }),
   STCANCELADO: Joi.string().allow(null, "")
      .messages({
         'string.base': 'O campo STCANCELADO deve ser uma string'
      }),
   INSBALANCO: Joi.number().allow(null, "")
      .messages({
         'number.base': 'O campo INSBALANCO deve ser um número'
      })
})

export default updateDetalheBalancoAvulsoSchema;

// [{
//    "IDEMPRESA":1,
//    "NUMEROCOLETOR":30514,
//    "IDPRODUTO":"0000563110",
//    "CODIGODEBARRAS":"1223990000518",
//    "DSPRODUTO":"Casaco 3487 Visc Mg Lurex Pto Agua Viva 10",
//    "TOTALCONTAGEMGERAL":2,
//    "PRECOCUSTO":20.94,
//    "PRECOVENDA":14.99,
//    "STCANCELADO":"False",
//    "INSBALANCO":0
// }]
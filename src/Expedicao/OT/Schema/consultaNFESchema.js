import Joi from "joi";

const consultaNFESchema = Joi.array().items(
  Joi.object({
    IDSAPORIGEM: Joi.number().required()
      .messages({
        "number.base": "IDSAPORIGEM must be a number",
        "any.required": "IDSAPORIGEM is required field"
      }),
  })
);

export default consultaNFESchema;
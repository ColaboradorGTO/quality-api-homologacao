import Joi from 'joi';
import promocaoFields from './promocaoFields.js';

const createPromocaoProdutoSubGrupoSchema = Joi.object(promocaoFields);

export default createPromocaoProdutoSubGrupoSchema;

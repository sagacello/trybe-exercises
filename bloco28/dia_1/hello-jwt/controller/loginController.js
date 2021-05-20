const Joi = require('joi');
const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = process.env;

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */

  Joi.object({
    // passa o corpo inteiro da validação
    username: Joi.string().min(5).alphanum().required(), //string alfanumerica de 5 caracteres
    password: Joi.string().min(5).required(),
  }).validate(body);

module.exports = async (req, res, next) => {
  /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);

  /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  const admin =
    req.body.username === 'admin' && req.body.password === 's3nh4S3gur4???';
    console.log(admin)
  if (error) return next(error);
  if (req.body.username === 'admin' && req.body.password !== 's3nh4S3gur4???') {
    // o admin tem que ter esse username e essa senha , se ele nao tiver essa senha da erro
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  // por padrão admin é falso , se ele nao receber esse valor ele sera falso se ele
  // receber essa condiçao ele sera um booleano == true
  const payload = {
    username: req.body.username, // recebe qualquer username do corpo
    admin,//booleano 
  };
  const JWT_SECRET = 'meuSegredoSuperSegreto';
  const token = jwt.sign(payload, JWT_SECRET, { // gera o token a partir dos elementos do corpo 
    expiresIn: '1h',
  });

  res.status(200).json({ token });
};

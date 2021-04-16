const jwt = require('jsonwebtoken');

const JWT_SECRET = 'meuSegredoSuperSegreto';

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    const err = new Error('Token not found');//Erro se o token nao existir
    err.statusCode = 401;
    return next(err);
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    /* Armazenamos os dados da pessoa no objeto de request */ 
    // ---------------------- PASSO IMPORTANTE ----------------------------------------
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err);
  }
};

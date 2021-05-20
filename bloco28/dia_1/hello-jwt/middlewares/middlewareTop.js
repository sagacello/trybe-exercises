
// ----------------- O middlewareAuth que cria u user a partir do req.user = payload; 
// ele recebe o payload , esse payload recebe o tolken que vem da autenticaçao
middlewareTop = (req, res, next) => {
    const { user } = req;
    console.log(user)
    if (!user) {
      const err = new Error('This endpoint requires authentication');
      err.statusCode = 401;
      return next(err);
    }

    if (!user.admin) {
      const err = new Error('Restricted access');
      err.statusCode = 403;
      return next(err);
    } // porque admin já esta setado por padrão como falso
    // portanto se ele for verdadeiro ja segue 

    /* Se nenhuma das condições acima forem verdadeiras, */
    /* a pessoa é admin e podemos continuar com a request */
    next();
}

module.exports = middlewareTop;
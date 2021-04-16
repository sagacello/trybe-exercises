const userController = async (req, res, next) => { // o token valida e aqui so transmite se estiver validado
  const { username, admin } = req.user;
  res.status(200).json({ username, admin });
};

module.exports = userController

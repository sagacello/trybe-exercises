const topController = async (req, res, next) => {
  // o token valida, e nesse arquivo aqui so transmite se estiver validado
  res.status(200).json({ secretInfo: 'Peter Parker é o Homem-Arannha' });
};

module.exports = topController;

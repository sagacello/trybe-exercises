const cepService = require('../services/cepService');

const findById = async (req, res) => {
  const { cep } = req.query;
  if (!cepService.isValid(cep))
    return res.status(400).json({ message: 'CEP inválido' });

  const ceps = await cepService.findBycep(cep);

  if (!ceps) return res.status(404).json({ message: 'CEP não encontrado' });

  res.status(200).json(ceps);
};

// Consulta por estado:
// http :3000/statistic?uf=MG
// Consulta por cidade:
// http :3000/statistic?cidade=Belo Horizonte

const statisticCEP = async (req, res) => {
  try {
    const { uf, cidade } = req.query; // capturando do formato
    let result;
    if (uf) result = await cepService.log(uf);
    else result = await cepService.log(cidade);
    if (!result)
      return res
        .status(404)
        .json({ message: `${uf ? 'Estado' : 'Cidade'} não encontrado` });
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  findById,
  statisticCEP,
};

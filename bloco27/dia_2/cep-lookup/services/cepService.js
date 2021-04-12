const cepModel = require('../models/cepModel');
const apiService = require('./apiService');

const findBycep = async (cep) => {
  const cepDataApi = await apiService.findBycep(cep);
  const cepDataBanco = await cepModel.findBycep(cep);
  const { uf, cidade } = cepDataApi;
  await cepModel.logUF(uf);// se a informaçao nao estiver no banco de dados 
  // retorna nullo
  await cepModel.logCity(cidade);
  if (cepDataBanco) {
    const { uf, cidade } = cepDataBanco;
    await cepModel.updateLogUF(uf);
    await cepModel.updateLogCity(cidade);
    return cepDataBanco;
  }
  if (!cepModel.findBycep(cepDataApi)) {
    await cepModel.addCep(cepDataApi); // adiciono no banco
    return cepDataApi;
  }
  return cepDataApi;
};

const isValid = (cep) => cep && cep.match(/^\d{5}-?\d{3}$/);
// regex para validar cep

const log = async (uf, cidade) => {
  // essa funçao vai ser exclusiva para capturar do banco de dados as informações
  // e mostrar na tela , porque todoas as alteraçoes ja sao feitas nas funçoes anteriores
  if (uf) return await cepModel.logUF(uf);
  return await cepModel.logUF(cidade);
};

module.exports = {
  findBycep,
  isValid,
  log,
};

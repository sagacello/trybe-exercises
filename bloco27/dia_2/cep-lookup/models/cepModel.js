const connection = require('./connection');
// const { ObjectId } = require('mongodb');

const findBycep = async (cep) =>
  connection().then((db) => db.collection('cep').findOne({ cep }));

const updateLogUF = async (uf) => {
  const db = await connection();
  const findByUf = await db.collection('uf_estatistica').findOne({ uf });
  if (!findByUf || !findByUf.quantidade) {
    return await db//se nao exister insere
      .collection('uf_estatistica')
      .insertOne({ uf, quantidade: 1 });
  }
  findByUf.quantidade += 1;// se ja existir soma um depois insere
  return await db
    .collection('uf_estatistica')
    .updateOne({ uf }, { $set: { quantidade: findByUf.quantidade } });
};

const updateLogCity = async (cidade) => {
  const db = await connection();
  const findCity = await db
    .collection('cidade_estatistica')
    .findOne({ cidade });
  if (!findCity || !findCity.quantidade) {
    return await db
      .collection('cidade_estatistica')
      .insertOne({ cidade, quantidade: 1 });
  }
  findCity.quantidade += 1;
  return await db
    .collection('cidade_estatistica')
    .updateOne({ cidade }, { $set: { quantidade: findCity.quantidade } });
};

const addCep = async ({ uf, cidade, bairro, logradouro, cep }) =>
  connection()
    .then((db) =>
      db.collection('cep').insertOne({ cep, uf, cidade, bairro, logradouro })
    )
    .then((result) => result);

const logUF = async (uf) => {
  const db = await connection();

  const result = await db.collection('uf_estatistica').findOne({ uf });
  if (!result) return null;
  return result;
};

const logCity = async (cidade) => {
  const db = await connection();
  const result = await db.collection('cidade_estatistica').findOne({ cidade });
  if (!result) return null;
  return result;
};

module.exports = {
  findBycep,
  addCep,
  updateLogUF,
  updateLogCity,
  logUF,
  logCity,
};

const { ObjectId } = require('bson');
const connect = require('./connection');

const getAll = async () => {
  return connect()
    .then((db) => db.collection('books').find().toArray());
};

const getById = async (id) => {
  const books = await connect().then((db) => db.collection('books').findOne(ObjectId(id)));
  if (!books) return null;
  return books;
};

const create = async (title, author_id) => {
  connect()
    .then((db) => db.collection('books').insertOne({ title, author_id }));
}

module.exports = ({
  getAll,
  getById,
  create,
});
const connection = require('./connection');

// Cria uma string com o nome completo do autor

const getNewAuthor = (authorData) => {
const { id, firstName, middleName, lastName } = authorData;

const fullName = [firstName, middleName, lastName]
  .filter((name) => name)
  .join(' ');

return {
  id,
  firstName,
  middleName,
  lastName,
  name: fullName,
 };
};

// Serializa o nome dos campos de snake_case para camelCase

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name});

// Busca todos os autores do banco.

// const getAll = async () => {
//   const [authors] = await connection.execute(
//     'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
//   );
//   return authors.map(serialize).map(getNewAuthor);
// };

const getAll = async () => {
  return connection()
    .then((db) => db.collection('authors').find().toArray())
    .then((authors) =>
      authors.map(({ _id, firstName, middleName, lastName }) =>
        getNewAuthor({
          id: _id,
          firstName,
          middleName,
          lastName,
        })
      )
  );
}

// const create = async (first_name, middle_name, last_name) => await connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES ( ?, ?, ?)',
//   [first_name, middle_name = '', last_name]
// );

const create = async (firstName, middleName, lastName) =>
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => getNewAuthor({ id: result.insertedId, firstName, middleName, lastName }));

const isValid = (firstName, _middleName, lastName) => {
  if(!firstName || typeof firstName !== 'string') return false;
  if(!lastName || typeof lastName !== 'string') return false;
  return true;
}

module.exports = {
  getAll,
  create,
  isValid,
};
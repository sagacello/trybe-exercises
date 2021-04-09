const connection = require('./connection');

const serialize = (objeto) => {
  //metodo para padronizar a estrutura
  return {
    id: objeto.id,
    firstName: objeto.first_name,
    middleName: objeto.middle_name,
    lastName: objeto.last_name,
  };
};

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  // esse metodo junta o nome todo em uam string so com espaçamento em cada elemento do array
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const getAuthorId = async (id) => {
  const [
    authorData,
  ] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?',
    [id]
  );
  authorData.length === 0
    ? null
    : ({ firstName, middleName, lastName } = authorData.map((item) =>
        serialize(item)
      )[0]);
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const isValid = (firstName, middleName, lastName) => {
  (!firstName || typeof firstName !== 'string') && false;
  (!lastName || typeof lastName !== 'string') && false;
  return true;
};

 const create = async (first_name, middle_name, last_name) => await connection.execute(
   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES ( ?, ?, ?)',
   [first_name, middle_name = '', last_name]
 );

const getAll = async () => {
  const [autores] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM authors'
  );
  return autores
    .map((item) => serialize(item))
    .map((item) => getNewAuthor(item));
  // ou return autores.map(serialize).map(getNewAuthor)
};

module.exports = {
  getAll,
  getAuthorId,
  create,
  isValid,
};

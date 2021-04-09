const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT title, author_id FROM books';
  const [books] = await connection.execute(query);
  return books;
};
//  'SELECT title, author_id FROM books'
// O caractere `?` na query será substituído pelo `authorId` que informamos no Array.
const getId = async (authorId) => {
  const query = `SELECT title, author_id, id FROM books WHERE author_id = ?`;
  const [books] = await connection.execute(query, [authorId]);
  return books;
};

const isValid = async (title, authorId) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await getId(authorId))) return false;
  return true;
};

const create = async (title, authorId) =>
  await connection.execute('INSERT INTO model_example.books VALUES (?,?,?)', [
    null,
    title,
    authorId,
  ]);

module.exports = {
  getId,
  getAll,
  isValid,
  create,
};

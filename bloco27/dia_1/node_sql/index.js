const express = require('express');
const app = express();

const authors = require('./routes/authors');
const books = require('./routes/books');

app.use('/books', books);
app.use('/authors', authors);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
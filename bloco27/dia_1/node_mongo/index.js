const express = require('express');

const Author = require('./models/Author');
const Books = require('./models/Book');

const app = express();

app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if(!Author.isValid(first_name, middle_name, last_name)) return res.status(400).json({message: 'Dados invalidos'});
  Author.create(first_name, middle_name, last_name);
  res.status(201).json({message: 'Autor adicionado com sucesso'});
})

app.get('/books', async (_req, res) => {
  const books = await Books.getAll();
  if (!books) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Books.getById(id);
  if (books.length < 1) return res.status(404).json({ message: 'Not found'});
  res.status(200).json(books);
})

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  await Books.create(title, author_id);
  res.status(201).json({message: 'Livro adicionado com sucesso'});
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
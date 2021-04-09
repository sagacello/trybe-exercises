const express = require('express');
const app = express.Router();
const Book = require('../models/Book');
app.use(express.json());

app.get('/', async (_req, res) => {
  const books = await Book.getAll();
  res.status(200).json(books);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getId(id);
  return !books
    ? req.status(404).json({ message: 'Não encontrado' })
    : res.status(200).json(books);
});

app.post('/', async (req, res) => {
  const { title, author_id } = req.body;
  if(!await Book.isValid(title, author_id)) return res.status(404).json({ message: 'Dados invalidos'});
  await Book.create(title, author_id);
  res.status(201).json({message: 'Livro adicionado com sucesso'});
})

module.exports = app;

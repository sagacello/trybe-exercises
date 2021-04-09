const express = require('express');
const Author = require('../models/Author');
const app = express.Router();
app.use(express.json());

app.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/:id', async (req, res) => {
  const { id } = req.params;
  const authors = await Author.getAuthorId(id);
  !authors
    ? res.status(404).json({ message: 'Não encontrado' })
    : res.status(200).json(authors);
});

app.post('/', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name))
    return res.status(400).json({ message: 'Dados inválidos ' });
    await Author.create(first_name, middle_name, last_name);
   return res.status(201).json({ message: 'Autor criado com sucesso' });
});

module.exports = app;

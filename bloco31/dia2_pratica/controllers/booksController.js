const express = require('express');
const { Books } = require('../models/book');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const book = await Books.findAll();
      if (!book) return res.status(500).json({ message: 'Livro não encontrado' });
      return res.status(200).json(book);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Algo deu errado' });
    }
  });

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);
    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await Books.create({  title, author, pageQuantity });

    return res.status(201).json(newBook);    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Books.update(
      { title, author, pageQuantity },
      { where: { id } },
    );
    console.log(updateBook); // confira o que é retornado quando o user com o id é ou não encontrado;

    if(!updateBook) return res.status(404).json({ message:'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Books.destroy(
      { where: { id } },
    );

    console.log(deleteBook) // confira o que é retornado quando o user com o id é ou não encontrado;

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

module.exports = router;
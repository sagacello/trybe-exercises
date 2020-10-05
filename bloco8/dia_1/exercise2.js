//Retorne o nome do livro de menor nome.
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function smallerName() {
  let nameBook = '';
  let livros = []
  books.forEach((book) => {
     livros.push(book['name'].length)
     let minimo = livros.map(Number).reduce(function(a, b) {
        return  Math.min(a, b);    
    });
    if(book['name'].length == minimo){
        nameBook =  book['name']   
    } 
    });
  return nameBook;
}
//condicao ? valor1 : valor2
//Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2. 
//Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.

assert.deepStrictEqual(smallerName(), 'Duna');
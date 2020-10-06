//Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade,
// ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
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

const expected_result = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];

function nameAndAge() {
    let objetoFinal = books.map((busca) => ({
        age : busca['releaseYear'] - busca['author']['birthYear'],
        author: busca['author']['name']//dentro de books eu ja tenho author e age , o array novo sera modificado da forma que eu quero 
        // no meu retorno eu estou estipulando o que eu quero 
    })).sort((a , b) => a['age'] - b['age']) // sort percorre todo o objeto , mas como eu apontei somente para age ,esse metodo so vai ser 
    //aplicado no age
    return objetoFinal
   
}

//console.log(nameAndAge())


/*function nameAndAge2() {
    let idade = books.map((busca) => (
        busca['releaseYear'] - busca['author']['birthYear'] 
    )).sort((a,b) => a - b)

    let autor = books.map((busca) => 
        busca['author']['name']
    ).sort((a,b) => a - b)

    let objetoFinal2 = []
   for(let i  = 0 ; i < idade.length; i += 1){
        objetoFinal2.push({ ['age'] : idade[i],
                            ['author'] : autor[i]})
   }
   return objetoFinal2
}
console.log(nameAndAge2())*/

assert.deepStrictEqual(nameAndAge(), expected_result);
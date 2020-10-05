const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});


  /* Cada elemento do array: josé
  Index, posição do elemento: 0
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 50
  Index, posição do elemento: 1
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: 0.25
  Index, posição do elemento: 2
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
  ---------------
  Cada elemento do array: { comida: 'Chocolate' }
  Index, posição do elemento: 3
  Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ] */

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);


//A função find é utilizada para achar o primeiro elemento que satisfaça a condição passada. 
//Então, a função que deverá ser passada precisa retornar true ou false.
const numbers = [19, 21, 30, 3, 45, 22, 15];
const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.find(verifyEven);
console.log(isEven); // 30


console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True
// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2); // 30


//As funções some e every são parecidas. A primeira retorna true se ao menos um elemento de um array satisfaz 
//a uma condição. A segunda retorna true se todos os elementos de um array satisfazem a uma condição.
const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];
const verifyFirstLetter = (letter, names) => {
  return names.some((name) => name[0] === letter);//o retorno é uma arrow function que tem a funçao some aplicada  dentro da  função verifyFirstLetter
  // a funçãoa vai pegar o array names , e deve-se passar um parametro novo que será name , esse name vai ser uma variavel como se fosse um i que vai percorrer todo o array 
  // e vai pegar cada elemento do array, e name[0] vai representar a primeira letra do nome , ou a primeira caracateristica de cada elemento do array 
  // e se esse nome o caracteristica for igual a letter retorna true .
};
console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false



const notes = {
    portugues: 'Aprovado',
    matematica: 'Reprovado',
    ingles: 'Aprovado',
  };
  
  const verifyNotes = (notes) => {
    return Object.values(notes).every((note) => note === 'Aprovado');
    //usou object.values para retornar um array com todos os VALORES e aplicou every nesse array , e dentro desse array a varaivel criada note 
    // note vai percorrer notes e se algum elemento nao for igual a Aprovado nao retorna nada , se todos os  note fossem igual a aprovado retornaria um true

  };
  
  console.log(verifyNotes(notes));



  //Como pode ver, a forma como ela faz a ordenação dos elementos do array não é tão intuitiva. Ela ordena sempre por ordem alfabética. 
  //E se o array possui algum elemento que não é uma string, a sort a ordena de acordo com a ordem alfabética dos códigos desse elemento na tabela de caracteres
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){ return a - b });
console.log(points); // [1, 5, 10, 25, 40, 100]s
//Se a operação de elemento1 com elemento2 der resultado negativo, elemento1 vai para trás. Caso contrário, vai para frente, para, de forma decrescente,
// só inverter elemento1 - elemento2 para elemento2 - elemento1.
// se retornar zero a e b ficam inalterados
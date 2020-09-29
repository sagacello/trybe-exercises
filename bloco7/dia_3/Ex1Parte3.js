//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, 
//caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');


const greetPeople = (people) => {
    let saudar = []
    for(let i = 0 ; i < people.length; i+= 1){
        saudar.push(`Hello ${people[i]}`)
    }
    return saudar

  };
  
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  let output = greetPeople(parameter);
  assert.deepStrictEqual(output, result);
  greetPeople(parameter)
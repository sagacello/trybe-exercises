//Escreva a função addAllnumbers para passar nos testes já implementados.

const assert = require('assert');
function addAllnumbers(array) {
    let soma = 0;
    for (let numeros in array) {
      soma += array[numeros];
    }
    return soma;
  };
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
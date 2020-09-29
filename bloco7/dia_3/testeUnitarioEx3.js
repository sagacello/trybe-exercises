const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1); //(índice, número de elementos) exemplo array.splice(2);  // Todos os elementos a partir do índice 2 serão removidos
      i -= 1; // vou ter um 1 i a menos
      len -= 1; //meu len vai diminuir em 1 
    }
  }

  return arr;
}
//O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
//assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);
let novoArray = [11, 12, 13, 14] 
assert.deepStrictEqual(myRemoveWithoutCopy(novoArray), novoArray);// não sofreu alterações 
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]); // funciona dessa forma , mesmo passando um elemento que não tem na lista


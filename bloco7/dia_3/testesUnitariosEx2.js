const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); 
// a diferença entre deepStrictEqual , e strictEqual é que strictEqual utiliza == em sua comparação 
//e deepStrictEqual utiliza === , === compara igualdade e estrutura  
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); //testando o erro

let array2 = [10,11,12,13]
assert.deepStrictEqual(myRemove([10,11,12,13], 13), [10,11,12]); //testado com novo array

assert.deepStrictEqual(myRemove([1, 2, 3, 4]), [1, 2, 3, 4]); //não modifica parametros


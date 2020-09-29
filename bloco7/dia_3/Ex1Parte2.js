//Escreva a função addOne para passar nos testes já implementados.
const assert = require('assert');
function addOne(myArray){
    let novoArray = []
    for(let i = 0 ; i < myArray.length ; i+=1 ){
        novoArray.push(myArray[i] + 1)
    }
    return novoArray
    console.log(novoArray)
}


const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

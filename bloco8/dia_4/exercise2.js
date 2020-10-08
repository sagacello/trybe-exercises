//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
const assert = require('assert')

const sum = (...numeros) => {
    let contador = 0
    for(numero of numeros){
        contador += numero
    }
    return contador

    //for(numero in numeros){
        //contador += numeros[numero]
   // }
}

assert.equal(sum(), 0)//se nada entrar retorna o proprio contador
assert.equal(sum(1), 1)
assert.equal(sum(1, 2), 3)
assert.equal(sum(1, 2, 3), 6)
assert.equal(sum(1, 2, 3, 4), 10)
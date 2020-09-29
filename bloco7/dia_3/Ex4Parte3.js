//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e,
// caso não esteja, altere o código para que ele passe nos testes.
const assert = require('assert');
//exemplo : scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode

// para ordenar em ordem crescente function compararNumeros(a, b) {
 // return a - b;  vai comparar o array todo um elemento com o outro e o que for maior ordena ,funciona com numeros
 //}

 //Funciona assim: são comparados a e b, e caso:
//a comparação seja menor que zero, a é posicionado antes de b
//a comparação seja maior que zero, a é posicionado depois de b
//a comparação seja igual a zero, a e b permancem com as posições inalteradas

function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y; 
        //return y - x  ordena de forma decrescente
    });
    results.push(array[1], array[2])
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

secondThirdSmallest(parameter)

assert.strictEqual(typeof secondThirdSmallest, 'function');// pode ter um terceiro argumento que é um comentario //verifico que de fato é uma função 
const output = secondThirdSmallest(parameter); 

assert.deepStrictEqual(output, result);

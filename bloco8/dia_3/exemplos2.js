const numbers2 = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;//vai comparar todos os valores do array e pegar o maior 

const bigger = numbers2.reduce(getBigger,0);
console.log(bigger); // 85




const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue//vai somar todos os valores pares e me retorna a variavel que acumula essa soma 
);

const sumNumbers = (array) => array.reduce(sumPair);

console.log(sumNumbers(numbers)); // 152
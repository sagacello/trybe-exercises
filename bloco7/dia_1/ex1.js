//1 Crie uma função que receba um número e retorne seu fatorial.
function fatorial(n){
    let fact = 1
    for(let i = 1; i <=n ; i+= 1){
        fact *= i
   }
   return fact

}
console.log(fatorial(4))


function fatorial1(n){
    let numero = 1 
    if(n > 1){
        numero = n * fatorial(n -1)
    }
    return numero
}

console.log(fatorial1(4))


const facto = number => number > 1 ? number * facto(number - 1) : 1// o 1 aqui representa quantas vezes isso via se repetir 
//o ? é igual um if 
console.log(facto(4))
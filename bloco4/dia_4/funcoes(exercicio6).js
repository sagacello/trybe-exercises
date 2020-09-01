//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
function somaN(n){
    let lista = []
    let contador = 0
    for(let i = 0 ; i <= n ; i += 1){
        lista.push(i)
    }
    console.log(lista)
    for(let numeros in lista){
        contador += lista[numeros]
    }console.log(contador)
   
}

let n = 5

somaN(n)
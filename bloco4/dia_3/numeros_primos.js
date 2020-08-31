//Faça um programa que diz se um número definido numa variável é primo ou não.
function detectaPrimo(){
    let numeroAnalisado = 318
    let contador = 0
    for(let i = 1 ; i <= numeroAnalisado ; i+= 1){ // vai dividindo o numero requirido do 1 até o proprio numero
        if(numeroAnalisado % i === 0){//se a divisão der igual a zero o contador recebe 1
            contador += 1
        }
    }if(contador === 2){// se o contaduro for igual a 2 é primo ,caso contrario não !
        console.log("É primo")
    }else {
        console.log("Não é primo")
    }
    
    
}
detectaPrimo()
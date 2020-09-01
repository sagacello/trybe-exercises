//Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
//Considere que a string ending sempre será menor que a string word.

function separaPalavra(palavra){
    let comeco = ""
    let fim = ""
    for(let i = 0 ; i <= palavra.length - 3; i+= 1){
        comeco += palavra[i]     
    }
    for(let i = palavra.length - 2 ; i <= palavra.length -1 ; i+= 1){
        fim += palavra[i]     
    }
    console.log(verificaComecoFim(comeco, fim))    
}

function verificaComecoFim(comeco ,fim){
    if((palavra[palavra.length - 2] + palavra[palavra.length -1]) == fim){
       return true
    }
    else
        return false
}


palavra = "trybe"
separaPalavra(palavra)
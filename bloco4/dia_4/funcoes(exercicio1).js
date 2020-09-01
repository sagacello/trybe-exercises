function palindromo(palavra){
       let contraria = ""
    for(let i = palavra.length -1 ; i >= 0 ; i-= 1)
        contraria += palavra[i]
    if(contraria === palavra){
        return true
    }else{
        return false
    }
}

let palavra = "arara"
console.log(palindromo(palavra))

function palindromo2(palavra){
    let contraria = palavra.split("").reverse().join("")
    if(contraria === palavra){
        return true
    }else{
        return false
    }  

}

console.log(palindromo2(palavra))

function valoresImapres(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let somaImpar = 0
    for(i = 0 ; i < numbers.length ; i ++){
        if( numbers[i] % 2 != 0){
            somaImpar ++
        }
    }
    if( somaImpar > 0 )
        console.log("Existem "+ somaImpar +" valores impares")
    else
        console.log("Não existem valores impares")
}

valoresImapres()
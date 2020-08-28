function mediaValores(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let media = 0 ;soma = 0
    for(i = 0; i < numbers.length; i++ ) {
        soma += numbers[i]     
    }
    media = soma/numbers.length
    if(media > 20)
        console.log("valor maior que 20")
    if(media < 20)
        console.log("valor menor que 20")
}

mediaValores()
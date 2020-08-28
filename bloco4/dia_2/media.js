function media(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let media = 0 ;soma = 0
    for(i = 0; i < numbers.length; i++ ) {
        soma += numbers[i]     
    }
    media = soma/numbers.length
    console.log(media)
}

media()
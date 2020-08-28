function maiorValor(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let maior = 0
    for(i = 0 ; i < numbers.length ; i++){
        if(numbers[i] > maior ){
            maior = numbers[i]
        }    
    }
    console.log(maior)
}


function maiorValor2(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let maior = Math.max.apply(null, numbers );
    console.log(maior)
    }


maiorValor()
maiorValor2()

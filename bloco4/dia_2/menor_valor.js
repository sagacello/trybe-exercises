function menorValor(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let menor = 111110
    for(i = 0; i < numbers.length ; i++){
        if(numbers[i] < menor ){
            menor = numbers[i]
          
        }    
    }
    console.log(menor)
}


function menorValor2(){
    let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let menor = Math.min.apply(null, numbers1 );
    console.log(menor)
    }





menorValor()
menorValor2()

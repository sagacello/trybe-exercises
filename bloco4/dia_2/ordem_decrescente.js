function ordem_decrescente(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let i = 1; i < numbers.length; i++) { 
        for (let j = 0; j < i; j++) { 
        if (numbers[i] > numbers[j]) {  
            let posicao = numbers[i]; 
            numbers[i] = numbers[j]; 
            numbers[j] = posicao;
        }
        }
       
    }
    console.log(numbers) 
}  

ordem_decrescente()
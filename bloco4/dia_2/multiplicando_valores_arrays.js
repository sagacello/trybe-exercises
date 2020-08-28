function multiplicandoArrays(){
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let lista = [];

    for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1]) {//para o elemento seguinte
        lista.push(numbers[i] * numbers[i + 1]);// a lista vai adicionar o elemento anterior vezes o elemento a frente
    } else {
        lista.push(numbers[i] * 2);// se não houver um numero seguinte ele vai ser multiplicado por 2 
    }
    }

    console.log(lista);
}
    
multiplicandoArrays()
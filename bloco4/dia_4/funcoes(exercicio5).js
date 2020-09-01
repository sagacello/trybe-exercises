function constroiLista(){
    let listaNumerica = [2, 3, 2, 5, 8, 2, 3]
    //for(let i = 0 ; i < 3 ; i+= 1){
   //     listaNumerica.push(Math.ceil(Math.random() * 100))
   // }
    console.log(listaNumerica)
    valorRepetido(listaNumerica)
}

function valorRepetido(listaNumerica){
    let contador = 0 
    let valor = 0
    for(i = 0; i < listaNumerica.length; i++) {
        if(listaNumerica[i] === listaNumerica[i+1] || listaNumerica[0] === listaNumerica[i] ) { 
            contador += 1
            valor = i
        }           
    }
    console.log("O valor que mais se repete é o " + listaNumerica[valor] + " ele se repete " + contador + " vezes")
}

constroiLista()

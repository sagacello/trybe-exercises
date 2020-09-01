function maiorValor(listaNumerica){
    let numeroMaior = 0
    for(let valores in listaNumerica){
        if(listaNumerica[valores] > listaNumerica[numeroMaior]){
            numeroMaior = valores
        }
       
      }
    console.log("O maior número é " + listaNumerica[numeroMaior] + "\n" + "Seu indice é " +  numeroMaior)
}


function constroiLista(){
    let listaNumerica = []
    for(let i = 0 ; i < 15 ; i+= 1){
        listaNumerica.push(Math.ceil(Math.random() * 100))
    }
    console.log(listaNumerica)
    maiorValor(listaNumerica)
}
constroiLista()

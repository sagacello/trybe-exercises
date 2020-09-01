function maiorValor(listaNumerica){
    let numeroMenor = 0
    for(let valores in listaNumerica){   
        if(listaNumerica[valores] < listaNumerica[numeroMenor]){
            numeroMenor = valores // o indice passa a ser o indice do menor    
        }
          
      }
    console.log("O menor número é " + listaNumerica[numeroMenor] + "\n" + "Seu indice é " +  numeroMenor)
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

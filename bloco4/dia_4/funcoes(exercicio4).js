function maiorQuantidadCaracteres(lista){
    let palavraMaior = lista[0] // recebe o primeiro elemento da lista
    
    for(let indice in lista){
        if(lista[indice].length > palavraMaior.length){// se o tamanho da primeira palavra do loop for maior que o tamanha do primeira palavra selecionada como (palavraMaior)
            palavraMaior = lista[indice] // palavra maior passa a ser a lista[indice]
            
        }

    }console.log(palavraMaior)

}
let lista =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

maiorQuantidadCaracteres(lista)
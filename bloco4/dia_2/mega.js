function mega(){
    let numerosJogados = [7,16,28,31,37,55]

    let megaNumeros = []
    quantidade_de_numeros = 6
    //ceil é para arredondar
    // um numero aleatorio de 1 até 60 , o random começa no minimo do elemento 0,0001 que será arredondado para 1 nesse caso 
    //let gerarNumero = Math.ceil(Math.random() * 60) // arredondado numeros para cima

    // para o for ( começa na variavel de controle que é o primeiro argumento e vai até o momento de parada que é o segundo argumento )
    let numeroAcertos = 0
    for (let i = 0; i < quantidade_de_numeros; i+= 1) {
        megaNumeros.push(Math.ceil(Math.random() * 60))
        }
    for(let i = 0 ; i < megaNumeros.length ; i += 1){
        for(let j = 0; j< numerosJogados.length ; j += 1){
           if( megaNumeros[i] === numerosJogados[j]){
                numeroAcertos += 1
           }
        }

    }
    console.log(megaNumeros)    
    console.log(numeroAcertos)
    console.log("comparacao entre " + megaNumeros + " e " + numerosJogados +" e a igualdade foi " + numeroAcertos)

}



mega()


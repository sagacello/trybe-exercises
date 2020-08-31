//Faça uma pirâmide com n asteriscos de base, que seja vazia no meio:

function piramideVazioCentro(){
    let linha = "" ; 
    let quantidadeAsteriscos = 4
    for(let i = 0 ; i <= quantidadeAsteriscos ; i += 1){
        linha += " ".repeat(quantidadeAsteriscos -i) + "*".repeat(i+1) + "*".repeat(i) +  "\n" 
        if(i == Math.ceil(quantidadeAsteriscos/2)){
            linha += "\n" 
        }
    }
   
    console.log(linha)                                                     
}
piramideVazioCentro()




function piramide(){
    let linha = "" ; 
    let quantidadeAsteriscos = 4
    for(let i = 0 ; i <= quantidadeAsteriscos ; i += 1){
        linha += " ".repeat(quantidadeAsteriscos -i) + "*".repeat(i+1) + "*".repeat(i) +  "\n" 
        
    }
    
   
    console.log(linha)                                                     
}
piramide()


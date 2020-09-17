function trianguloContraio(){
  let linha = ""
  let quantidadeAsteriscos = 4
  for(let i = 1 ; i <= quantidadeAsteriscos ; i += 1){
    for(let j = 1 ; j > i ; j += 1 ){
      linha += " ".repeat(quantidadeAsteriscos - i) + "*".repeat(i -1)  +"\n"  
      console.log(linha)
    }
  }
}
trianguloContraio()


function triangulo(){
    let linha = ""
    let quantidadeAsteriscos = 5
    for(let i = 1 ; i <= quantidadeAsteriscos ; i += 1)
        linha += "*".repeat(i) + "\n" // vai concatenar todos * conforme o loop avança 
    console.log(linha)                                                     
}
triangulo()

//O método repeat() constrói e retorna uma nova string com o determinado número de cópias concatenadas da string na qual ele foi chamado
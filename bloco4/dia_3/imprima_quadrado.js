
function quadrado(){
    let linha = ""
    let tamanhaQuadradoLinha = 5
    let tamanhaQuadradoAltura = 5
    for(let i = 1 ; i <= tamanhaQuadradoAltura ; i += 1)
        linha += "*".repeat(tamanhaQuadradoLinha) + "\n" // vai concatenar todos * conforme o loop avança 
    console.log(linha)                                                     
}
quadrado()

//O método repeat() constrói e retorna uma nova string com o determinado número de cópias concatenadas da string na qual ele foi chamado

function triangulo_contrario(){
    let linha = ""
    let quantidadeAsteriscos = 5
    for(let i = 1 ; i <= quantidadeAsteriscos ; i += 1)
        linha += " ".repeat(quantidadeAsteriscos - i) + "*".repeat(i) + "\n" //na primeira linha vai ter espaço vazio repetido 4 vezez nesse caso mais o asteriscos repetido 1 vezes mais um quebra linha
    console.log(linha)                                                     // cada repetição a quantidade de espaços vazios vai diminuir porque o i aumenta
}
triangulo_contrario()

//O método repeat() constrói e retorna uma nova string com o determinado número de cópias concatenadas da string na qual ele foi chamado
//2 Crie uma função que receba uma frase e retorne qual a maior palavra.
function maior(frase){
    frase = frase.split(' ')
    let maiorPalavra = 0
    let conteudo = ''
    for(palavras in frase){
        if(palavras.length > maiorPalavra){ //comparação numerica
            maiorPalavra = palavras.length // maiorPalavra passa a ser a palavra maior 
            conteudo = frase[palavras] //conteudo recebe essa palavra
        }
    }
    console.log(conteudo)
}

maior("marcelo ivan violaaaaaa")


const maior2 =  frase => {
    frase = frase.split(' ')
    let maiorPalavra = 0
    let conteudo = ''
    for(palavras1 in frase){
        if(palavras1.length > maiorPalavra){ //comparação numerica
            maiorPalavra = palavras1.length // maiorPalavra passa a ser a palavra maior 
            conteudo = frase[palavras1] //conteudo recebe essa palavra
        }
    }
    console.log(conteudo)
}

maior2("marcelo ivan violaaaaaa")

const maior3 = frase =>  {
    frase = frase.split(" ")
    let maiorPalavra = 0 
    let conteudo = ''
    for(let palavras of frase){
        if(palavras.length > maiorPalavra){
            maiorPalavra = palavras
            conteudo = palavras
        }
    }return conteudo

}

console.log(maior3("marcelo ivan violaaaaaa"))
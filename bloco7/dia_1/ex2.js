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

maior("marcelo ivan")


const maior2 =  (frase) => {
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

maior("marcelo ivan")
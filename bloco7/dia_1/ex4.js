// ex4 Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela
// string que você passou como parâmetro. Sua função deve retornar essa nova string. 
//Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve 
//retornar essa nova string. Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:

const skills = ['PYthon' ,'javascript' ,'css' ,'html']

function parametro(frase) {
    let fraseModificada = ''
    fraseModificada = frase.replace(/X/gi,'acertei') // substitui todos os X tanto maiusculo quanto minusculo pelo meu argumento
    return fraseModificada
}    


//arrow 
let frase = 'marcelo ivan x'
function construirSentenca(frase) {
    let parametro1 = frase => frase.replace(/X/gi,'acertei') 
    let resultado =  `Eu ${parametro1(frase)} em esolher : `    
   
    skills.forEach((skill , indice) => {
        resultado = 
        `${resultado} 
        - ${skill}`
    })
    return resultado
}
console.log(construirSentenca(frase))
//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
    const contaLetras = (acumulador , string) => {
        string.map((busca) => {
            console.log(busca)
        })        

    }
    return names.reduce(contaLetras)

}
console.log(containsA())
//assert.deepEqual(containsA(), 20);


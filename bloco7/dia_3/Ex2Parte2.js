//Escreva a função wordLengths para passar nos testes já implementados.
const assert = require('assert');
const wordLengths = words => {
    let tamanho = []
    for(palavras in words){
        tamanho.push(words[palavras].length)
    }
    return tamanho
}

wordLengths(['sun', 'potato', 'roundabout', 'pizza'])
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
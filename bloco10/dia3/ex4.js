const alta = (string) => string.toUpperCase();

const primeira = (string) => string[0]

const junta = (string1, string2) => string1.concat(string2)

console.log(junta('marcelo', ' ivan'))


module.exports = {alta, primeira, junta};
//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
const assert = require('assert')

const greet = (name ,msg) => {
    return `Hi ${name}`
}
assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")
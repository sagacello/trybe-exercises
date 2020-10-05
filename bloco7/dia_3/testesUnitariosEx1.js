const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers'); //esse termo serve para lançar exceção , neste caso se nao for um numero lança a mensagem
  }

  return a + b 
  ;
}

assert.strictEqual(sum(4,5), 9)
assert.strictEqual(sum(0,0), 0)
//sum(4, "5") 
  

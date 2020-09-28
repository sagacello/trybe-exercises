//Object.assign
//Esse método é utilizado para copiar os valores de todas as propriedades
// de um ou mais objetos para um objeto destino. Sua estrutura é:
const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };

const numero = {
    0 : 10 ,
    1 : 20
}
  
  Object.assign(person, info, family)
  Object.assign(person , numero)
  console.log(person) // adicionei dentro de person o objeto info e family , adiciona em primeiro
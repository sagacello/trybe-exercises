//Object.entries
//O método Object.entries retorna um array com os pares chave / valor do objeto.
const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);
  for( let objetos in pairKeyValue){
      console.log(`A capital do País ${ pairKeyValue[objetos][0]} é ${pairKeyValue[objetos][1]} `)
  }


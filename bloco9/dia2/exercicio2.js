const promise = new Promise((resolve, reject) => {
    const lista = Array.from(
        { length: 10 }, // nova forma de criar array
        () =>  Math.floor(Math.random() * 50));
    const somaTudo = lista.map(busca => (busca **2)).reduce((soma, item) => { // funçao ideal para fazer qualquer coisa 
       soma += item;
       return soma;
    });
    console.log(somaTudo)
    if (somaTudo > 8000) {
      resolve(somaTudo);
    }
    reject(somaTudo);
  })
  // o que esta sendo passado no resolve vai cair aqui no then
  //.then(podeseroutracosia => console.log(`O resultado foi ${podeseroutracosia}`))
 // .catch(somaTudo => console.log(`Que fracasso =( Nosso número foi ${somaTudo}`));


  // outra forma
  const dentroDessa = () => {
   return  new Promise((resolve, reject) => {
        const lista = Array.from(
            { length: 10 }, // nova forma de criar array
            () =>  Math.floor(Math.random() * 50));
        const somaTudo = lista.map(busca => (busca **2)).reduce((soma, item) => { // funçao ideal para fazer qualquer coisa 
           soma += item;
           return soma;
        });
        if (somaTudo > 8000) {
          resolve(somaTudo);
        }
        reject(somaTudo);
      })
  }

dentroDessa()
.then(divisao => [2,3,5,10].map(busca => divisao/busca)) // o then nao vai dar certo se no retorno tiver algo que nao seja um numero exato ou o retorno que eu quiser
.then(somaFinal => console.log(`${somaFinal.reduce((acc, item) => {
    acc += item;
    return acc
})}`))
.catch(somaTudo => console.log(`Que fracasso =( Nosso número foi ${somaTudo}`));
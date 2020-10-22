const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 11);
  
    if (number > 10 || number <= 5) {
      return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

  //Repare também como usamos o return antes do reject para interromper a execução da função. 
  //Dessa forma o uso do else se torna desnecessário.

  //.then() recebe o retorno de resolve, o .catch() recebe o retorno do reject,
  //catch() também "pega" qualquer erro que acontecer dentro de qualquer .then() anterior a ele, por esse motivo ele é geralmente usado no final.,
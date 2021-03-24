// const readline = require('readline-sync');

var inquirer = require('inquirer');

function validateFloat (input) {
    return !isNaN(parseFloat(input)) || 'Por favor, digite um número válido';
  }
const calculaImc = () => {
  inquirer
    .prompt([
      {
        name: 'peso',
        type: 'input',
        message: 'Qual o seu peso em kilograma ? : ',
        validate: validateFloat
      },
      {
        name: 'altura',
        type: 'input',
        message: 'Qual sua altura em metros? :  ',
        validate:validateFloat
      },
    ])
    .then((resposta) => {
      const IMC = (resposta.peso / resposta.altura ** 2).toFixed(2);
      console.log('Seu IMC É :', IMC);
      switch (true) {
        case IMC < 18.5:
          return console.log('Esqueleto com fome');
        case IMC >= 18.5 && IMC < 25:
          return console.log('Exemplo de magreza para as crianças');
        case IMC >= 25 && IMC <= 29.9:
          return console.log('big mac');
        case IMC >= 30 && IMC <= 34.9:
          returnconsole.log('Chupeta de baleia');
        case IMC >= 35 && IMC <= 39.9:
          return console.log('MULTIDÃO');
        default:
          console.log('3 OU 4 CAIXÃO');
      }
    });

  
};

calculaImc();

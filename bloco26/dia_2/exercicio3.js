const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve, reject) => {
    rl.question(message, (answer) => { // resposta da entrada do usuario
      rl.close();
      resolve(answer);// resposta da promisse sem tratamentos
      reject(new Error("valor invalido"))
    });
  });
}

async function start() {
  const resposta = await question('Digite o caminho do arquivo que deseja ler: ');

  try {
    const file = await readFile(path.resolve(__dirname, resposta));
    console.log(file.toString('utf8'));
    console.log('---------------------');
    console.log(`Arquivo de ${file.byteLength} bytes, lido em ${scriptEnd} ms`);
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
};

start();
const fs = require('fs');
const util = require('util');
const path = require('path');
const readline = require('readline');

const readFile = util.promisify(fs.readFile);

function question(caminhoArquivo) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    rl.question(caminhoArquivo, (pergunta) => {
      // resposta da entrada do usuario
      rl.close();
      resolve(pergunta); // resposta da promisse sem tratamentos
      reject(new Error('arquivo na existe'));
    });
  });
}

async function start() {
  const resposta = await question(
    'Digite o caminho do arquivo que deseja ler: '
  );

  try {
    const file = await readFile(path.resolve(__dirname, resposta));
    const antigo = await question('Qual palavra deseja subistituir ? : ');
    const novo = await question('Qual a nova palavra : ');
    const novoTexto = file
      .toString('utf8')
      .replace(new RegExp(antigo, 'g'), novo);
    console.log(novoTexto);
    const certeza = await question('Tem certeza disso ? (s/n) ');
    if(certeza === "s" )  novaResposta = await question('Qual o caminho do novo arquivo: ? ')
    
    fs.writeFile(path.join(__dirname, novaResposta), novoTexto, () => { });

    // g acha todas as correspondencias
    // i ignora maiuscula e minuscula
  } catch (err) {
    console.log(`Erro ao ler arquivo: ${err.message}`);
  }
}

start();

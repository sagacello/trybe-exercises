const calcularDivisao = (n1,n2) => {
    const promise = new Promise((resolve, reject) => {
        n2 === 0 ? reject(Error("Não pode dividir por 0")) :
        resolve(resultado)
        const resultado = n1 / n2
    })
    return promise
 }
 
calcularDivisao(2,0)
.then((result) => console.log("Resultado:",result))
.catch((error) => console.log("O erro foi:", error.message)) 
// o message na frente exclui o error do console so aparece a mensgem definda 

const fs = require('fs');

function readFilePromise (fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, content) => {
      if (err) return reject(err);
      resolve(content);
    });
  });
}

// exemplo 2
readFilePromise('file1.txt')
  .then((content) => {
    console.log(`Lido file1.txt com ${content.byteLength} bytes`);
    return readFilePromise('file2.txt');
  })
  .then(content => {
    console.log(`Lido file2.txt com ${content.byteLength} bytes`);
    return readFilePromise('file3.txt');
  })
  .then((content) => {
    console.log(`Lido file3.txt com ${content.byteLength} bytes`);
  })
  .catch((err) => {
    console.log(`Erro ao ler arquivos: ${err.message}`);
  });
const soNumeros = async (n1, n2, n3) => {
 const resposta = await new Promise((resolve, reject) => {
        const parametro = [n1, n2, n3].map((item) => typeof item);
        parametro.some((p) => p != 'number')
            ? reject(new Error('Digite apenas números'))
            : resolve((resultado = (n1 + n2) * n3));
    });
    resultado > 50
        ? console.log('Resposta', resposta)
        : Promise.reject(new Error('Valor muito baixo'));
};

const numeroAleatorio = () => {
  return randomNumbers = Array.from({ length: 3 }).map((item) => {
    return Math.floor(Math.random() * 100);
  });
  //console.log(...randomNumbers);
  soNumeros(...randomNumbers);
};

numeroAleatorio();

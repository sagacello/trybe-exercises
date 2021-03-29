export const soNumeros = (n1, n2, n3) => {
  new Promise((resolve, reject) => {
    typeof n1 && typeof n2 && typeof n3 === 'number'
      ? resolve(n1 + n2)
      : reject(new Error('Digite apenas números'));
  }).then((resposta) => {
    (n1 + n2) * n3 > 50
      ? console.log('Resposta', resposta)
      : Promise.reject(new Error('Valor muito baixo'));
  });
};
//soNumeros(3, 2, 3);

const soNumeros2 = (n1, n2, n3) => {
  new Promise((resolve, reject) => {
    typeof n1 && typeof n2 && typeof n3 === 'number'
      ? resolve(n1 + n2)
      : reject(new Error('Digite apenas números'));
    (n1 + n2) * 3 < 50 ? reject(Error('Valor muito baixo')) : resolve(result);
  })
    .then((result) => console.log(result))
    .catch((err) => console.log(err.message));
};

soNumeros2(3, 2, "33");

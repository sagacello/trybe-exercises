const fs = require('fs').promises;

const printar2 = async () => {
  const arquivo = await fs.readFile('./simpsons.json', 'utf-8');
  const jsonParaArray = JSON.parse(arquivo);
  jsonParaArray.map((item) => {
    console.log(`${item.id} - ${item.name}`);
  });
  lerEcriarNovoArquivo(jsonParaArray);
};

const filtarId = (array) => {
  const ids = array.filter((item) => item.id != 10 && item.id != 6);
  ids ? ids : new Error('Não tem ');
  console.log('IDS', ids);
  return ids;
};
const lerEcriarNovoArquivo = async (array) => {
  const escrever = await fs.writeFile(
    './simpsonsFamily.json',
    JSON.stringify(filtarId(array))
  );
};

const adicionarPersonagem = async (path, id, name) => {
  const addCoisa = await JSON.parse(await fs.readFile(path, 'utf-8'));
  addCoisa.push({ id, name });
  await fs.writeFile(path, JSON.stringify(addCoisa));
};

const printar = async () => {
  return await JSON.parse(await fs.readFile('./simpsons.json', 'utf-8')).map(
    (item) => {
      console.log(`${item.id} - ${item.name}`);
    }
  );
};

fs.readFile('./simpsons.json', 'utf-8')
 .then((fileContent) => {
   return JSON.parse(fileContent);
 })
.then((simpsons) => {
   return simpsons.map(({ id, name }) => `${id} - ${name}`);
 })
 .then((strings) => {
  strings.forEach((string) => console.log(string));
 });

//printar();
// printar2();
adicionarPersonagem('./simpsonsFamily.json', '24', 'Marcelinho');

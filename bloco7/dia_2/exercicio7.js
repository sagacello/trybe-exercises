//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto
const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
    turno : 'manha'
  };

let valorNumerico = (objeto,numero) => Object.values(objeto)[numero];

console.log(valorNumerico(lesson1,0))

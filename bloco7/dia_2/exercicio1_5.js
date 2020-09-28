//Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
//Crie uma função para mostrar o tamanho de um objeto.
//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

//console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/


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
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

let objetos = (objeto , chave , valor) =>  {
    objeto[chave] = valor
}

console.log(lesson2 , "turno_manha" , "8horas")

let listarChaves = (objeto) => {
    console.log(Object.keys(objeto))   
}

let listarValores = (objeto) => {
    console.log(Object.values(objeto))   
}

let tamanho = objeto => console.log(Object.values(objeto).length)
let tamanho1 = objeto => console.log(Object.keys(objeto).length)


tamanho(lesson2)
listarValores(lesson1)

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)
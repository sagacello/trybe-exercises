//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

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
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

 const getNumberOfStudents = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
       // console.log(obj[array[i]].numeroEstudantes)
        total += obj[array[i]].numeroEstudantes;
    }
    return total;
  };
 getNumberOfStudents(allLessons);

 let contar = objeto => {
     const lista = Object.keys(objeto)
     for( let i = 0 ; i <= lista.length ; i+= 1){
         console.log(lista[i])

     }
 }
 contar(lesson2)
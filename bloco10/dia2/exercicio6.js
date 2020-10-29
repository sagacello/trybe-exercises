const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const animal = Animals.find((animal) => animal.name === name);
        if (animal) {
          return resolve(animal);
        }
        const messageError = 'Nenhum animal com esse nome!'
        return reject(messageError);
      }, 100);
    })
  )

  const findAnimalByAge = (age) => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const listAnimals = Animals.filter((animal) => animal.age === age);
        if (listAnimals.length !== 0) {
          return resolve(listAnimals);
        }
        const messageError = 'Nenhum animal encontrado!'
        return reject(messageError);
      }, 100);
    })
  )
  

  // ---------------------
  module.exports = findAnimalByName;
  module.exports = findAnimalByAge;

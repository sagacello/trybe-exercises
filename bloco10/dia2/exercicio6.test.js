const findAnimalByName = require('./exercicio6');
const findAnimalByAge = require('./exercicio6');


describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      it('Retorne o objeto do animal', () => {
        return findAnimalByName('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
})

describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com o a idade', () => {
        test('Verifique o primeiro nome do animal no array retornado', () => {
        const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(findAnimalByAge(5)).resolves.toEqual(animals);
        });
    });


describe('Quando não existe o animal com o nome procurado', () => {
    it('Retorna um erro', () => {
        return findAnimalByName('Bob').catch(error =>
            expect(error).toEqual('Nenhum animal com esse nome!')
            );
        });
    });
});

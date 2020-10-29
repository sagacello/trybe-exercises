const getRepos = require('./exercicio4');

describe('se a url responder', () => {
  describe('Verifico se contem o repositorio desejado',  () => {
    it('retorna o nome a partir do id passado', () => {
      const url = 'https://api.github.com/users/tryber/repos';
      return getRepos(url).then(res => { 
          expect(res).toContain('sd-01-week4-5-project-todo-list');
          expect(res).toContain('sd-01-week4-5-project-meme-generator');
        })
      });
    });
});

describe('Se não conter ou não existir', () => {
  it('', () => {
    return getUserName(2).catch(error => expect(error).toEqual({error: 'ERROUUUU'}));
  });
})  


  
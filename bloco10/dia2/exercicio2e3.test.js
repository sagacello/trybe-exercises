const getUserName = require('./exercicio2e3');

describe('Se o usuario existir', () => {
    it('retorna o nome a partir do id passado', () => {
      return getUserName(4).then(data => expect(data).toEqual('Mark'));
    });
    it('retorna o nome a partir do id passado', () => {
        return getUserName(5).then(data => expect(data).toEqual('Paul'));
      });
  });

describe('Se o usuario não existir', () => {
  it('retorna o nome a partir do id passado', () => {
    return getUserName(2).catch(error => expect(error).toEqual({error: 'ERROUUUU'}));
  });
    
});

  
const uppercase = require('./exercicio1');

describe('uppercase - No promise', () => {
it(`uppercase 'test' to equal 'TEST'`, (done) => {
    uppercase('marcelo', (str) => {
      expect(str).toBe('MARCELO');
      done();
    });
  });
});
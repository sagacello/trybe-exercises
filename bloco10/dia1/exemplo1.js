test('array and object equality', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });
  /*
  Você pode verificar se um array contém um item em particular utilizando toContain. 
  Para verificar que um item possui uma estrutura mais complexa,
   utilize toContainEqual. toHaveLength permite facilmente verificar o tamanho de um array ou de uma string.
   */

   //Para comparar string com expressões regulares, utilize o matchertoMatch.
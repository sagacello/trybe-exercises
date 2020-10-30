const service = require('./exemplo2');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.caixaAlta = jest.fn().mockImplementationOnce((string) => string.toLowerCase());
  
    expect(service.caixaAlta('MARCELO')).toBe('marcelo');
    expect(service.caixaAlta).toHaveBeenCalled();
    expect(service.caixaAlta).toHaveBeenCalledTimes(1);
    expect(service.caixaAlta).toHaveBeenCalledWith('MARCELO');
  });


  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.primeiraLetra = jest.fn().mockImplementationOnce((string) => string[string.length -1]);
  
    expect(service.primeiraLetra('MARCELO')).toBe('O');
    expect(service.primeiraLetra).toHaveBeenCalled();
    expect(service.primeiraLetra).toHaveBeenCalledTimes(1);
    expect(service.primeiraLetra).toHaveBeenCalledWith('MARCELO');
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.concatenaDuasStrings = jest.fn().mockImplementationOnce((str1, str2, str3) => str1.concat(str2, str3));
  
    expect(service.concatenaDuasStrings('MARCELO', 'IVAN', 'viola')).toBe('MARCELOIVANviola');
    expect(service.concatenaDuasStrings).toHaveBeenCalled();
    expect(service.concatenaDuasStrings).toHaveBeenCalledTimes(1);
    expect(service.concatenaDuasStrings).toHaveBeenCalledWith('MARCELO', 'IVAN', 'viola');
  });


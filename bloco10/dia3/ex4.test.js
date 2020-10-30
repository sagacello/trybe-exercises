const service = require('./ex4');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.alta = jest.fn().mockImplementationOnce((string) => string.toLowerCase());
  
    expect(service.alta('MARCELO')).toBe('marcelo');
    expect(service.alta).toHaveBeenCalled();
    expect(service.alta).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.primeira = jest.fn().mockImplementationOnce((string) => string[string.length - 1]);
  
    expect(service.primeira('MARCELO')).toBe('O');
    expect(service.primeira).toHaveBeenCalled();
    expect(service.primeira).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.junta = jest.fn().mockImplementationOnce((s1, s2, s3) => s1.concat(s2, s3));
  
    expect(service.junta('MARCELO','ivan','viola')).toBe('MARCELOivanviola');
    expect(service.junta).toHaveBeenCalled();
    expect(service.junta).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.alta.mockReset()
    service.alta = jest.fn().mockReturnValue('MARCELO');
  
    expect(service.alta('marcelo')).toBe('MARCELO');
    expect(service.alta).toHaveBeenCalled();
    expect(service.alta).toHaveBeenCalledTimes(1);
  });


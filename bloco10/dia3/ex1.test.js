const service = require('./ex1');

test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.aleatorio = jest.fn().mockReturnValue(10);
  
    expect(service.aleatorio()).toBe(10);
    expect(service.aleatorio).toHaveBeenCalled();
    expect(service.aleatorio).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.aleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);  

    expect(service.aleatorio(2,2)).toBe(1);
    expect(service.aleatorio).toHaveBeenCalled();
    expect(service.aleatorio).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.aleatorio = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);  

    expect(service.aleatorio(2, 2, 2)).toBe(8);
    expect(service.aleatorio).toHaveBeenCalled();
    expect(service.aleatorio).toHaveBeenCalledTimes(1);
  });

  test("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.aleatorio.mockReset();// resetei a funcao
    expect(service.aleatorio).toHaveBeenCalledTimes(0); // testei para verificar que foi resetada , tem que ter sido chamada 0 vezes

    service.aleatorio = jest.fn().mockImplementationOnce((a) => 2 * a);  

    expect(service.aleatorio(2)).toBe(4);
    expect(service.aleatorio).toHaveBeenCalled();
    expect(service.aleatorio).toHaveBeenCalledTimes(1);
  });

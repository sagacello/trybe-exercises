import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';
import App1 from './App1';



afterEach(() => jest.clearAllMocks());
//A linha afterEach(() => jest.clearAllMocks()); faz com que, após cada teste, nosso mock seja limpo, ou seja, no caso acima, garante que após o teste o fetch não seja mais um mock , 
//isso é bem util para que não tenha interferência entre um teste e outro.
describe(' testes aqui ', () => {
  it('Verifica que, quando recebo uma piada, mostro ela na tela', () => {
    async () => {
      const joke = {
        id: '7h3oGtrOfxc',
        joke: 'Whiteboards ... are remarkable.',
        status: 200,
        // objto similar ao da api
        // tem que ter o async await
      };
    // simulação do fetch
    // global é um objeto gigante que tem diversos objetos do react
    // resumo: com essa sintaxe eu atribuo o mockimplementation e tenho a resposta 
    // de uma promisse imbutida e colocada no json:
   global.fetch = jest.fn().mockResolvedValue({
     json: jest.fn().mockResolvedValue(joke)
   })
    // nessa sintaxe ja está inplicito o mockImplmentation como uma promisse 
    // a logica da promisse e do mock já estão imbutidas
    const { findByText } = render(<App />);
    // encontro pelo texto renderizado no App
    await findByText('Whiteboards ... are remarkable.') // tem que ter await e a resposta tem que ser propria piada
    }
  });
  
  it('alterando o valor dos campos e testando o valor guardado', () => {
    const { getByTestId } = render(<App1 />);
    const inputNome = getByTestId('input-nome');
    expect(inputNome).toHaveValue('');// começa vazio
    fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } }); // evento onchange
    // faz um teste com esse valor que foi descrito no teste
    expect(inputNome).toHaveValue('Estudante da Trybe');
    // espero esse valor no input apos ser escrito
  
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });

})

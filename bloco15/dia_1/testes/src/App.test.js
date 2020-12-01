import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';

// os testes são dividitos em tres etapas
// 1 acessar os elementos da tele
// 2 interagir com eles se necessario
// 3 realizar o teste

describe('Tela de inserção do email', () => {
  // coloca o describe para ficar melhor organizado
  it('Verifica que há um campo input email na tela', () => {
    const { getByLabelText } = render(<App />);
    // renderizo a aplicação em uim ambiente virtual
    // getByLabelText retorna um seletor
    const inputEmail = getByLabelText('Email');
    // vai procurar uma label com o texto email e procurar o input dela
    expect(inputEmail).toBeInTheDocument(); // quero que ele exista no documento
    expect(inputEmail.type).toBe('email'); // não precisei interagir, fiz o teste
    // procurando o type email
  });

  it('Verifica que há um botao', () => {
    const { getAllByRole } = render(<App />); // acessa
    const button = getAllByRole('button'); // tem que especificar o botao,
    // ou então pegar todos com getAllByRole, e o retorno sera um array com todos
    // os botoes
    expect(button.length).toBe(2); // faz o teste
  });

  it("Verifica que há um botao 'Enviar'", () => {
    const { getByTestId } = render(<App />);
    const button = getByTestId('id-send'); // tem que especificar o botao,
    // ou então pegar todos com gaetAllByRole, e o retorno sera um array com todos
    // os botoes
    expect(button).toBeInTheDocument(); // para ver se o documento comtem o botao
    expect(button).toHaveValue('Enviar'); // verifica se o botao tem esse valor
  });

  it('Verifica que , ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    const { getByTestId, getByLabelText } = render(<App />)
    // acessei os elementos
    const emailInput = getByLabelText('Email') // pegando o elemento pelo nome da label
    const sendButton = getByTestId('id-send');// pelo data-testid
    const userEmail = getByTestId('id-email-user');

    // simula a interaçao do usuario com os nossos elementos
    fireEvent.change(emailInput, { target: { value : 'sagacello@teste.com' }}) // o chage foi chamado porque O EVENTO E ONCHANGE
    // o primeiro parametro passado é o elemento, o segundo é o objeto que representa o evento
    fireEvent.click(sendButton) // disparo do onclick , nesse caso nao precisa passar o segundo elemento ,pois o react
    // se encarrega de passar ele , porque ele é passado no click

    expect(emailInput.value).toBe('') // o input do email tem que estar vazio
    expect(userEmail.textContent).toBe('Valor: sagacello@teste.com') // vou testar com esse valor

    it('Testando um componente, caso o email seja valido.', () => {
      const EMAIL_USER ='sagacello@teste.com';
      const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
      const isValid = getByText('Email Valido');
      expect(isValid).toBeInTheDocument();
    });

    it('Testando um componente, caso o email seja inválido.', () => {
      const EMAIL_USER = 'emailerrado';
      const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
      const isValid = getByText('Email Inválido');
      expect(isValid).toBeInTheDocument();
    });

  });
});

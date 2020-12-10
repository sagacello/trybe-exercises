// aqui fica o reducer especifico do componente
// cada action trata um reducer

const ESTADO_INICIAL = {
  nome: 'Asdrubal',
  email: 'asdrubal_cola_pinga@trago.com',
  cpf: 123456789,
};

function registerReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'ADD_FORM':
      return [
        ...state,
        {email: action.email, nome: action.nome, cpf: action.cpf} ,
      ];

    default:
      return state;
  }
}

export default registerReducer;

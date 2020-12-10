// aqui fica o reducer especifico do componente
// cada action trata um reducer

const ESTADO_INICIAL = [{
  nome: 'Asdrubal',
  email: 'asdrubal_cola_pinga@trago.com',
  cpf: 123456789,
}];

function registerReducer(state = ESTADO_INICIAL, action) {
  switch (action.type) {
    case 'ADD_FORM':
      return [
        ...state,
        { nome:action.form.nome, email:action.form.cpf, cpf:action.form.email }
      ];

    default:
      return state;
  }
}

export default registerReducer;

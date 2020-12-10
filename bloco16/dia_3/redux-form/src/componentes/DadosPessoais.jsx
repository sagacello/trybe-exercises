import React from 'react';
import { connect } from 'react-redux';
import { addFormulario } from '../actions';

class DadosPessoais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nome: '',
      cpf: '',
    };
  }
  maracutaia = (e) => {
    const { email, nome, cpf } = this.state;
    e.preventDefault();
    this.props.addFormulario({ email, nome, cpf });
    console.log(email);
    this.setState({
      email: '',
      nome: '',
      cpf: '',
    });
  };
  render() {
    const { array } = this.props;
    const { email, nome, cpf } = this.state;
    return (
      <form>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </label>
        Ovos Secretos.
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            onChange={(e) => this.setState({ cpf: e.target.value })}
          />
        </label>
        <div>
          <button onClick={(e) => this.maracutaia(e)}>Enviar</button>
        </div>
        <div>{email}</div>
        <div>{nome}</div>
        <div>{cpf}</div>
        <h1>Luciano❤️Pablo Vittar</h1>
        <div>
          {array.map((busca, index) => {
            console.log(busca);
            return (
              <div key={busca.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {busca.name}</p>
                <p>cpf: {busca.age}</p>
                <p>Email: {busca.email}</p>
              </div>
            );
          })}
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addFormulario: (e) => dispatch(addFormulario(e)),
});

const mapStateToProps = (state) => ({
  array: state.registerReducer,
});
//array: state.registerReducer
// email: state.registerReducer.email,
//nome: state.registerReducer.nome,
//cpf: state.registerReducer.cpf,

export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais);

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
            value={nome}
            onChange={(e) => this.setState({ nome: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </label>
        Ovos Secretos.
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={cpf}
          />
        </label>
        <div>
          <button onClick={(e) => this.maracutaia(e)}>Enviar</button>
        </div>
        {array.map((busca, index) => {
          console.log(busca);
          return (
            <div key={busca.email}>
              <p>ID de registro: {index + 1}</p>
              <p>Nome: {busca.nome}</p>
              <p>cpf: {busca.cpf}</p>
              <p>Email: {busca.email}</p>
            </div>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(DadosPessoais);

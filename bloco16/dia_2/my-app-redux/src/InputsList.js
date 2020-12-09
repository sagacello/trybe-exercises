import React from 'react';
import { connect } from 'react-redux';
import { addAssignment } from './actions';
// importei a action

class InputsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textValue: '' };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={event => this.setState({ textValue: event.target.value })}
          // conforme eu escre atualizo o estado na hora mais so envio para
          // o store quando clico
        />
        <button onClick={() => this.props.add(this.state.textValue)}>
          Adicionar tarefa
        </button>
      </div>
    );
  }
}
// A função mapDispatchToProps é a responsável por disparar - 
// fazer o dispatch de - uma ação para o reducer .
// a única maneira de enviarmos uma action para um reducer é fazendo seu dispatch 

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addAssignment(e))});
  // essa funçao tem a definçao da action que vai ser jogada no store
 // mapDispatchToProps poderia ter qualquer nome o iportante é ela estar ligada com o connect
export default connect(null, mapDispatchToProps)(InputsList);
// estamos conectando o Redux ao componente. Para isso, precisamos importar o método connect 
// o connect da acesso ao store, tem sempre dois parametros o primeiro é o metodo nativo do redux 
// que vem com null ,o segundo é o componente
// DESPACHO A INPUTLIST PARA O STORE
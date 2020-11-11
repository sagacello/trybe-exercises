import React, { Component } from 'react'
import form from './App.css'
import EstadoFavorito from './EstadoFavorito'
import Idade from './Idade'
import VaiComparecer from './VaiComparecer'
import PalavraFavorita from './PalavraFavorita'

class Form extends Component {
  constructor() {
    super();

    this.trocarTodos = this.trocarTodos.bind(this);
    // preciso disso para conseguir atualizar essa funçao

    this.state = {
      estadoFavorito: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: '',
      formularioComErros: false,

    };
  
  
  }
  // {this.handleChange} eu pego o valor que está sendo inserido e jogo para o handle de evento
  trocarTodos({target}) { // desconstrui o target
    // this.setState para atualizar o evento de acordo com o value
    // value = this.state.estadoFavorito , o estado do react lida com a informação
    // nome disso é componente controlado
    // PEGAR O NOME DO COMPONENTE event.target.name que vai ser igual a estadoFavorito
    const { name  } = target // o name vaai receber o proprio 'name' do target
    const value = target.type === 'checkbox' ? target.checked : target.value;// particularidade do checkbox
    // se value for target.type igual checkbox (porque é o nome que fica no type) eu pego target.checked
    // checked é o nome de onde fica armazenado o true or false do checkbox no react , se nao pego o target.value
    // o se  é o : e o ? sigfnica if true para igualdade inicial
    // com essa sintaxe [name] eu consigo atualizar qualquer valor de name 
    this.setState({
      [name]: value, // o name vai ser o nome do botao que vai se atualizar do estado inicial

    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          < EstadoFavorito value={this.state.estadoFavorito} trocarTodos={this.trocarTodos} erro={this.state.formularioComErros} trataErro={this.trataErro} />
          < Idade value={this.state.idade} trocarTodos={this.trocarTodos} />
          < VaiComparecer value={this.state.vaiComparecer} trocarTodos={this.trocarTodos} />
          < PalavraFavorita value={this.state.vaiComparecer} trocarTodos={this.trocarTodos} />
        </form>
      </div>
    );
  }
}

export default Form;
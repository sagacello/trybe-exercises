import React, { Component } from 'react';
import './App.css';


class FormCurriculo extends Component {

  constructor () {
    super();
    this.tratarElementos = this.tratarElementos.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      tipo : false,
      estado: '',
    };
  }

  onBlur({target}) { // onblur evento
    let { name, value } = target;
    if(name === 'cidade') value = value.match(/^\d/) ? '' : value 
    // /d  QUALQUER UM dígito / caractere sem dígito. Dígitos são[0-9]
     
    this.setState({
        [name]: value, 
    });
  }

  arrumaEndereco = (endereco) => {
    return endereco.replace(/[^\w\s]/gi, '') // gi = @
  }

  tratarElementos = ({target}) => {
    let { name, value } = target;
    if(name === 'name') value = value.toUpperCase()// essa so serve para o nome
    if(name === 'endereco') value = this.arrumaEndereco(value)
    value = target.type === 'checkbox' ? target.checked : target.value;
    // value recebe o tipo do target , se for checkbox retorna checado (true)
    // se nao retorna o valor inicial
    this.setState({
        [name]: value, 
    });
  }
  render() {
    return (
        <div >
        <label>
        Nome:
        </label>
        <input
          type="text"
          name="name"
          maxLength="40"
          required
          value={this.state.nome}
          onChange={this.tratarElementos}
        />

        <label>
        Email:
        </label>
        <input
          type="text"
          name="email"
          maxLength="50"
          required
          value={this.state.email}
          onChange={this.tratarElementos}
        />

        <label>
        CPF:
        </label>
        <input
          type="number"
          name="cpf"
          maxLength="11"
          required
          value={this.state.cpf}
          onChange={this.tratarElementos}
        />

        <label>
        Endereço:
        </label>
        <input
          type="text"
          name="endereco"
          maxLength="200"
          required
          value={this.state.endereco}
          onChange={this.tratarElementos}
        />

         <label>
        Cidade:
        </label>
        <input
          type="text"
          name="cidade"
          maxLength="28"
          required
          value={this.state.cidade}
          onBlur={this.onBlur}
          onChange={this.tratarElementos}

        />
            
         <label>
         Casa:
        </label>
         <input
          type="checkbox"
          name="tipo"
          required
          value={this.state.tipo}
          onChange={this.tratarElementos}
        />

        
      </div>
      
    )
  }
}

export default FormCurriculo;
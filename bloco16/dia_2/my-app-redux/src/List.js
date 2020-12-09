import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.list.map(element => (
            <p>{element}</p>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.listReducer});

export default connect(mapStateToProps)(List);
// A função mapStateToProps , auto-descritiva, mapeia as entidades armazenadas nos estados para uma props .
// No nosso caso, queremos acessar os dados providos pelo reducer listReducer , 
// portanto basta acessar o caminho do state com o reducer desejado e nomear a prop 
// que o receberá (no caso, chamamos de list ).
// ACESSEI DENTRO DO STORE A FUNÇAO CRIADA LISTREDUCER 
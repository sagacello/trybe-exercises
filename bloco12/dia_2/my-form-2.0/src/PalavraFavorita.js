import React, { Component } from 'react'


class PalavraFavorita extends Component {
    render() {
    const { value, trocarTodos } = this.props
    return (
        <label>
        Escolha a palavra favorita
        <select name='palavraChaveFavorita' value={value} onChange={trocarTodos} >
            <option value='coponente'>Componente</option>
            <option value='estado'>Estado</option>
            <option value='evento'>Evento</option>
        </select>
      </label>
        )
    };
}

export default PalavraFavorita;
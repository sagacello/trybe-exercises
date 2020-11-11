import React, { Component } from 'react'


class EstadoFavorito extends Component {
    render() {
    const { value, trocarTodos } = this.props
    let error = undefined
    //  {(error ? error : '')} =  if error !== undefined eu imprimo erro , caso contrario retorna vazio
    if (value.length > 120) error = '------------------------------   texto grande'
    return (
        <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
            name="estadoFavorito" 
            value={value} 
            onChange={trocarTodos}
        />
        <span>
          {(error ? error : '')}
        </span>
        </label>
        )
    };
}

export default EstadoFavorito;
import React, { Component } from 'react'


class Idade extends Component {
    render() {
    const { value, trocarTodos } = this.props

    return (
        <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =)
        <textarea 
            name="idade" 
            value={value} 
            onChange={trocarTodos}
        />
        </label>
        )
    };
}

export default Idade;
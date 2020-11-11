import React, { Component } from 'react'


class VaiComparecer extends Component {
    render() {
    const { value, trocarTodos } = this.props

    return (
        <input
            value={value}
            type="checkbox"
            name="vaiComparecer"
            onChange={trocarTodos}
          />
        )
    };
}

export default VaiComparecer;
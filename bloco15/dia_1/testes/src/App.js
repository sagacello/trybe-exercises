import React, { Component } from 'react';
import ValidEmail from './ValidEmail'

class App extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      saveEmail: '',
    };
  }
  mudaEmail(value) {
    this.setState({ email: value });
  }

  salvarEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }
  render() {
    const { email, saveEmail } = this.state;
    return (
      <div>
        <label htmlFor="id-email">Email<input
            id="id-email"
            value={email}
            type="email"
            onChange={(event) => this.mudaEmail(event.target.value)}
          />
          </label>
          <input
            id="btn-enviar"
            type="button"
            data-testid="id-send"
            value="Enviar"
            onClick={() => this.salvarEmail(email)}
          />
          <input id="btn-id" type="button" value="voltar" />
          <ValidEmail email={saveEmail}/>        
      </div>
    );
  }
}

export default App;

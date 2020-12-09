import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import InputsList from './InputsList.js';
import List from './List.js';


class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <InputsList />
          <List />
        </Provider>
      </div>
    );
  }
}

export default App;
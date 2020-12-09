import { createStore, combineReducers } from 'redux';
import listReducer from '../reducers/index.js';

const rootReducer = combineReducers({ listReducer });
// listReducer tem que ser passado para o combineReducers como parametro e ele vai receber ele mesmo
// Utilizamos também o método combineReducers que, como diz seu nome, combina reducers . 
// Ele deve receber um objeto com os reducers criados. Sem ele, só poderíamos usar um reducer em nossa aplicação.

const store = createStore(rootReducer);

export default store;
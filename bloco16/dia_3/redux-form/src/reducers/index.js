// aqui fica o combineReducer , onde eu seleciono os reducers e exporto eles
import { combineReducers } from 'redux';
import registerReducer from './registrosForms';

const rootReducers = combineReducers({ registerReducer });

export default rootReducers;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { messagesReducer } from '../redux/messages';
import { authReducer } from '../redux/auth';

const rootReducer = combineReducers({
  user: authReducer,
  messages: messagesReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;

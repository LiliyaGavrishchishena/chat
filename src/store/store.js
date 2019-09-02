import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { messagesReducer } from '../redux/messages';
import { authReducer } from '../redux/auth';
import { modalReducer } from '../redux/modal';
import { likesReducer } from '../redux/likes';

const rootReducer = combineReducers({
  user: authReducer,
  messages: messagesReducer,
  modal: modalReducer,
  likes: likesReducer,
});

const middlewares = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;

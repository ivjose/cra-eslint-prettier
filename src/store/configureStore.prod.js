import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = initialStates =>
  createStore(rootReducer, initialStates, applyMiddleware(thunk));

export default configureStore;

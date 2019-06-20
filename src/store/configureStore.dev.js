import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';
import DevTools from 'utils/DevTools';
import rootReducer from '../reducers';

const configureStore = initialStates => {
  const store = createStore(
    rootReducer,
    initialStates,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    )
  );
  console.log(module.hot, 'test');

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import { reduxReactRouter } from 'redux-router';

export default function configureStore(routes, history, initialState = {}) {
  const store = compose(
    reduxReactRouter({
      routes,
      history,
    }),
    applyMiddleware(thunkMiddleware)
  )(createStore)(rootReducer, initialState);
  return store;
}

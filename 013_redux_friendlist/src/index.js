import React from 'react';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './stores/configureStore';

const store = configureStore();

let rootElement = document.getElementById('root');

/**
 * () => <App />は以下と同義
 *
 * function() {
 *   return <App />
 * }
 *
 */
React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);

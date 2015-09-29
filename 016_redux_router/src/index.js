import React from 'react';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import configureStore from './store/configureStore';

import App from './containers/App';
import Home from './containers/Home';
import User from './containers/User';
import About from './containers/About';

const routes = (
  <Route path="/" component={ App }>
    <IndexRoute component={ Home } />
    <Route path="/user" component={ User } />
    <Route path="/about" component={ About } />
  </Route>
);

const history = createBrowserHistory();
const store = configureStore(routes, history);

let rootElement = document.getElementById('root');
React.render(
  <Provider store={ store }>
      { () => <ReduxRouter /> }
  </Provider>,
  rootElement
);

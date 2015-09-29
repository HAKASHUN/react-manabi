import { combineReducers } from 'redux';
import { routerStateReducer  } from 'redux-router';

const rootReducer = combineReducers({
  // Add your reducer
  router: routerStateReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

function todos(state = ['hoge', 'foo', 'bar'], action) {
  return state;
}

const todoApp = combineReducers({
  todos
});
export default todoApp;

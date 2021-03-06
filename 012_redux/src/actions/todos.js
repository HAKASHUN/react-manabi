import * as types from '../constants/ActionTypes';

export function addTodo(text) {
  return { type: types.ADD_TODO, text };
}

export function completeTodo(index) {
  return {type: types.COMPLETE_TODO, index};
}

export function setVisibilityFilter(nextFilter) {
  return {type: types.SET_VISIBILITY_FILTER, nextFilter}
}

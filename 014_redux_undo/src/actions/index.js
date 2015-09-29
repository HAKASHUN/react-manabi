import fetch from 'isomorphic-fetch';
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from '../constants/ActionTypes';

// Todoの追加
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

// 指定indexのTodoを完了する
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index
  }
}

// フィルタをセットする
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

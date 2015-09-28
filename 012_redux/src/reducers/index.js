import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER} from '../constants/ActionTypes';
import { SHOW_ALL } from '../constants/TodoFilters';


function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO:
      return [...state, {
        id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
        text: action.text,
        completed: false
      }];

    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return action.nextFilter;
    default:
      return state;
  }
}


const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;

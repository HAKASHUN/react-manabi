import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo';
import { addTodo, completeTodo, setVisibilityFilter } from '../actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, visibleTodos, visibilityFilter, undoDisabled, redoDisabled } = this.props;
    return (
      <div>
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}/>
        <TodoList
          onTodoClick={index => dispatch(completeTodo(index))}
          todos={visibleTodos} />
        <Footer
          onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
          filter={visibilityFilter}
          onUndo={() => dispatch(ActionCreators.undo())}
          onRedo={() => dispatch(ActionCreators.redo())}
          undoDisabled={undoDisabled}
          redoDisabled={redoDisabled} />
      </div>
    )
  }
}

function selectTodos(todos, filter) {
  switch(filter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
    case SHOW_ALL:
      return todos;
  }
}

function mapStoreToProps(state) {
  return {
    visibleTodos: selectTodos(state.todos.present, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter,
    undoDisabled: state.todos.history.past.length === 0,
    redoDisabled: state.todos.history.future.length === 0
  }
}

export default connect(mapStoreToProps)(App);

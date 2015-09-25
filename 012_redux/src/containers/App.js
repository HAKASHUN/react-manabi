import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {

    return (
      <div>
        <h1>Todos</h1>
        <ul>
        {this.props.visibleTodos.map((todo, index) =>
          <li>{todo}</li>
        )}
        </ul>
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(App);

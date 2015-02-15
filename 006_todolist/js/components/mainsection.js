var React = require('react');
var _ = require('lodash');
var TodoActions = require('../actions/todo-actions');
var TodoItem = require('./todoitem');

var MainSection = React.createClass({
    render: function() {
        var allTodos = this.props.allTodos;
        var todos = _.map(allTodos, function(todo) {
            return (
                <TodoItem todo={todo} />
            )
        });
        return (
            <section>
              <input
                type="checkbox"
                onChange={this._onToggleCompleteAll}
                checked={this.props.areAllComplete ? 'checked' : ''}
              />
              <ul>
                {todos}
              </ul>
            </section>
        )
    },
    _onToggleCompleteAll: function() {
        TodoActions.toggleCompleteAll();
    }
});

module.exports = MainSection;
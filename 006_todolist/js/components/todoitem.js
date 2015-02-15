var React = require('react');
var _ = require('lodash');
var TodoActions = require('../actions/todo-actions');
var TodoTextInput = require('../components/textinput');

var TodoItem = React.createClass({
    getInitialState: function() {
        return {
            isEditing: false
        }
    },
    _onDestroyClick: function() {
        TodoActions.destroy(this.props.todo.id);
    },
    _onDoubleClick: function() {
        this.setState({
            isEditing: true
        });
    },
    _onToggleComplete: function() {
        TodoActions.toggleComplete(this.props.todo);
    },
    _onSave: function(text) {
        TodoActions.updateText(this.props.todo.id, text);
        this.setState({isEditing: false});
    },
    render: function() {
        var todo = this.props.todo;

        var input;
        if(this.state.isEditing) {
            input = <TodoTextInput onSave={this._onSave} value={todo.text} />
        }

        return (
            <li>
              <div>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={this._onToggleComplete}
                />
                <label onDoubleClick={this._onDoubleClick}>
                  {todo.text}
                </label>
                <button onClick={this._onDestroyClick}>x</button>
              </div>
              {input}
            </li>
        )
    }
});

module.exports = TodoItem;
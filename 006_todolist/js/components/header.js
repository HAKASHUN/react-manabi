var React = require('react');
var _ = require('lodash');
var TodoActions = require('../actions/todo-actions');
var TextInput = require('./textinput');

var Header = React.createClass({
    _onSave: function(text) {
        if(text.trim()) {
            TodoActions.create(text);
        }
    },
    render: function() {
        return (
            <header>
              <h1>Todo List</h1>
              <TextInput
                onSave={this._onSave}
                placeholder={'ここにTodoをどうぞ'}
              />
            </header>
        )
    }
});


module.exports = Header;
var React = require('react');
var _ = require('lodash');
var TodoActions = require('../actions/todo-actions');

var Footer = React.createClass({
    render: function() {
        var allTodos = this.props.allTodos;
        var total = Object.keys(allTodos).length;
        if(total === 0) {
            return null;
        }
        var completed = 0;
        for(var key in allTodos) {
            if(allTodos[key].complete) {
                completed++;
            }
        }
        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';

        var clearCompletedButton;
        if(completed) {
            clearCompletedButton = (
                <button onClick={this._onClearCompletedClick}>
                  Clear completed ({completed})
                </button>
            )
        }

        return (
            <footer>
              <span>
                <strong>{itemsLeft}</strong>
                {itemsLeftPhrase}
              </span>
              {clearCompletedButton}
            </footer>
        )
    },
    _onClearCompletedClick: function() {
        TodoActions.destroyCompleted();
    }
});


module.exports = Footer;
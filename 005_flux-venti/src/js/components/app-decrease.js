/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions');
var _ = require('lodash');

var Increase = React.createClass({
    handleClick: function() {
      AppActions.decreaseItem(this.props.index);
    },
    render: function() {
        return (
            <button onClick={this.handleClick}>-</button>
        )
    }
});
module.exports = Increase;
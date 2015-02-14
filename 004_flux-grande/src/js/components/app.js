/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/app-actions.js');
var AppStore = require('../stores/app-store.js');

/**
 * @description
 * <APP /> Component
 */
var APP = React.createClass({
    handleClick: function() {
        AppActions.addItem('this is the item');
    },
    render: function() {
        return (
          <h1 onClick={this.handleClick}>Add Item</h1>
        );
    }
});

module.exports = APP;

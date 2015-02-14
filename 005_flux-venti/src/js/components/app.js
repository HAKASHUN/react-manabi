/** @jsx React.DOM */
var React = require('react');
var Catalog = require('../components/app-catalog');


/**
 * @description
 * <APP /> Component
 */
var APP = React.createClass({
    render: function() {
        return (
            <div>
            <h1>Lets Shop</h1>
            <Catalog />
            </div>
        )
    }
});

module.exports = APP;
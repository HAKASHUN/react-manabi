/** @jsx React.DOM */
var React = require('react');

/**
 * <Catalog />
 */
var Catalog = React.createClass({
    render: function() {
        return (
            <table>
                <tr><td>名前</td><td>値段</td></tr>
            </table>
        )
    }
});

module.exports = Catalog;
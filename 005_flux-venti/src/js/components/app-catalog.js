/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store');
var AddToCart = require('../components/app-addtocart');
var _ = require('lodash');

function getCatalog() {
    return {
        items: AppStore.getCatalog()
    };
}

/**
 * <Catalog />
 */
var Catalog = React.createClass({
    getInitialState: function() {
      return getCatalog();
    },
    render: function() {
        var items = _.map(this.state.items, function(item) {
            return (
                <tr>
                  <td>{item.title}</td>
                  <td>${item.cost}</td>
                  <td><AddToCart item={item} /></td>
                </tr>
            )
        });
        return (
            <table>
            {items}
            </table>
        )
    }
});

module.exports = Catalog;
/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store');
var AppActions = require('../actions/app-actions');
var _ = require('lodash');

function cartItems(){
    return {
        items: AppStore.getCart()
    };
}

var Cart = React.createClass({
        getInitialState:function(){
            return cartItems();
        },
        componentWillMount: function() {
          AppStore.addChangeListener(this._onChange);
        },
        _onChange: function() {
            this.setState(cartItems());
        },
        render: function() {
            var items = _.map(this.state.items, function(item){
                return(
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                    </tr>
                )
            });

            return (
                <table>
                  <thead>
                    <tr>
                      <td>Item</td>
                      <td>Quantity</td>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                </table>
            )
        }
});

module.exports = Cart;
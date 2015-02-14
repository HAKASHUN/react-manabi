/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/app-store');
var AppActions = require('../actions/app-actions');
var _ = require('lodash');
var RemoveFromCart = require('../components/app-removefromcart');
var Increase = require('../components/app-increase');
var Decrease = require('../components/app-decrease');

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
            var total = 0;
            var items = _.map(this.state.items, function(item, index){
                var subTotal = item.cost * item.quantity;
                total += subTotal;
                return(
                    <tr>
                      <td><RemoveFromCart index={index} /></td>
                      <td>{item.title}</td>
                      <td>{item.quantity}</td>
                      <td>
                        <Increase index={index} />
                        <Decrease index={index} />
                      </td>
                      <td>{subTotal}</td>
                    </tr>
                )
            });

            return (
                <table>
                  <thead>
                    <tr>
                      <td></td>
                      <td>Item</td>
                      <td>Quantity</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {items}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="4">Total</td>
                      <td>${total}</td>
                    </tr>
                  </tfoot>
                </table>
            )
        }
});

module.exports = Cart;
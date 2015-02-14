## 005_flux-venti

### Catalog Component

```bash
src/js/components
├── app-catalog.js // <=
└── app.js
```

```javascript
/** @jsx React.DOM */
var React = require('react');
var Catalog = React.createClass({
    render: function() {
        return (
          <p>This is a Catalog Component.</p>
        )
    }
});
module.exports = Catalog;
```

### Set catalog data

#### in store

```javascript
/**
 * カタログデータ
 * @type {{id: number, title: string, cost: number}[]}
 * @private
 */
var _catalog = [
    {id:1, title: 'Widget #1', cost: 1},
    {id:2, title: 'Widget #2', cost: 2},
    {id:3, title: 'Widget #3', cost: 3}
];
```


### Get catalog data

#### in store

```javascript
var AppStore = assign({}, EventEmitter.prototype, {
   ...

    /**
     * カタログを取得できる
     * @returns {{id: number, title: string, cost: number}[]}
     */
    getCatalog: function() {
        return _catalog;
    }

    ...

}
```

### Render Catalog data

```javascript
function getCatalog() {
    return {
        items: AppStore.getCatalog()
    };
}
```

```javascript
var Catalog = React.createClass({
    getInitialState: function() {
      return getCatalog();
    },
    render: function() {
        // カタログ内のitemの数だけjsxをつくる
        var items = _.map(this.state.items, function(item) {
            return (
                <tr>
                  <td>{item.title}</td>
                  <td>${item.cost}</td>
                </tr>
            )
        });
        return (
            <table>
            {items} // React.createElement("table", null, items)
            </table>
        )
    }
});
```

### cart Component

```javascript
005_flux-venti/src/js/components
├── app-addtocart.js
├── app-cart.js // <=
├── app-catalog.js
└── app.js
```

```javascript
/** @jsx React.DOM */
var React = require('react');
var Cart = React.createClass({
    render: function() {
        return (
          <p>This is a Cart Component.</p>
        )
    }
});
module.exports = Cart;
```

### Get cart data

```javascript
function cartItems(){
    return {
        items: AppStore.getCart()
    };
}
```

### Render cart data

```javascript
 getInitialState:function(){
     return cartItems();
 }
```

```javascript
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
```

### Update cart data

```javascript
componentWillMount: function() {
  AppStore.addChangeListener(this._onChange);
},
_onChange: function() {
    this.setState(cartItems());
},
```


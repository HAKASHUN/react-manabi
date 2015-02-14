## 004_flux-grande

### Store structure

```bash
src
├── index.html
└── js
    ├── actions
    │   └── app-actions.js
    ├── components
    │   └── app.js
    ├── constants
    │   └── app-constants.js
    ├── dispatchers
    │   └── app-dispatcher.js
    ├── main.js
    └── stores
        └── app-store.js // <=
```

### Require in store

```javascript
var AppDispathcer = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var _ = require('lodash');
// event emitter
var EventEmitter = require('events').EventEmitter;
```

### define cart item data store

```javascirpt
/**
 * シングルトンのカートアイテムデータ
 * @type {Array}
 * @private
 */
var _cartItems = [];
```

### addItem

``` javascript
/**
 * アイテムを追加する
 * もし既に追加されているアイテムであれば、
 * 量を増やす
 * @param item
 * @private
 */
function _addItem(item) {
    item.quantity = 1;
    item.inCart = true;
    _cartItems.push(item);
}
```

### AppStore

```javascript

var AppStore = assign(EventEmitter.prototype, {
  ...
});

module.exports = AppStore;
```

### dispatcher => store

#### fix dispatcher


```javascript
var AppDispatcher = assign(new Dispatcher(), {...});
```

```javascript
var AppDispatcher = assign(new Dispatcher(), {
   handleViewAction: function(action) {
       this.dispatch({
           source: 'VIEW_ACTION',
           action: action
       });
   }
});
```

#### app store

```javascript
var AppStore = assign({}, EventEmitter.prototype, {
    dispatcherIndex: AppDispathcer.register(function(payload) {

        // dispatchしたものを受け取る
        _addItem(payload.action.item)
    })
});
```

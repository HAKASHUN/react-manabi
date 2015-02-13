var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(Dispatcher.prototype, {
   handleViewAction: function(action) {
       console.log(action);
       alert('dispatch handle view action!')
   }
});

module.exports = AppDispatcher;
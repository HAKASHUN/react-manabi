var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(Dispatcher.prototype, {
   handleViewAction: function(action) {
       console.log(action);
   }
});

module.exports = AppDispatcher;
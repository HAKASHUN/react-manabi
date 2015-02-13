var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var AppActions = {
  addItem: function(item) {
      AppDispatcher.handleViewAction({
          actionType: 'addItem',
          item: item
      });
  }
};

module.exports = AppActions;
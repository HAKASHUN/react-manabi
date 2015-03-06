var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatchers/AppDispatcher');

var CHANGE_EVENT = 'change';

// Photo Data
var _photos = {};

var PhotoStore = assign({}, EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  getAll: function() {
    return _photos;
  }
});

PhotoStore.dispatchToken = AppDispatcher.register(function(action) {
  console.log(action);
});
module.exports = PhotoStore;
var AppDispatcher = require('../dispatchers/app-dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

// TODOをつくる
function create(text) {
    var id = Date.now();
    _todos[id] = {
        id: id,
        complete: false,
        text: text
    };
}

// TODOを消す
function destroy(id) {
    delete _todos[id];
}

// TODOを更新する
function update(id, updates) {
    _todos[id] = assign({}, _todos[id], updates);
}

// TODOをすべて更新する
function updateAll(updates) {
    for(var id in _todos) {
        update(id, updates);
    }
}

function destroyCompleted() {
    for (var id in _todos) {
        if (_todos[id].complete) {
            destroy(id);
        }
    }
}

var TodoStore = assign({}, EventEmitter.prototype, {
   getAll: function() {
       return _todos;
   },
   emitChange: function() {
       this.emit(CHANGE_EVENT);
   },
   addChangeListener: function(callback) {
       this.on(CHANGE_EVENT, callback);
   },
   removeChangeListener: function(callback) {
       this.removeListener(CHANGE_EVENT, callback);
   },
   areAllComplete: function() {
     for(var id in _todos) {
         if(!_todos[id].complete) {
             return false;
         }
     }
     return true;
   },
   dispatcherIndex: AppDispatcher.register(function(action) {
      var text;

      switch(action.actionType) {
          case 'create':
              text = action.text.trim();
              if(text !== '') {
                  create(text);
                  TodoStore.emitChange();
              }
              break;
          case 'destroy':
              destroy(action.id);
              TodoStore.emitChange();
              break;
          case 'complete':
              update(action.id, {complete: true})
              TodoStore.emitChange();
              break;
          case 'undocomplete':
              update(action.id, {complete: false})
              TodoStore.emitChange();
              break;
          case 'updatetext':
              update(action.id, {text: action.text})
              TodoStore.emitChange();
              break;
          case 'completeall':
              if (TodoStore.areAllComplete()) {
                  updateAll({complete: false});
              } else {
                  updateAll({complete: true});
              }
              TodoStore.emitChange();
              break;
          case 'destroycompleted':
              destroyCompleted();
              TodoStore.emitChange();
              break;
      }

      return true;
   })
});

module.exports = TodoStore;
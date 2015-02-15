var AppDispatcher = require('../dispatchers/app-dispatcher');

var TodoActions = {
    create: function(text) {
        AppDispatcher.dispatch({
            actionType: 'create',
            text: text
        })
    },
    destroy: function(id) {
        AppDispatcher.dispatch({
            actionType: 'destroy',
            id: id
        })
    },
    updateText: function(id, text) {
        AppDispatcher.dispatch({
            actionType: 'updatetext',
            id: id,
            text: text
        });
    },
    toggleComplete: function(todo) {
        var id = todo.id;
        if(todo.complete) {
            AppDispatcher.dispatch({
                actionType: 'undocomplete',
                id: id
            });
        } else {
            AppDispatcher.dispatch({
                actionType: 'complete',
                id: id
            });
        }
    },
    toggleCompleteAll: function() {
        AppDispatcher.dispatch({
            actionType: 'completeall'
        });
    },
    destroyCompleted: function() {
        AppDispatcher.dispatch({
            actionType: 'destroycompleted'
        });
    }
};

module.exports = TodoActions;
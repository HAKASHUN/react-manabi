var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var _ = require('lodash');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

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

/**
 * シングルトンのカートアイテムデータ
 * @type {Array}
 * @private
 */
var _cartItems = [];

/**
 * アイテムを追加する
 * もし既に追加されているアイテムであれば、
 * 量を増やす
 * @param item
 * @private
 */
function _addItem(item) {
    if(item.inCart) {
        _.forEach(_cartItems, function(v, i) {
           if(v.id === item.id) {
               _increaseItem(i);
           }
        });
    } else {
        item.quantity = 1;
        item.inCart = true;
        _cartItems.push(item);
    }
}

function _removeItem(index) {
    _cartItems[index].inCart = false;
    _cartItems.splice(index, 1);
}

/**
 * アイテムの量を増やす
 * @param index
 * @private
 */
function _increaseItem(index) {
    _cartItems[index].quantity++;
}

/**
 * アイテムの量を増やす
 * @param index
 * @private
 */
function _decreaseItem(index) {
    if(_cartItems[index].quantity > 1){
        _cartItems[index].quantity--;
    }
    else {
        _removeItem(index);
    }
}

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function() {
      this.emit(CHANGE_EVENT);
    },
    /**
     * changeイベントがemitされたときのcallbackをセットする
     * @param callback
     */
    addChangeListener: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    /**
     * changeイベントがemitされあときにcallbackを解除する
     * @param callback
     */
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    /**
     * カタログを取得できる
     * @returns {{id: number, title: string, cost: number}[]}
     */
    getCatalog: function() {
        return _catalog;
    },
    /**
     * カートアイテムを取得できる
     * @returns {{id: number, title: string, cost: number}[]}
     */
    getCart: function() {
        return _cartItems;
    },
    /**
     * AppDispatcherがdispatchしたときに入ってくる
     */
    dispatcherIndex: AppDispatcher.register(function(payload) {
        var action = payload.action;

        switch (action.actionType) {
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
                break;
            case AppConstants.REMOVE_ITEM:
                _removeItem(payload.action.index);
                break;
            case AppConstants.INCREASE_ITEM:
                _increaseItem(payload.action.index);
                break;
            case AppConstants.DECREASE_ITEM:
                _decreaseItem(payload.action.index);
                break;
        }

        AppStore.emitChange();

        //TODO: なぜ true を返すのか調べる
        return true;
    })
});

module.exports = AppStore;
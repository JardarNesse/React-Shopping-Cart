// sort of model

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var _events = [];
var logVisible = true;

function logItemAddedEvent(data) {
  _events.unshift (data.type + ' ble lagt til i handlekurv (' + data.sku + '), pris (NOK) ' + data.price + '.');
}

function logItemRemovedEvent(data) {
  _events.unshift(data.type + '-produktene (' + data.sku + ') ble fjernet fra handlekurv.');
}

function toggleLogVisability(data){
  logVisible = !logVisible;
}

// Extend LogStore with EventEmitter to add eventing capabilities
var LogStore = _.extend({}, EventEmitter.prototype, {

 // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Return events data
  getLogItems: function() {
    return _events;
  },

  getLogVisible: function() {
    return logVisible;
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
  var action = payload.action;

  if (action.actionType === FluxCartConstants.LOG_CART_ADD){
    logItemAddedEvent(action.update);  
  }

  if (action.actionType === FluxCartConstants.LOG_ITEM_REMOVED){
    logItemRemovedEvent(action);  
  }

  if (action.actionType === FluxCartConstants.TOGGLE_LOG ){
      toggleLogVisability(action.actionType);
  }
  // If action was responded to, emit change event
  LogStore.emitChange();
  
  return true;

});

module.exports = LogStore;

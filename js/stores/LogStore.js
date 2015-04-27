var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var _events = [];

function logItemAddedEvent(data) {
  _events[_events.length] = 'Produkt ' + data.sku + ' lagt til i handlekurv: ' + data.type + ', pris (NOK) ' + data.price + '.';
}

function logItemRemovedEvent(data) {
  _events[_events.length] = 'Produkter med produkt id ' + data.sku + ' ble fjernet fra handlekurv.';
}

// Extend LogStore with EventEmitter to add eventing capabilities
var LogStore = _.extend({}, EventEmitter.prototype, {

  // Return events data
  getLogItems: function() {
    return _events;
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

  return true;

});

module.exports = LogStore;

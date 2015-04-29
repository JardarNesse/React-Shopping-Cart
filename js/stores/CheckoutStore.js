// sort of model

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var checkoutVisible = false;

function toggleVisability(data){
  checkoutVisible = !checkoutVisible;
}

// Extend CheckoutStore with EventEmitter to add eventing capabilities
var CheckoutStore = _.extend({}, EventEmitter.prototype, {

 // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  getCheckoutVisible: function() {
    return checkoutVisible;
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

  if (action.actionType === FluxCartConstants.TOGGLE_CHECKOUT){
      toggleVisability(action.actionType);
  }

  // If action was responded to, emit change event
  CheckoutStore.emitChange();
  
  return true;
});

module.exports = CheckoutStore;

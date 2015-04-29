// sort of model

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxCartConstants = require('../constants/FluxCartConstants');
var _ = require('underscore');

// Define initial data points
var checkoutVisible = true;
var customer = {
      firstName: '',
      lastName: '',
      address: '',
      mobile: '',
      email: ''
    };

function toggleVisability(data){
  checkoutVisible = !checkoutVisible;
}

function setCheckoutData(data){

  switch(data.name){
    case 'firstName':
      customer.firstName = data.value;
      break;
     case ('lastName'):
      customer.lastName = data.value;
      break;
     case ('address'):
      customer.address = data.value;
      break;
     case ('mobile'):
      customer.mobile = data.value;
      break;
     case ('email'):
      customer.email = data.value;
      break;                  
  }
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

  getData: function(){
      return customer;
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

  if(action.actionType === FluxCartConstants.SET_CHECKOUT_DATA){
    setCheckoutData(action.data);   
  }

  // If action was responded to, emit change event
  CheckoutStore.emitChange();
  
  return true;
});

module.exports = CheckoutStore;

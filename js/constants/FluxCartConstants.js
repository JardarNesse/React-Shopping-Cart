var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
  CART_ADD: null,
  CART_REMOVE: null,
  CART_VISIBLE: null,
  SET_SELECTED: null,
  RECEIVE_DATA: null,
  LOG_CART_ADD: null,
  LOG_ITEM_REMOVED: null,
  TOGGLE_LOG: null,
  TOGGLE_CHECKOUT: null,
  SET_CHECKOUT_DATA: null
});

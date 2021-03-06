// sort of the controller

var React = require('react');
var CartStore = require('../stores/CartStore');
var ProductStore = require('../stores/ProductStore');
var FluxProduct = require('./FluxProduct.react');
var FluxCart = require('./FluxCart.react');
var Log = require('./Log.react');
var LogStore = require('../stores/LogStore');
var Checkout = require('./Checkout');
var CheckoutView = require('./CheckoutView');
var CheckoutStore = require('../stores/CheckoutStore');

// Method to retrieve state from Stores
function getCartState() {

  return {
    product: ProductStore.getProduct(),
    selectedProduct: ProductStore.getSelected(),
    cartItems: CartStore.getCartItems(),
    cartCount: CartStore.getCartCount(),
    cartTotal: CartStore.getCartTotal(),
    cartVisible: CartStore.getCartVisible(),
    logItems: LogStore.getLogItems(),
    logVisible: LogStore.getLogVisible(),
    checkoutVisible: CheckoutStore.getCheckoutVisible(),
    customerInfo: CheckoutStore.getCustomerInformation()
  };
}

// Define main Controller View
var FluxCartApp = React.createClass({

  // Get initial state from stores
  getInitialState: function() {
    return getCartState();
  },

  // Add change listeners to stores
  componentDidMount: function() {
    ProductStore.addChangeListener(this._onChange);
    CartStore.addChangeListener(this._onChange);
    LogStore.addChangeListener(this._onChange);
    CheckoutStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ProductStore.removeChangeListener(this._onChange);
    CartStore.removeChangeListener(this._onChange);
    LogStore.removeChangeListener(this._onChange);
    CheckoutStore.removeChangeListener(this._onChange);
  },

  // Render our child components, passing state via props
  render: function() {
  	return (
      <div className="flux-cart-app">
        <FluxCart products={this.state.cartItems} count={this.state.cartCount} total={this.state.cartTotal} visible={this.state.cartVisible} />
        <FluxProduct product={this.state.product} cartitems={this.state.cartItems} selected={this.state.selectedProduct} bankId={this.state.bankIdVisible}/>
        <Log events={this.state.logItems} logVisible={this.state.logVisible}/>
        <Checkout visible={this.state.checkoutVisible} customerInfo={this.state.customerInfo}/>
        <CheckoutView customerInfo={this.state.customerInfo}/>
      </div>
  	);
  },

  // Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getCartState());
  }

});

module.exports = FluxCartApp;
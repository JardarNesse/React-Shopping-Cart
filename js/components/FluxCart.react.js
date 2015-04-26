var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

// Flux cart view
var FluxCart = React.createClass({

  // Remove item from Cart via Actions
  removeFromCart: function(sku){
    FluxCartActions.removeFromCart(sku);
    FluxCartActions.updateCartVisible(false);
  },

  // Render cart view
  render: function() {
    var self = this, products = this.props.products;
    return (
      <div className={"flux-cart " + (this.props.count > 0 ? 'active' : '')}>
        <div className="mini-cart">
          <ul>
            {Object.keys(products).map(function(product){
              return (
                <li key={product}>
                  <h1 className="name">{products[product].name}</h1>
                  <p className="type">{products[product].type} x {products[product].quantity}</p>
                  <p className="price">{(products[product].price * products[product].quantity).toFixed(2)} kr</p>
                  <button type="button" className="remove-item" onClick={self.removeFromCart.bind(self, product)}>Ta bort</button>
                </li>
              )
            })}
          </ul>
          <span className="total">Pris totalt: {this.props.total} kr</span>
        </div>
      </div>
    );
  },

});

module.exports = FluxCart;
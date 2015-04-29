// view

var React = require('react');

var Checkout = React.createClass({

  toggleCheckout: function(event){
    FluxCartActions.toggleCheckout(this.props.visible);
  },

  render: function() {

    if (!this.props.visible){return false;}
    
    return (
     <div className={"checkout"}>
		    <h1>Kundeinformasjon</h1>
        <div>
          <p>Fornavn:<input type="text" /></p>
          <p>Etternavn:<input type="text" /></p>
          <p>Adresse:<input type="text" /></p>
          <p>Mobiltelefon:<input type="text" /></p>
          <p>E-post:<input type="text" /></p>
        </div>
    </div>
    );
  },

});

module.exports = Checkout;
// view

var React = require('react');
var FluxCartActions = require('../actions/FluxCartActions');

var Checkout = React.createClass({

  toggleCheckout: function(event){
    FluxCartActions.toggleCheckout(this.props.visible);
  },

  setValues: function(event){
    FluxCartActions.setCheckoutInformation(event.target);
  },

  render: function() {

    if (!this.props.visible){return false;}

    var data = this.props.data;
    
    return (
     <div className={"checkout"}>
		    <h1>Kundeinformasjon</h1>
        <div>
          <p>Fornavn:<input type="text" name="firstName" value={data.firstName} onChange={this.setValues} /></p>
          <p>Etternavn:<input type="text" name="lastName" value={data.lastName} onChange={this.setValues} /></p>
          <p>Adresse:<input type="text" name="address" value={data.address} onChange={this.setValues} /></p>
          <p>Mobiltelefon:<input type="text" name="mobile" value={data.mobile} onChange={this.setValues} /></p>
          <p>E-post:<input type="text" name="email" value={data.email} onChange={this.setValues} /></p>
        </div>
    </div>
    );
  },

});

module.exports = Checkout;
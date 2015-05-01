// view

var React = require('react');

var CheckoutView = React.createClass({

  render: function() {

    var customerInfo = this.props.customerInfo;
    if (!customerInfo.firstName.length > 0){return false;}
    
    return (
     <div className={"checkout-view"}>
        <div>
          <h1>Kundeinformasjon</h1>
          { customerInfo.firstName ? 'Fornavn: ' + customerInfo.firstName : null}<br/>
          { customerInfo.lastName ? 'Etternavn: ' + customerInfo.lastName : null} <br/>
          { customerInfo.address ? 'Adresse: ' + customerInfo.address : null} <br/>
          { customerInfo.mobile ? 'Mobiltelefon: ' + customerInfo.mobile : null} <br/>
          { customerInfo.email ? 'E-post: ' + customerInfo.email : null} 
        </div>
    </div>
    );
  },

});

module.exports = CheckoutView;
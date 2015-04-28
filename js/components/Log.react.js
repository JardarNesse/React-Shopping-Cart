var React = require('react');

var Log = React.createClass({

  render: function() {

  	var events = this.props.events;
    var logVisible = this.props.logVisible;

    if (events[0] == undefined) {
      return <div></div>;
    }

    return (
     <div className={logVisible ? "log" : "logHidden"}>
		  <ul>
        {Object.keys(events).map(function(item){
          return (
            <li key={item}>
              <p>{events[item]}</p>
            </li>
          )
        })}
      </ul>
    </div>
    );
  },

});

module.exports = Log;
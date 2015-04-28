var React = require('react');

var Log = React.createClass({

  render: function() {

  	var events = this.props._events;
    var logVisible = this.props.visible;

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
var React = require('react');

var Log = React.createClass({

  render: function() {

  	var events = this.props._events;

    if (events[0] == undefined) {
      return <div></div>;
    }

    return (
      <div className={"log"}>
          Eventlog: <br />
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
/** @jsx React.DOM */

var React = require('react');

/**
 * Tab module
 * A simple tab component.
**/

var Tab = React.createClass({
  getInitialState: function(){
     return {
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  render: function(){

    return (
      <div className="react-tab hidden">
        {this.props.children}
      </div>
    );
  }
});

module.exports = Tab;
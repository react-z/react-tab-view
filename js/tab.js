/** @jsx React.DOM */

var React = require('react');

/**
 * Tab module
 * A simple tab component.
**/

var Tab = React.createClass({displayName: "Tab",
  getInitialState: function(){
     return {
       items:  this.props.items
     }
  },
  componentDidMount: function() {
  },
  componentWillUnmount: function() {
  },  
  render: function(){

    return (
      React.createElement("div", {className: "react-tab hidden"}, 
        this.props.children
      )
    );
  }
});

module.exports = Tab;
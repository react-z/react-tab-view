import React from 'react'

/**
 * Tab module
 * A simple tab component.
**/

let Tab = React.createClass({displayName: "Tab",
  getInitialState: function(){
     return {}
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
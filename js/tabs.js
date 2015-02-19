/** @jsx React.DOM */

var React = require('react');
var Tab = require('../jsx/tab.jsx');

/**
 * Tabs module
 * A simple tab component.
**/

var Tabs = React.createClass({displayName: "Tabs",
  getInitialState: function(){
     return {
       headers: this.props.headers
     }
  },
  componentDidMount: function() {
    var tabArray = this.refs.tabs.getDOMNode().children;
    for(var i = 0; i < tabArray.length; i++){
      tabArray[i].className = "react-tab hidden"
    } 
    tabArray[0].className = "react-tab";
  },
  componentWillUnmount: function() {
  },  
  /** 
   * Tab has changed, trigger new tab container 
  **/
  changeTab: function (e) {
    var id = e.target.getAttribute('data-tab-id');

    var tabArray = this.refs.tabs.getDOMNode().children;
    for(var i = 0; i < tabArray.length; i++){
      tabArray[i].className = "react-tab hidden"
    } 
    tabArray[id].className = "react-tab";


  },
  render: function(){

    var headers = this.state.headers.map(function (h, i) {
      return (
        React.createElement("li", {className: "pure-menu-selected"}, 
          React.createElement("a", {"data-tab-id": i, onClick: this.changeTab}, 
            h
          )
        )
      );
    }.bind(this));


    return (
      React.createElement("div", {className: "react-tabs"}, 

        React.createElement("div", {className: "pure-menu pure-menu-open pure-menu-horizontal"}, 
            React.createElement("ul", null, 
                headers
            )
        ), 
        
        React.createElement("div", {className: "pure-g"}, 

            React.createElement("div", {className: "pure-u-1-1", ref: "tabs"}, 
              this.props.children
            )
        )

      )
    );
  }
});

module.exports = Tabs;
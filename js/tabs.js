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
    // set 1st tab and tab header as active
    var tabs = this.refs.tabs.getDOMNode().children[0].className = "react-tab";
    this.refs['list0'].getDOMNode().className = "pure-menu-selected";
  },
  componentWillUnmount: function() {
  },  
  /** 
   * Tab has changed 
  **/
  changeTab: function (e) {
    var id = e.target.getAttribute('data-tab-id');
    this.setActiveTab(id);

    var list = e.target.parentElement.parentElement.children;
    this.setActiveTabHeader(list,id);

  },
  /** 
   * Set the active tab by id 
  **/
  setActiveTab: function (id) {
    // hide all tab content    
    var tabs = this.refs.tabs.getDOMNode().children;
    for(var i = 0; i < tabs.length; i++){
      tabs[i].className = "react-tab hidden";
    }
    // set selected tab content as visible
    tabs[id].className = "react-tab";    
  },
  /** 
   * Set the active tab header in the list by id 
  **/  
  setActiveTabHeader: function (list, id) {
    // set all headings as deselected
    for(var i = 0; i < list.length; i++){
      list[i].className = "pure-menu";
    }
    // set selected heading as selected
    list[id].className = "pure-menu-selected";    
  },
  render: function(){

    var headers = this.state.headers.map(function (h, i) {
      return (
        React.createElement("li", {ref: 'list' + i, className: "pure-menu"}, 
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
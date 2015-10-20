import React from 'react'

/**
 * Tabs module
 * A simple tab component.
**/

let Tabs = React.createClass({displayName: "Tabs",
  getInitialState: function(){
     return { }
  },
  componentDidMount: function() {
    // set 1st tab and tab header as active
    let tabs = this.refs.tabs.getDOMNode().children[0].className = "react-tab";
    this.refs['list0'].getDOMNode().className = "selected";
  },
  componentWillUnmount: function() {
  },  
  /** 
   * Tab has changed 
  **/
  changeTab: function (e) {
    let id = e.target.getAttribute('data-tab-id');
    this.setActiveTab(id);

    let list = e.target.parentElement.parentElement.children;
    this.setActiveTabHeader(list,id);
  },
  /** 
   * Set the active tab by id 
  **/
  setActiveTab: function (id) {
    // hide all tab content    
    let tabs = this.refs.tabs.getDOMNode().children;
    for(let i = 0; i < tabs.length; i++){
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
    for(let i = 0; i < list.length; i++){
      list[i].className = "";
    }
    // set selected heading as selected
    list[id].className = "selected";    
  },
  render: function(){

    let headers = this.props.headers.map(function (h, i) {
      return (
        React.createElement("li", {ref: 'list' + i, key: i}, 
          React.createElement("a", {"data-tab-id": i, onClick: this.changeTab}, 
            h
          )
        )
      );
    }.bind(this));

    return (
      React.createElement("div", {className: "react-tabs"}, 
        React.createElement("div", {className: "menu"}, 
            React.createElement("ul", null, 
                headers
            )
        ), 
        
        React.createElement("div", {className: "tab-content", ref: "tabs"}, 
              this.props.children
        )
      )
    );
  }

});

module.exports = Tabs;

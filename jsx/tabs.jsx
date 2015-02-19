/** @jsx React.DOM */

var React = require('react');
var Tab = require('../jsx/tab.jsx');

/**
 * Tabs module
 * A simple tab component.
**/

var Tabs = React.createClass({
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
        <li className="pure-menu-selected">
          <a data-tab-id={i} onClick={this.changeTab}>
            {h}
          </a>
        </li>
      );
    }.bind(this));


    return (
      <div className="react-tabs">

        <div className="pure-menu pure-menu-open pure-menu-horizontal">
            <ul>
                {headers}
            </ul>
        </div>
        
        <div className="pure-g">

            <div className="pure-u-1-1" ref="tabs">
              {this.props.children}                           
            </div>
        </div>

      </div>
    );
  }
});

module.exports = Tabs;
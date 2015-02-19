var React = require('react');
var Tab = require('../jsx/tab.jsx');
var Tabs = require('../jsx/tabs.jsx');

var HEADERS = ['heading 1', 'heading 2', 'heading 3'];


var TabExample = React.createClass({displayName: "TabExample",
  render: function() {
    return (
    	React.createElement(Tabs, {headers: HEADERS}, 
    		React.createElement(Tab, null, React.createElement("span", null, "content 1")), 
    		React.createElement(Tab, null, React.createElement("span", null, "content 2")), 
    		React.createElement(Tab, null, React.createElement("span", null, "content 3"))
    	)
    );
  }
});

React.render(
  React.createElement(TabExample, null),
  document.getElementById('container')
);

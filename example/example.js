var React = require('react');
var tabs = require('../js/main.js'),
    Tabs = tabs.Tabs,
    Tab = tabs.Tab,
    headers = ['heading 1', 'heading 2', 'heading 3'];

var TabExample = React.createClass({displayName: "TabExample",
  render: function() {
    return (
    	React.createElement(Tabs, {headers: headers}, 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 1"), 
    			React.createElement("p", null, "This is the first tab")
    		), 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 2"), 
    			React.createElement("p", null, "This is the second tab")
    		), 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 3"), 
    			React.createElement("p", null, "This is the third tab")
    		)
    	)
    );
  }
});

React.render(
  React.createElement(TabExample, null),
  document.getElementById('container')
);

var React = require('react');
var Tab = require('../jsx/tab.jsx');
var Tabs = require('../jsx/tabs.jsx');

var HEADERS = ['heading 1', 'heading 2', 'heading 3'];


var TabExample = React.createClass({displayName: "TabExample",
  render: function() {
    return (
    	React.createElement(Tabs, {headers: HEADERS}, 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 1"), 
    			React.createElement("p", null, 
    			"This is the first tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu." + ' ' + 
    			"Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate"
    			)
    		), 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 2"), 
    			React.createElement("p", null, 
    			"This is the second tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu." + ' ' + 
    			"Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate"
    			)
    		), 
    		React.createElement(Tab, null, 
    			React.createElement("h3", null, "content 3"), 
    			React.createElement("p", null, 
    			"This is the third tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu." + ' ' + 
    			"Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate"
    			)
    		)
    	)
    );
  }
});

React.render(
  React.createElement(TabExample, null),
  document.getElementById('container')
);

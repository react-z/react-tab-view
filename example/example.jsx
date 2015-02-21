var React = require('react');
var tabs = require('../js/main.js'),
    Tabs = tabs.Tabs,
    Tab = tabs.Tab,
    headers = ['heading 1', 'heading 2', 'heading 3'];

var TabExample = React.createClass({
  render: function() {
    return (
    	<Tabs headers={headers}>
    		<Tab>
    			<h3>content 1</h3>
    			<p>This is the first tab</p>
    		</Tab>
    		<Tab>
    			<h3>content 2</h3>
    			<p>This is the second tab</p>
    		</Tab>
    		<Tab>
    			<h3>content 3</h3>
    			<p>This is the third tab</p>
    		</Tab>
    	</Tabs>
    );
  }
});

React.render(
  <TabExample />,
  document.getElementById('container')
);

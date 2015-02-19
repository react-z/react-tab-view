var React = require('react');
var Tab = require('../jsx/tab.jsx');
var Tabs = require('../jsx/tabs.jsx');

var HEADERS = ['heading 1', 'heading 2', 'heading 3'];


var TabExample = React.createClass({
  render: function() {
    return (
    	<Tabs headers={HEADERS}>
    		<Tab><span>content 1</span></Tab>
    		<Tab><span>content 2</span></Tab>
    		<Tab><span>content 3</span></Tab>
    	</Tabs>
    );
  }
});

React.render(
  <TabExample />,
  document.getElementById('container')
);

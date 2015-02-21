var React = require('react');
var Tab = require('../jsx/tab.jsx');
var Tabs = require('../jsx/tabs.jsx');

var HEADERS = ['heading 1', 'heading 2', 'heading 3'];


var TabExample = React.createClass({
  render: function() {
    return (
    	<Tabs headers={HEADERS}>
    		<Tab>
    			<h3>content 1</h3>
    			<p>
    			This is the first tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu. 
    			Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate
    			</p>
    		</Tab>
    		<Tab>
    			<h3>content 2</h3>
    			<p>
    			This is the second tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu. 
    			Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate
    			</p>
    		</Tab>
    		<Tab>
    			<h3>content 3</h3>
    			<p>
    			This is the third tab, Lorem ipsum dolor sit amet, te sit vocent voluptua sapientem, nam graeco epicuri eu. 
    			Quem corpora pro cu, quo id zril mentitum similique. Sea no malis suavitate
    			</p>
    		</Tab>
    	</Tabs>
    );
  }
});

React.render(
  <TabExample />,
  document.getElementById('container')
);

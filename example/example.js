import React from 'react'
import tabs from '../lib/main'

let Tabs = tabs.Tabs,
    Tab = tabs.Tab,
    headers = ['heading 1', 'heading 2', 'heading 3'];

let TabExample = React.createClass({
  render: function() {
    return (
    	<Tabs headers={headers}>
    		<Tab>
    			<p>This is the first tab</p>
    		</Tab>
    		<Tab>
    			<p>This is the second tab</p>
    		</Tab>
    		<Tab>
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

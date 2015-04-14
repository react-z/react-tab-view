# react-tab-view

react-tab-view is a simple tabs component using react.js.

![](example/screenshot.png)

## Installation

`npm install react-tab-view --save`

## Usage

```javascript
var React = require('react');
var tabs = require('react-tab-view'),
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

```

## Styles

react-tab-view can be used with your own custom styles. A minimal tabs.css style sheet is included as a guide.

## Development

Initial set up, run:
    
    npm install

For watch on files, live reload, JSX transpiling and browserify, run:

    gulp

## License

(The MIT License)

Copyright (c) 2015 isekivacenz &lt;stevenisekimartin@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

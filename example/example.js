import { Tabs, Tab } from '../lib/index' // 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'

class TestComponent extends Component {

  render () {

    const headers = ['heading 1', 'heading 2', 'heading 3'];

    return (
      <div>
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
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />, 
  document.getElementById('root')
)
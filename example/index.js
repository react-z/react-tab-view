import { Tabs, Tab } from '../lib/index' // 'react-tab-view'
import ReactDOM from 'react-dom'
import React, { Component } from 'react'

class TestComponent extends Component {
  handleChange(e) {
    this.setState({ value: e })
    console.log(e)
  }

  render() {
    const headers = ['Heading 1', 'Heading 2', 'Heading 3']

    return (
      <div>
        <Tabs headers={headers}>
          <Tab>
            <div>
              <p>This is the first tab</p>
              <p>with some content</p>
            </div>
            <div>
              <p>and some more content</p>
            </div>
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

ReactDOM.render(<TestComponent />, document.getElementById('root'))

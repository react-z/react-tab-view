import React, { Component, PropTypes } from 'react'

/**
 * Tab module
 * A simple tab component.
**/
class Tab extends Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  static get propTypes () {
    return {
      children: PropTypes.object.isRequired
    }
  }

  render () {
    return (
      <div className='react-tab hidden'>
        {this.props.children}
      </div>
      )
  }
}

export default Tab

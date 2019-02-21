import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Tab module
 * A simple tab component.
 **/
class Tab extends Component {
  static get propTypes() {
    return {
      children: PropTypes.node.isRequired
    }
  }

  render() {
    return (
      <TabWrapper className="hidden">
        {this.props.children}
      </TabWrapper>
    )
  }
}

export default Tab

const TabWrapper = styled.div`
  background: rgb(250, 250, 250);
  margin: 1em auto;
  border: 1px solid #ddd;
  padding: 1em;

  .hidden {
    display: none;
  }
`

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * Tabs module
 * A simple tab component.
 **/
class Tabs extends Component {
  static get propTypes() {
    return {
      onChangeTab: PropTypes.func,
      children: PropTypes.array.isRequired,
      headers: PropTypes.array.isRequired
    }
  }

  constructor(props) {
    super(props)
    this.changeTab = this.changeTab.bind(this)
  }

  componentDidMount() {
    // set 1st tab and tab header as active
    this.refs.tabs.children[0].className = 'react-tab'
    this.refs['list0'].className = 'selected'
  }

  changeTab(e) {
    if (this.props.onChangeTab !== undefined) {
      this.props.onChangeTab(e)
    }

    let id = e.target.getAttribute('data-tab-id')
    this.setActiveTab(id)

    let list = e.target.parentElement.parentElement.children
    this.setActiveTabHeader(list, id)
  }

  setActiveTab(id) {
    // hide all tab content
    let tabs = this.refs.tabs.children
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = 'tab hidden'
    }
    // set selected tab content as visible
    tabs[id].className = 'tab'
  }

  setActiveTabHeader(list, id) {
    // set all headings as deselected
    for (let i = 0; i < list.length; i++) {
      list[i].className = ''
    }
    // set selected heading as selected
    list[id].className = 'selected'
  }

  render() {
    let headers = this.props.headers.map((h, i) => {
      return (
        <li key={i} ref={'list' + i}>
          <a data-tab-id={i} onClick={this.changeTab}>
            {h}
          </a>
        </li>
      )
    })

    return (
      <TabsWrapper>
        <div>
          <ul>{headers}</ul>
        </div>

        <div className="content" ref="tabs">
          {this.props.children}
        </div>
      </TabsWrapper>
    )
  }
}

export default Tabs

const TabsWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 2px;
  height: auto;
  margin: 0;
  padding: 10px;
  margin: 0 auto;
  display: block;

  .tab {
    margin: 0;
    padding: 10px;
  }
  .hidden {
    display: none;
  }
  content {
    width: 80%;
  }

  &:focus {
    outline: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    display: inline;
  }

  a {
    text-decoration: none;
    padding: 0.5em;
  }

  .selected a {
    color: #b7b7b7 !important;
  }

  a:hover {
    color: #b7b7b7;
  }
`

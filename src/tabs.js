import React, { Component, PropTypes } from 'react'

/**
 * Tabs module
 * A simple tab component.
**/
class Tabs extends Component {

  static get defaultProps () {
    return {
      classPrefix: 'react-tabs'
    }
  }

  static get propTypes () {
    return {
      classPrefix: PropTypes.string,
      onChangeTab: PropTypes.func,
      children: PropTypes.array.isRequired,
      headers: PropTypes.array.isRequired
    }
  }

  constructor (props) {
    super(props)
    this.state = {}
    this.changeTab = this.changeTab.bind(this)
  }

  componentDidMount () {
    // set 1st tab and tab header as active
    this.refs['list0'].className = 'selected'
  }

  changeTab (e) {
    if (this.props.onChangeTab !== undefined) {
      this.props.onChangeTab(e)
    }

    let id = e.target.getAttribute('data-tab-id')
    this.setActiveTab(id)

    let list = e.target.parentElement.parentElement.children
    this.setActiveTabHeader(list, id)
  }

  setActiveTab (id) {
    // hide all tab content
    let tabs = this.refs.tabs.children
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = 'react-tab hidden'
    }
    // set selected tab content as visible
    tabs[id].className = 'react-tab'
  }

  setActiveTabHeader (list, id) {
    // set all headings as deselected
    for (let i = 0; i < list.length; i++) {
      list[i].className = ''
    }
    // set selected heading as selected
    list[id].className = 'selected'
  }

  render () {
    let headers = this.props.headers.map((h, i) => {
      return (
        <li key={i} ref={'list' + i}>
          <a data-tab-id={i} onClick={this.changeTab}>{h}</a>
        </li>
      )
    })

    return (

      <div className={this.props.classPrefix}>
        <div className='header'>
          <ul>
            {headers}
          </ul>
        </div>

        <div className='tab-content' ref='tabs'>
          {this.props.children}
        </div>
      </div>
    )
  }

}

export default Tabs

/* setup enzyme */
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

/* setup jsdom */
var jsdom = require('jsdom')
const { JSDOM } = jsdom
const window = new JSDOM('').window
global.window = window
global.document = window.document

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import Tab from '../tab'

test('Tab renders correctly and matches snapshot', () => {
  const component = renderer.create(
    <Tab><span>Test tab content</span></Tab>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('YearMonthPicker renders the correct elements and props', () => {
  const wrapper = shallow(
    <Tab><span>Test tab content</span></Tab>
  )

  expect(wrapper.find('span').length).toEqual(1)
  expect(
    wrapper
      .find('span')
      .text()
  ).toContain('Test tab content')

  // console.log(wrapper.debug())
})

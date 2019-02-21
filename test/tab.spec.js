import expect from 'expect'
import test from 'tape'
import React from 'react'
import { shallow, mount } from 'enzyme'
import Tab from '../src/tab'

test('Visit component', (t) => {
  const wrapper = mount(<Tab><span>hey there</span></Tab>)

  t.equal(
    wrapper.find('div').text(), 'hey there', 'the tab component has no text'
  )

  t.pass(
    expect(wrapper.props().children).toEqual(<span>hey there</span>)
  )

  t.end()
});

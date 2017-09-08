import { shallow } from 'vue-test-utils'
import { expect } from 'chai'
import Parent from '../components/Parent.vue'
import Basic from '../components/Basic.vue'

describe('Parent.vue', () => {
  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).to.equal(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).to.equal(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).to.equal(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).to.equal(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).to.equal(3)
  })
})

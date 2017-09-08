import { shallow } from 'vue-test-utils'
import Parent from '../components/Parent.vue'
import Basic from '../components/Basic.vue'

describe('Parent.vue', () => {
  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).toBe(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).toBe(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).toBe(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).toBe(3)
  })

  it('renders 3 Basic components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Basic).length).toBe(3)
  })
})

import { shallow } from 'vue-test-utils'
import { expect } from 'chai'
import Parent from '../components/Parent.vue'
import Child from '../components/Child.vue'

describe('Parent.vue', () => {
  it('renders 3 Child components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Child).length).to.equal(3)
  })

  it('renders 3 Child components', () => {
    const wrapper = shallow(Parent)
    expect(wrapper.findAll(Child).length).to.equal(3)
  })
})

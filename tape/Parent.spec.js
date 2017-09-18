import { shallow } from 'vue-test-utils'
import test from 'tape'
import Parent from '../components/Parent.vue'
import Child from '../components/Child.vue'

test('Parent.vue renders 3 Child components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Child).length, 3)
})

test('Parent.vue renders 3 Child components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Child).length, 3)
})

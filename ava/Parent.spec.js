import { shallow } from 'vue-test-utils'
import test from 'ava'
import Parent from '../components/Parent.vue'
import Child from '../components/Child.vue'

test('Parent.vue renders 3 Child components', t => {
  const wrapper = shallow(Parent)
  t.is(wrapper.findAll(Child).length, 3)
})

test('Parent.vue renders 3 Child components', t => {
  const wrapper = shallow(Parent)
  t.is(wrapper.findAll(Child).length, 3)
})

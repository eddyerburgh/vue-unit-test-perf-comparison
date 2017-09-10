import { shallow } from 'vue-test-utils'
import test from 'tape'
import Parent from '../components/Parent.vue'
import Basic from '../components/Basic.vue'

test('Parent.vue renders 3 Basic components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Basic).length, 3)
})

test('Parent.vue renders 3 Basic components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Basic).length, 3)
})

test('Parent.vue renders 3 Basic components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Basic).length, 3)
})

test('Parent.vue renders 3 Basic components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Basic).length, 3)
})

test('Parent.vue renders 3 Basic components', t => {
  t.plan(1)
  const wrapper = shallow(Parent)
  t.equal(wrapper.findAll(Basic).length, 3)
})

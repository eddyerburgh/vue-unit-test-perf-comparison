import { shallow } from 'vue-test-utils'
import test from 'tape'
import Basic from '../components/Basic1.vue'

test('Basic.vue', t => {
  t.plan(1)
  const wrapper = shallow(Basic)
  t.equal(wrapper.find('div h1').text(), 'Welcome to Your Vue.js App')
})

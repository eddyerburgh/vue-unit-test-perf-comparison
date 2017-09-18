import { shallow } from 'vue-test-utils'
import test from 'ava'
import Basic from '../components/Basic6.vue'

test('Basic.vue', t => {
  const wrapper = shallow(Basic)
  t.is(wrapper.find('div h1').text(), 'Welcome to Your Vue.js App')
})

import { shallow } from 'vue-test-utils'
import Basic from '../components/Basic7.vue'

describe('Basic.vue', () => {
  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('div h1').text()).toEqual('Welcome to Your Vue.js App')
  })
})

import { shallow } from 'vue-test-utils'
import { expect } from 'chai'
import Basic from '../components/Basic.vue'

describe('Basic.vue', () => {
  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })

  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })

  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })

  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })

  it('displays correct test', () => {
    const wrapper = shallow(Basic)
    expect(wrapper.find('.hello h1').text()).to.equal('Welcome to Your Vue.js App')
  })
})

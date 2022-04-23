import { shallowMount, mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('renders passed', () => {
    const wrapper = mount(Navbar)
    const searcInput = wrapper.find('input');
    
    expect(searcInput.attributes('placeholder')).toBe('Search')
    expect(wrapper.text()).toMatch('Home');
  })
})

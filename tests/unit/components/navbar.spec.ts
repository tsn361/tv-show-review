
import { mount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

describe('Navbar.vue', () => {
  it('renders passed', () => {
  
    const $route = {path: '/', name: 'home'}

    const wrapper = mount(Navbar, {
      mocks: {
        $route
      }
    })

    const searcInput = wrapper.find('input');
    const homeNav = wrapper.find('.home-nav');
    expect(searcInput.attributes('placeholder')).toBe('Search')
    expect(homeNav.text()).toMatch('TVmaze Shows');
  })
})

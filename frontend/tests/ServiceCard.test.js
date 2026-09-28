import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ServiceCard from '../src/components/ServiceCard.vue'

describe('ServiceCard', () => {
  it('muestra el nombre del servicio', () => {
    const servicio = {
      id: 1,
      nombre: 'Desarrollo Web',
      descripcion: 'Desarrollo de aplicaciones web empresariales.',
      precio: 8500
    }

    const wrapper = mount(ServiceCard, {
      props: {
        servicio
      }
    })

    expect(wrapper.text()).toContain('Desarrollo Web')
  })
})

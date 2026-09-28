<template>
  <section>
    <div class="section-header">
      <div>
        <h2>Servicios</h2>docker compose restart frontend
        <p>
          Conoce nuestras soluciones tecnológicas disponibles.
        </p>
      </div>

      <SearchBox v-model="busqueda" />
    </div>

    <p v-if="cargando" class="status">
      Cargando servicios...
    </p>

    <p v-else-if="error" class="status error">
      {{ error }}
    </p>

    <p v-else-if="serviciosFiltrados.length === 0" class="status">
      No se encontraron servicios.
    </p>

    <ServiceList
      v-else
      :servicios="serviciosFiltrados"
      @seleccionar="seleccionarServicio"
    />
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import SearchBox from '../components/SearchBox.vue'
import ServiceList from '../components/ServiceList.vue'
import { obtenerServicios } from '../services/api'

const servicios = ref([])
const busqueda = ref('')
const cargando = ref(true)
const error = ref('')

const serviciosFiltrados = computed(() => {
  const texto = busqueda.value.toLowerCase().trim()

  if (!texto) {
    return servicios.value
  }

  return servicios.value.filter((servicio) =>
    servicio.nombre.toLowerCase().includes(texto) ||
    servicio.descripcion.toLowerCase().includes(texto)
  )
})

async function cargarServicios() {
  try {
    cargando.value = true
    error.value = ''

    servicios.value = await obtenerServicios()
  } catch (err) {
    error.value = err.message
  } finally {
    cargando.value = false
  }
}

function seleccionarServicio(servicio) {
  alert(
    `Servicio seleccionado: ${servicio.nombre} - $${servicio.precio}`
  )
}

onMounted(() => {
  cargarServicios()
})
</script>
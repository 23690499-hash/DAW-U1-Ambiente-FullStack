<template>
  <div class="services-grid">
    <ServiceCard
      v-for="servicio in servicios"
      :key="servicio.id"
      :servicio="servicio"
      @seleccionar="$emit('seleccionar', $event)"
    />
  </div>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'

defineProps({
  servicios: {
    type: Array,
    required: true
  }
})

defineEmits(['seleccionar'])
</script>
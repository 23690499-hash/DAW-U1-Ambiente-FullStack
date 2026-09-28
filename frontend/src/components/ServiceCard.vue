<template>
  <article class="service-card">
    <h3>{{ servicio.nombre }}</h3>

    <p>
      {{ servicio.descripcion }}
    </p>

    <p class="price">
      ${{ servicio.precio }}
    </p>

    <button
      type="button"
      @click="$emit('seleccionar', servicio)"
    >
      Seleccionar servicio
    </button>
  </article>
</template>

<script setup>
defineProps({
  servicio: {
    type: Object,
    required: true
  }
})

defineEmits(['seleccionar'])
</script>
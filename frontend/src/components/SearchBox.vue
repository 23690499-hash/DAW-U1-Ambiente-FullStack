<template>
  <div class="search-box">
    <label for="search">
      Buscar servicio
    </label>

    <input
      id="search"
      type="search"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Ej. desarrollo web"
      autocomplete="off"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>
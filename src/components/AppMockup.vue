<template>
  <MockupCart v-if="tipo === 'cart'" />
  <MockupMed v-else-if="tipo === 'med'" />
  <MockupRh v-else-if="tipo === 'rh'" />
</template>

<script setup>
import MockupCart from './MockupCart.vue'
import MockupMed from './MockupMed.vue'
import MockupRh from './MockupRh.vue'

defineProps({
  // 'cart' | 'med' | 'rh' — viene del campo `mockup` de cada producto
  tipo: { type: String, required: true }
})
</script>

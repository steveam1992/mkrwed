<template>
  <MockupCart v-if="tipo === 'cart'" />
  <MockupMed v-else-if="tipo === 'med'" />
</template>

<script setup>
import MockupCart from './MockupCart.vue'
import MockupMed from './MockupMed.vue'

defineProps({
  // 'cart' | 'med' — viene del campo `mockup` de cada producto
  tipo: { type: String, required: true }
})
</script>

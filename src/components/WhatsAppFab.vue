<template>
  <a
    class="fab"
    :href="waLink()"
    target="_blank"
    rel="noopener"
    aria-label="Escribir por WhatsApp"
  >
    <span v-html="icons.whatsapp"></span>
    <span class="fab__texto">Escribenos</span>
  </a>
</template>

<script setup>
import { waLink } from '../data/site'
import { icons } from '../data/icons'
</script>

<style scoped>
.fab {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 60;
  display: inline-flex;
  align-items: center;
  gap: 9px;
  height: 52px;
  padding: 0 20px;
  border-radius: var(--radius-pill);
  background: #25d366;
  color: #06301a;
  font-weight: 600;
  font-size: 0.94rem;
  box-shadow: 0 14px 30px -10px rgba(37, 211, 102, 0.6);
  transition: transform 0.16s ease, box-shadow 0.2s ease;
}

.fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 34px -10px rgba(37, 211, 102, 0.7);
}

.fab :deep(svg) {
  width: 24px;
  height: 24px;
}

@media (max-width: 560px) {
  .fab {
    padding: 0;
    width: 54px;
    height: 54px;
    justify-content: center;
  }

  .fab__texto {
    display: none;
  }
}
</style>

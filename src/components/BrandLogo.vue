<template>
  <RouterLink to="/" class="brand" :aria-label="site.marca">
    <span class="brand__mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" width="32" height="32">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path
          d="M7.5 23.5V8.5h3.7l5 7.4 5-7.4h3.7v15h-3.5V14.6L16.2 21l-5.2-6.4v8.9H7.5z"
          fill="#fff"
        />
      </svg>
    </span>
    <span class="brand__text" :class="{ 'brand__text--light': light }">
      <strong>MKR</strong><span>Solutions</span>
    </span>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { site } from '../data/site'

defineProps({
  // true cuando el logo va sobre fondo oscuro
  light: { type: Boolean, default: false }
})
</script>

<style scoped>
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.brand__mark {
  color: var(--brand);
  display: block;
  width: 32px;
  height: 32px;
}

.brand__text {
  font-family: var(--font-display);
  font-size: 1.06rem;
  letter-spacing: -0.02em;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 5px;
  color: var(--text-1);
}

.brand__text strong {
  font-weight: 700;
}

.brand__text span {
  font-weight: 600;
  font-size: 0.86rem;
  color: var(--text-3);
}

.brand__text--light {
  color: #fff;
}

.brand__text--light span {
  color: rgba(255, 255, 255, 0.6);
}
</style>

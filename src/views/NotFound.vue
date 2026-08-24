<template>
  <section class="nf">
    <div class="container center">
      <span class="nf__code">404</span>
      <h1>Esta pagina no existe</h1>
      <p class="lede mt-s" style="margin-inline: auto">
        Puede que el enlace este mal escrito o que la pagina haya cambiado de lugar.
      </p>
      <div class="btn-row mt-m" style="justify-content: center">
        <RouterLink to="/" class="btn btn--primary">Ir al inicio</RouterLink>
        <RouterLink to="/contacto" class="btn btn--outline">Contactarnos</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.nf {
  padding: clamp(70px, 12vw, 150px) 0;
}

.nf__code {
  display: block;
  font-family: var(--font-display);
  font-size: 4rem;
  font-weight: 700;
  color: var(--brand);
  letter-spacing: -0.04em;
  margin-bottom: 8px;
}
</style>

<template>
  <section class="cta">
    <div class="container cta__inner">
      <div>
        <h2>{{ titulo }}</h2>
        <p class="lede mt-s">{{ texto }}</p>
      </div>

      <div class="btn-row cta__acciones">
        <a :href="waLink(mensajeWa)" target="_blank" rel="noopener" class="btn btn--wa">
          <span v-html="icons.whatsapp"></span>
          WhatsApp
        </a>
        <RouterLink to="/contacto" class="btn btn--ghost-light">
          Agendar demostracion
          <span v-html="icons.arrow"></span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { waLink } from '../data/site'
import { icons } from '../data/icons'

defineProps({
  titulo: { type: String, default: 'Te lo mostramos funcionando' },
  texto: {
    type: String,
    default:
      'Una demostracion de 20 minutos basta para ver si el sistema le sirve a tu negocio. Sin compromiso y sin costo.'
  },
  mensajeWa: { type: String, default: '' }
})
</script>

<style scoped>
.cta {
  background:
    radial-gradient(900px 340px at 15% 0%, rgba(91, 73, 229, 0.4), transparent 70%),
    var(--ink);
  color: #fff;
  padding: clamp(52px, 7vw, 84px) 0;
}

.cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.cta h2 {
  color: #fff;
  max-width: 22ch;
}

.cta .lede {
  color: var(--on-dark-2);
  max-width: 46ch;
}

.cta__acciones :deep(svg) {
  width: 18px;
  height: 18px;
}
</style>

<template>
  <header class="header" :class="{ 'header--scrolled': scrolled }">
    <div class="container header__inner">
      <BrandLogo />

      <button
        class="header__burger"
        :aria-expanded="abierto"
        aria-label="Abrir menu"
        @click="abierto = !abierto"
      >
        <span :class="{ 'is-open': abierto }"></span>
      </button>

      <nav class="header__nav" :class="{ 'header__nav--open': abierto }">
        <RouterLink
          v-for="p in productos"
          :key="p.slug"
          :to="`/productos/${p.slug}`"
          class="header__link"
        >
          {{ p.nombre }}
        </RouterLink>
        <RouterLink to="/precios" class="header__link">Precios</RouterLink>
        <RouterLink to="/contacto" class="header__link">Contacto</RouterLink>

        <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--primary btn--sm header__cta">
          <span v-html="icons.whatsapp"></span>
          Pedir demostracion
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import { productos } from '../data/productos'
import { waLink } from '../data/site'
import { icons } from '../data/icons'

const abierto = ref(false)
const scrolled = ref(false)
const route = useRoute()

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))

// Cierra el menu movil al cambiar de pagina
watch(() => route.fullPath, () => (abierto.value = false))
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.header--scrolled {
  border-bottom-color: var(--border);
  box-shadow: 0 6px 20px -14px rgba(12, 16, 36, 0.4);
}

.header__inner {
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.header__link {
  padding: 8px 13px;
  border-radius: var(--radius-pill);
  font-size: 0.93rem;
  font-weight: 500;
  color: var(--text-2);
  transition:
    color 0.15s ease,
    background 0.15s ease;
}

.header__link:hover {
  color: var(--text-1);
  background: var(--surface-2);
}

.header__link.router-link-active {
  color: var(--brand);
  background: var(--brand-soft);
}

.header__cta {
  margin-left: 10px;
}

.header__cta :deep(svg) {
  width: 17px;
  height: 17px;
}

/* ---------- Boton hamburguesa ---------- */

.header__burger {
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--border);
  position: relative;
}

.header__burger span,
.header__burger span::before,
.header__burger span::after {
  position: absolute;
  left: 50%;
  width: 18px;
  height: 2px;
  border-radius: 2px;
  background: var(--text-1);
  transform: translateX(-50%);
  transition: all 0.2s ease;
}

.header__burger span {
  top: 50%;
  margin-top: -1px;
}

.header__burger span::before {
  content: '';
  top: -6px;
  left: 0;
  transform: none;
}

.header__burger span::after {
  content: '';
  top: 6px;
  left: 0;
  transform: none;
}

.header__burger span.is-open {
  background: transparent;
}

.header__burger span.is-open::before {
  top: 0;
  transform: rotate(45deg);
}

.header__burger span.is-open::after {
  top: 0;
  transform: rotate(-45deg);
}

@media (max-width: 860px) {
  .header__burger {
    display: block;
    order: 3;
  }

  .header__nav {
    order: 4;
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
    padding: 8px 0 18px;
    border-top: 1px solid var(--border);
    margin-top: 4px;
  }

  .header__nav--open {
    display: flex;
  }

  .header__inner {
    flex-wrap: wrap;
    height: auto;
    min-height: var(--nav-h);
    padding-block: 12px;
  }

  .header__link {
    padding: 12px 14px;
    font-size: 1rem;
  }

  .header__cta {
    margin: 10px 0 0;
    height: 46px;
  }
}
</style>

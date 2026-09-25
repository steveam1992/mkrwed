<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand">
          <BrandLogo light />
          <p class="footer__desc">{{ site.descripcion }}</p>
          <div class="footer__redes" v-if="redes.length">
            <a v-for="r in redes" :key="r.nombre" :href="r.url" target="_blank" rel="noopener">
              {{ r.nombre }}
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h3>Productos</h3>
          <RouterLink v-for="p in productos" :key="p.slug" :to="`/productos/${p.slug}`">
            {{ p.nombre }}
          </RouterLink>
          <RouterLink to="/precios">Precios</RouterLink>
        </div>

        <div class="footer__col">
          <h3>Empresa</h3>
          <RouterLink to="/contacto">Contacto</RouterLink>
          <RouterLink to="/#como-trabajamos">Como trabajamos</RouterLink>
          <RouterLink to="/#proximos">En desarrollo</RouterLink>
        </div>

        <div class="footer__col">
          <h3>Contacto</h3>
          <a :href="waLink()" target="_blank" rel="noopener">
            WhatsApp {{ site.contacto.whatsappVisible }}
          </a>
          <a :href="mailLink('Informacion de sus sistemas')">{{ site.contacto.correo }}</a>
          <span class="footer__plain">{{ site.contacto.ciudad }}</span>
          <span class="footer__plain">{{ site.contacto.horario }}</span>
        </div>
      </div>

      <div class="footer__bottom">
        <span>&copy; {{ anio }} {{ site.marca }}. Todos los derechos reservados.</span>
        <RouterLink to="/terminos-y-condiciones" class="footer__legal">
          Terminos y condiciones
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import { site, waLink, mailLink } from '../data/site'
import { productos } from '../data/productos'

const anio = new Date().getFullYear()

const redes = computed(() =>
  Object.entries(site.redes)
    .filter(([, url]) => !!url)
    .map(([nombre, url]) => ({ nombre: nombre.charAt(0).toUpperCase() + nombre.slice(1), url }))
)
</script>

<style scoped>
.footer {
  background: var(--ink);
  color: var(--on-dark-2);
  padding: clamp(48px, 7vw, 76px) 0 30px;
}

.footer__top {
  display: grid;
  grid-template-columns: 1.6fr repeat(3, 1fr);
  gap: 40px;
}

.footer__desc {
  margin-top: 18px;
  max-width: 34ch;
  font-size: 0.92rem;
  line-height: 1.65;
}

.footer__redes {
  display: flex;
  gap: 16px;
  margin-top: 18px;
  font-size: 0.9rem;
}

.footer__redes a:hover {
  color: #fff;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 11px;
}

.footer__col h3 {
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 4px;
}

.footer__col a,
.footer__plain {
  font-size: 0.92rem;
  color: var(--on-dark-2);
}

.footer__col a:hover {
  color: #fff;
}

.footer__plain {
  color: rgba(255, 255, 255, 0.42);
}

.footer__legal {
  color: var(--on-dark-2);
}

.footer__legal:hover {
  color: #fff;
}

.footer__bottom {
  margin-top: clamp(36px, 5vw, 56px);
  padding-top: 22px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  justify-content: space-between;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.42);
}

@media (max-width: 860px) {
  .footer__top {
    grid-template-columns: 1fr 1fr;
    gap: 34px;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 520px) {
  .footer__top {
    grid-template-columns: 1fr;
  }
}
</style>

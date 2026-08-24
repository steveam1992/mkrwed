<template>
  <!-- ====================== HERO ====================== -->
  <section class="hero on-dark">
    <div class="container hero__inner">
      <div class="hero__texto">
        <span class="pill pill--light">
          <span v-html="icons.spark"></span>
          {{ site.slogan }}
        </span>

        <h1>
          Sistemas de escritorio que
          <span class="hero__hl">no se detienen</span>
          cuando se cae el internet
        </h1>

        <p class="lede">
          En {{ site.marca }} desarrollamos software para negocios y consultorios: punto de venta e
          inventario con <strong>MkrCart</strong>, y agenda, expediente clinico y recetas con
          <strong>MkrMed</strong>. Se instalan en tu equipo y la informacion se queda contigo.
        </p>

        <div class="btn-row mt-m">
          <a :href="waLink()" target="_blank" rel="noopener" class="btn btn--wa">
            <span v-html="icons.whatsapp"></span>
            Pedir demostracion
          </a>
          <a href="#productos" class="btn btn--ghost-light">
            Ver los productos
            <span v-html="icons.arrow"></span>
          </a>
        </div>

        <ul class="hero__sellos">
          <li v-for="g in site.garantias" :key="g">
            <span v-html="icons.check"></span>
            {{ g }}
          </li>
        </ul>
      </div>

      <div class="hero__visual">
        <div class="stack">
          <div class="stack__back" aria-hidden="true"><MockupMed /></div>
          <div class="stack__front"><MockupCart /></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ====================== PRODUCTOS ====================== -->
  <section id="productos" class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Nuestros productos</span>
        <h2>Dos sistemas listos para instalar hoy</h2>
        <p class="lede">
          Cada uno resuelve una operacion completa, no una parte. Estan construidos sobre la misma
          base: rapidos, locales y con documentos listos para imprimir.
        </p>
      </div>

      <div class="productos">
        <article
          v-for="(p, i) in productos"
          :key="p.slug"
          class="producto"
          :class="{ 'producto--invertido': i % 2 === 1 }"
          :style="acento(p)"
        >
          <div class="producto__visual">
            <AppMockup :tipo="p.mockup" />
          </div>

          <div class="producto__texto">
            <span class="pill pill--accent">{{ p.categoria }}</span>
            <h3 class="producto__nombre">{{ p.nombre }}</h3>
            <p class="producto__tagline">{{ p.tagline }}</p>

            <ul class="checklist mt-m">
              <li v-for="h in p.highlights" :key="h.texto">
                <span v-html="icons[h.icon]"></span>
                {{ h.texto }}
              </li>
            </ul>

            <div class="pill-row mt-m">
              <span v-for="m in p.modulos.slice(0, 5)" :key="m.nombre" class="pill">
                {{ m.nombre }}
              </span>
              <span v-if="p.modulos.length > 5" class="pill">
                +{{ p.modulos.length - 5 }} mas
              </span>
            </div>

            <div class="btn-row mt-m">
              <RouterLink :to="`/productos/${p.slug}`" class="btn btn--primary">
                Ver {{ p.nombre }} a detalle
                <span v-html="icons.arrow"></span>
              </RouterLink>
              <a
                :href="waLink(`Hola, me interesa ${p.nombre}. Me pueden dar mas informacion?`)"
                target="_blank"
                rel="noopener"
                class="btn btn--outline"
              >
                <span v-html="icons.whatsapp"></span>
                Preguntar
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ====================== VENTAJAS ====================== -->
  <section class="section section--alt">
    <div class="container">
      <div class="section__head section__head--center">
        <span class="eyebrow">Por que MKR</span>
        <h2>Software que se adapta a como trabajas</h2>
        <p class="lede" style="margin-inline: auto">
          Nada de sistemas en la nube que se caen justo en la hora pico, ni suscripciones que
          crecen cada ano.
        </p>
      </div>

      <div class="grid grid--3">
        <div v-for="v in ventajas" :key="v.titulo" class="card">
          <span class="icon-box" v-html="icons[v.icon]"></span>
          <h3>{{ v.titulo }}</h3>
          <p class="muted mt-s">{{ v.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ====================== COMO TRABAJAMOS ====================== -->
  <section id="como-trabajamos" class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Como trabajamos</span>
        <h2>De la demostracion a operar, en dias</h2>
      </div>

      <ol class="pasos">
        <li v-for="p in pasos" :key="p.n" class="paso">
          <span class="paso__n">{{ p.n }}</span>
          <h3>{{ p.titulo }}</h3>
          <p class="muted mt-s">{{ p.desc }}</p>
        </li>
      </ol>
    </div>
  </section>

  <!-- ====================== PROXIMOS ====================== -->
  <section v-if="proximos.length" id="proximos" class="section section--alt">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">En desarrollo</span>
        <h2>Lo que viene</h2>
        <p class="lede">
          Estamos construyendo mas sistemas sobre la misma base. Si alguno es lo que necesitas,
          escribenos: los primeros clientes participan en el diseno.
        </p>
      </div>

      <div class="grid grid--3">
        <div v-for="p in proximos" :key="p.nombre" class="card proximo">
          <div class="proximo__head">
            <span class="icon-box" v-html="icons[p.icon]"></span>
            <span class="pill">{{ p.estado }}</span>
          </div>
          <h3>{{ p.nombre }}</h3>
          <p class="small muted">{{ p.categoria }}</p>
          <p class="muted mt-s">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <CtaFinal />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import AppMockup from '../components/AppMockup.vue'
import MockupCart from '../components/MockupCart.vue'
import MockupMed from '../components/MockupMed.vue'
import CtaFinal from '../components/CtaFinal.vue'
import { site, waLink } from '../data/site'
import { productos, proximos, ventajas, pasos } from '../data/productos'
import { icons } from '../data/icons'

// Pinta cada bloque de producto con su propio color de acento
function acento(p) {
  return {
    '--accent': p.color,
    '--accent-dark': p.colorDark,
    '--accent-soft': p.colorSoft
  }
}
</script>

<style scoped>
/* ---------- Hero ---------- */

.hero {
  background:
    radial-gradient(1000px 500px at 78% 8%, rgba(91, 73, 229, 0.5), transparent 65%),
    radial-gradient(700px 420px at 5% 90%, rgba(20, 125, 142, 0.32), transparent 70%),
    var(--ink);
  padding: clamp(52px, 7vw, 96px) 0 clamp(60px, 8vw, 104px);
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
  gap: clamp(36px, 5vw, 64px);
  align-items: center;
}

.hero__texto .pill {
  margin-bottom: 22px;
}

.hero__texto .pill :deep(svg) {
  width: 15px;
  height: 15px;
}

.hero h1 {
  max-width: 19ch;
}

.hero__hl {
  color: #a99cff;
}

.hero .lede {
  margin-top: 20px;
  max-width: 50ch;
}

.hero .lede strong {
  color: #fff;
  font-weight: 600;
}

.hero__sellos {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 22px;
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.hero__sellos li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.89rem;
  color: var(--on-dark-2);
}

.hero__sellos :deep(svg) {
  width: 17px;
  height: 17px;
  color: #6ee7a8;
}

.hero__visual {
  position: relative;
}

/* Las dos apps: MkrMed asomando detras de MkrCart */
.stack {
  position: relative;
}

.stack__back {
  position: absolute;
  top: -14%;
  right: -7%;
  width: 82%;
  transform: rotate(2.5deg);
  opacity: 0.85;
}

.stack__front {
  position: relative;
  z-index: 2;
}

/* ---------- Bloques de producto ---------- */

.productos {
  display: grid;
  gap: clamp(48px, 7vw, 88px);
}

.producto {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.producto--invertido .producto__visual {
  order: 2;
}

.producto__nombre {
  font-size: clamp(1.7rem, 3vw, 2.15rem);
  margin: 14px 0 8px;
}

.producto__tagline {
  font-size: 1.05rem;
  color: var(--text-2);
  max-width: 42ch;
}

.producto__texto .btn--outline :deep(svg),
.producto__texto .btn--primary :deep(svg) {
  width: 18px;
  height: 18px;
}

/* ---------- Pasos ---------- */

.pasos {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
  gap: 20px;
  counter-reset: paso;
}

.paso {
  border-top: 2px solid var(--border);
  padding-top: 22px;
}

.paso__n {
  display: block;
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--brand);
  margin-bottom: 10px;
}

/* ---------- Proximos ---------- */

.proximo__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.proximo .icon-box {
  margin-bottom: 14px;
}

@media (max-width: 900px) {
  .hero__inner,
  .producto {
    grid-template-columns: 1fr;
  }

  .producto--invertido .producto__visual {
    order: 0;
  }

  .hero h1 {
    max-width: 22ch;
  }

  .stack__back {
    display: none;
  }
}
</style>

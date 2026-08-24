<template>
  <div v-if="producto" :style="acento">
    <!-- ====================== HERO ====================== -->
    <section class="phero on-dark">
      <div class="container">
        <nav class="miga">
          <RouterLink to="/">Inicio</RouterLink>
          <span aria-hidden="true">/</span>
          <span>{{ producto.nombre }}</span>
        </nav>

        <div class="phero__inner">
          <div>
            <span class="pill pill--light">{{ producto.categoria }}</span>
            <h1>{{ producto.nombre }}</h1>
            <p class="phero__tagline">{{ producto.tagline }}</p>
            <p class="lede mt-m">{{ producto.resumen }}</p>

            <div class="btn-row mt-m">
              <a
                :href="waLink(`Hola, quiero una demostracion de ${producto.nombre}.`)"
                target="_blank"
                rel="noopener"
                class="btn btn--wa"
              >
                <span v-html="icons.whatsapp"></span>
                Pedir demostracion
              </a>
              <RouterLink to="/precios" class="btn btn--ghost-light">
                Ver precio
                <span v-html="icons.arrow"></span>
              </RouterLink>
            </div>
          </div>

          <div class="phero__visual">
            <AppMockup :tipo="producto.mockup" />
            <p class="phero__nota">
              Vista del sistema. Los datos que aparecen son de ejemplo.
            </p>
          </div>
        </div>

        <ul class="phero__highlights">
          <li v-for="h in producto.highlights" :key="h.texto">
            <span v-html="icons[h.icon]"></span>
            {{ h.texto }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ====================== PARA QUIEN ====================== -->
    <section class="section section--tight">
      <div class="container paraquien">
        <div>
          <span class="eyebrow">Para quien es</span>
          <h2 class="mt-s">Pensado para este tipo de operacion</h2>
        </div>
        <div class="pill-row">
          <span v-for="q in producto.paraQuien" :key="q" class="pill pill--accent">{{ q }}</span>
        </div>
      </div>
    </section>

    <!-- ====================== MODULOS ====================== -->
    <section class="section section--alt">
      <div class="container">
        <div class="section__head">
          <span class="eyebrow">Modulos</span>
          <h2>Todo lo que incluye {{ producto.nombre }}</h2>
          <p class="lede">
            {{ producto.modulos.length }} modulos que trabajan juntos sobre la misma base de datos:
            lo que registras en uno se refleja en los demas.
          </p>
        </div>

        <div class="grid grid--3">
          <div v-for="m in producto.modulos" :key="m.nombre" class="card">
            <span class="icon-box" v-html="icons[m.icon]"></span>
            <h3>{{ m.nombre }}</h3>
            <p class="muted mt-s small">{{ m.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================== FICHA TECNICA ====================== -->
    <section class="section">
      <div class="container">
        <div class="section__head">
          <span class="eyebrow">Ficha tecnica</span>
          <h2>Lo que necesitas para usarlo</h2>
        </div>

        <div class="ficha">
          <div v-for="f in fichaTecnica" :key="f.titulo" class="ficha__fila">
            <span class="ficha__icon" v-html="icons[f.icon]"></span>
            <div>
              <h3>{{ f.titulo }}</h3>
              <p class="muted small">{{ f.valor }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ====================== PRECIO ====================== -->
    <section class="section section--alt">
      <div class="container precio">
        <div class="precio__card card">
          <span class="pill pill--accent">{{ producto.nombre }}</span>
          <p class="precio__monto">
            {{ producto.precio.licencia }}
            <span>{{ site.precios.moneda }}</span>
          </p>
          <p class="muted small">{{ producto.precio.licenciaNota }}</p>

          <div class="precio__soporte">
            <strong>{{ producto.precio.soporte }}</strong>
            <span class="muted small">{{ producto.precio.soporteNota }}</span>
          </div>

          <ul class="checklist mt-m">
            <li v-for="i in site.precios.incluyeSiempre" :key="i">
              <span v-html="icons.check"></span>
              {{ i }}
            </li>
          </ul>

          <div class="btn-row mt-m">
            <a
              :href="waLink(`Hola, quiero cotizar ${producto.nombre}.`)"
              target="_blank"
              rel="noopener"
              class="btn btn--primary btn--block"
            >
              Solicitar cotizacion
            </a>
          </div>
          <p class="muted small mt-s">{{ site.precios.nota }}</p>
        </div>

        <div class="precio__texto">
          <span class="eyebrow">Inversion</span>
          <h2 class="mt-s">Una sola compra, no una renta de por vida</h2>
          <p class="lede mt-s">
            La licencia se paga una vez por equipo y el sistema es tuyo. El soporte anual es
            opcional: si decides no renovarlo, {{ producto.nombre }} sigue funcionando igual.
          </p>
          <RouterLink to="/precios" class="link-arrow mt-m">
            Ver el desglose completo y los servicios extra
            <span v-html="icons.arrow"></span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ====================== FAQ ====================== -->
    <section class="section">
      <div class="container">
        <div class="section__head">
          <span class="eyebrow">Preguntas frecuentes</span>
          <h2>Dudas sobre {{ producto.nombre }}</h2>
        </div>
        <FaqLista :items="producto.faq" />
      </div>
    </section>

    <CtaFinal
      :titulo="`Veamos ${producto.nombre} con tus datos`"
      :mensaje-wa="`Hola, quiero una demostracion de ${producto.nombre}.`"
    />
  </div>

  <!-- Slug que no existe -->
  <section v-else class="section container center">
    <h1>Ese producto no existe</h1>
    <p class="lede mt-s" style="margin-inline: auto">
      Revisa la direccion o vuelve al inicio para ver el catalogo completo.
    </p>
    <RouterLink to="/" class="btn btn--primary mt-m">Ir al inicio</RouterLink>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import AppMockup from '../components/AppMockup.vue'
import FaqLista from '../components/FaqLista.vue'
import CtaFinal from '../components/CtaFinal.vue'
import { getProducto, fichaTecnica } from '../data/productos'
import { site, waLink } from '../data/site'
import { icons } from '../data/icons'

const props = defineProps({
  slug: { type: String, required: true }
})

const producto = computed(() => getProducto(props.slug))

// Toda la pagina toma el color del producto
const acento = computed(() =>
  producto.value
    ? {
        '--accent': producto.value.color,
        '--accent-dark': producto.value.colorDark,
        '--accent-soft': producto.value.colorSoft
      }
    : {}
)
</script>

<style scoped>
/* ---------- Hero del producto ---------- */

.phero {
  background:
    radial-gradient(900px 460px at 80% 0%, color-mix(in srgb, var(--accent) 62%, transparent), transparent 66%),
    var(--ink);
  padding: 28px 0 clamp(48px, 6vw, 76px);
}

.miga {
  display: flex;
  gap: 9px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 26px;
}

.miga a:hover {
  color: #fff;
}

.phero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.02fr);
  gap: clamp(32px, 5vw, 60px);
  align-items: center;
}

.phero .pill {
  margin-bottom: 18px;
}

.phero h1 {
  color: #fff;
}

.phero__tagline {
  font-family: var(--font-display);
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  font-weight: 600;
  color: #fff;
  opacity: 0.92;
  margin-top: 14px;
  max-width: 34ch;
}

.phero .lede {
  color: var(--on-dark-2);
}

.phero__nota {
  margin-top: 12px;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
}

.phero__highlights {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(228px, 1fr));
  gap: 14px 26px;
  margin-top: clamp(34px, 4vw, 52px);
  padding-top: 26px;
  border-top: 1px solid rgba(255, 255, 255, 0.13);
}

.phero__highlights li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: var(--on-dark-2);
}

.phero__highlights :deep(svg) {
  width: 19px;
  height: 19px;
  flex: none;
  margin-top: 1px;
  color: #fff;
  opacity: 0.75;
}

/* ---------- Para quien ---------- */

.paraquien {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 28px;
  align-items: center;
}

/* ---------- Ficha tecnica ---------- */

.ficha {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4px 40px;
}

.ficha__fila {
  display: flex;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}

.ficha__icon {
  color: var(--accent);
  flex: none;
  margin-top: 2px;
}

.ficha__fila h3 {
  font-size: 0.98rem;
  margin-bottom: 3px;
}

/* ---------- Precio ---------- */

.precio {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
}

.precio__card {
  padding: 30px;
}

.precio__monto {
  font-family: var(--font-display);
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 16px 0 4px;
  line-height: 1;
}

.precio__monto span {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-3);
  letter-spacing: 0;
}

.precio__soporte {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed var(--border);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.precio__soporte strong {
  font-size: 1.05rem;
}

@media (max-width: 900px) {
  .phero__inner,
  .paraquien,
  .precio {
    grid-template-columns: 1fr;
  }

  .precio__texto {
    order: -1;
  }
}
</style>

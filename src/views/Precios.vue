<template>
  <section class="phero on-dark">
    <div class="container">
      <span class="eyebrow" style="color: #a99cff">Precios</span>
      <h1 class="mt-s">Pagas la licencia una vez</h1>
      <p class="lede mt-s">
        Sin renta mensual obligatoria y sin limite de ventas, pacientes o registros. El soporte
        anual es opcional: si no lo renuevas, tu sistema sigue funcionando igual.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="planes">
        <article v-for="p in productos" :key="p.slug" class="plan card" :style="acento(p)">
          <div class="plan__head">
            <span class="pill pill--accent">{{ p.categoria }}</span>
            <h2 class="plan__nombre">{{ p.nombre }}</h2>
            <p class="muted small">{{ p.tagline }}</p>
          </div>

          <p class="plan__monto">
            {{ p.precio.licencia }}
            <span>{{ site.precios.moneda }} / pago unico</span>
          </p>
          <p class="muted small">{{ p.precio.licenciaNota }}</p>

          <div class="plan__soporte">
            <span v-html="icons.shield"></span>
            <div>
              <strong>Soporte anual {{ p.precio.soporte }}</strong>
              <p class="muted small">{{ p.precio.soporteNota }}</p>
            </div>
          </div>

          <p class="plan__label">Modulos incluidos</p>
          <div class="pill-row">
            <span v-for="m in p.modulos" :key="m.nombre" class="pill">{{ m.nombre }}</span>
          </div>

          <div class="plan__acciones">
            <a
              :href="waLink(`Hola, quiero cotizar ${p.nombre}.`)"
              target="_blank"
              rel="noopener"
              class="btn btn--primary btn--block"
            >
              <span v-html="icons.whatsapp"></span>
              Cotizar {{ p.nombre }}
            </a>
            <RouterLink :to="`/productos/${p.slug}`" class="btn btn--outline btn--block">
              Ver que hace a detalle
            </RouterLink>
          </div>
        </article>
      </div>

      <p class="nota-precios">{{ site.precios.nota }}</p>
    </div>
  </section>

  <!-- ====================== QUE INCLUYE ====================== -->
  <section class="section section--alt">
    <div class="container incluye">
      <div>
        <span class="eyebrow">Incluido en cualquier licencia</span>
        <h2 class="mt-s">No te entregamos solo el instalador</h2>
        <p class="lede mt-s">
          El precio cubre dejar el sistema trabajando en tu negocio, con tus datos cargados y tu
          personal capacitado.
        </p>
      </div>

      <ul class="checklist">
        <li v-for="i in site.precios.incluyeSiempre" :key="i">
          <span v-html="icons.check"></span>
          {{ i }}
        </li>
      </ul>
    </div>
  </section>

  <!-- ====================== ADICIONALES ====================== -->
  <section class="section">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Servicios adicionales</span>
        <h2>Se cotizan solo si los necesitas</h2>
      </div>

      <div class="tabla">
        <div v-for="a in site.precios.adicionales" :key="a.nombre" class="tabla__fila">
          <div>
            <h3>{{ a.nombre }}</h3>
            <p class="muted small">{{ a.desc }}</p>
          </div>
          <span class="tabla__precio">{{ a.precio }}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ====================== FAQ ====================== -->
  <section class="section section--alt">
    <div class="container">
      <div class="section__head">
        <span class="eyebrow">Preguntas frecuentes</span>
        <h2>Sobre el pago y la licencia</h2>
      </div>
      <FaqLista :items="faqPrecios" />
    </div>
  </section>

  <CtaFinal
    titulo="Cotizamos con tu caso en la mano"
    texto="Cuentanos como trabajas y te decimos exactamente que licencia necesitas y cuanto cuesta."
    mensaje-wa="Hola, quiero cotizar uno de sus sistemas."
  />
</template>

<script setup>
import { RouterLink } from 'vue-router'
import FaqLista from '../components/FaqLista.vue'
import CtaFinal from '../components/CtaFinal.vue'
import { productos } from '../data/productos'
import { site, waLink } from '../data/site'
import { icons } from '../data/icons'

function acento(p) {
  return {
    '--accent': p.color,
    '--accent-dark': p.colorDark,
    '--accent-soft': p.colorSoft
  }
}

/* TODO: ajusta estas respuestas a tus condiciones reales de venta */
const faqPrecios = [
  {
    p: 'Como se paga?',
    r: 'Transferencia o deposito. Se cobra la mitad al iniciar la instalacion y la mitad al entregar el sistema funcionando y capacitado.'
  },
  {
    p: 'Dan factura?',
    r: 'Si, se emite factura por el total de la licencia y del soporte. Solo necesitamos tus datos fiscales.'
  },
  {
    p: 'La licencia es por equipo o por negocio?',
    r: 'Por equipo instalado. Si necesitas una segunda caja o consultorio, la licencia adicional del mismo negocio tiene descuento.'
  },
  {
    p: 'Que pasa si no renuevo el soporte?',
    r: 'El sistema sigue funcionando sin cambios. Lo que dejas de recibir son las actualizaciones, los ajustes menores y la atencion prioritaria.'
  },
  {
    p: 'Puedo probarlo antes de pagar?',
    r: 'Si. Hacemos una demostracion completa sin costo, con casos reales de tu operacion, para que veas el sistema antes de decidir.'
  },
  {
    p: 'Y si necesito algo que el sistema no hace?',
    r: 'Lo revisamos: si es algo que le sirve a todos los clientes, entra como actualizacion. Si es propio de tu operacion, se cotiza como modulo a la medida.'
  }
]
</script>

<style scoped>
.phero {
  background:
    radial-gradient(800px 380px at 80% 0%, rgba(91, 73, 229, 0.55), transparent 68%),
    var(--ink);
  padding: clamp(46px, 6vw, 78px) 0;
}

.phero h1,
.phero .lede {
  max-width: 32ch;
}

.phero h1 {
  color: #fff;
}

.phero .lede {
  color: var(--on-dark-2);
  max-width: 56ch;
}

/* ---------- Planes ---------- */

.planes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.plan {
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-shadow: var(--shadow);
  border-top: 4px solid var(--accent);
}

.plan__nombre {
  font-size: 1.7rem;
  margin: 14px 0 6px;
}

.plan__monto {
  font-family: var(--font-display);
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1;
  margin-top: 24px;
}

.plan__monto span {
  display: block;
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-3);
  letter-spacing: 0;
  margin-top: 8px;
}

.plan__soporte {
  display: flex;
  gap: 12px;
  margin: 22px 0;
  padding: 16px;
  border-radius: var(--radius-sm);
  background: var(--accent-soft);
}

.plan__soporte :deep(svg) {
  color: var(--accent-dark);
  flex: none;
  margin-top: 2px;
}

.plan__soporte strong {
  font-size: 0.98rem;
}

.plan__label {
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 11px;
}

.plan__acciones {
  display: grid;
  gap: 10px;
  margin-top: auto;
  padding-top: 26px;
}

.plan__acciones :deep(svg) {
  width: 18px;
  height: 18px;
}

.nota-precios {
  margin-top: 26px;
  font-size: 0.85rem;
  color: var(--text-3);
  text-align: center;
}

/* ---------- Incluye ---------- */

.incluye {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 60px);
  align-items: center;
}

/* ---------- Tabla de adicionales ---------- */

.tabla {
  border-top: 1px solid var(--border);
}

.tabla__fila {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 20px 0;
  border-bottom: 1px solid var(--border);
}

.tabla__fila h3 {
  font-size: 1rem;
  margin-bottom: 3px;
}

.tabla__precio {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  white-space: nowrap;
  color: var(--brand);
}

@media (max-width: 860px) {
  .incluye {
    grid-template-columns: 1fr;
  }

  .tabla__fila {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
}
</style>

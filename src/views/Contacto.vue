<template>
  <section class="phero on-dark">
    <div class="container">
      <span class="eyebrow" style="color: #a99cff">Contacto</span>
      <h1 class="mt-s">Agenda una demostracion</h1>
      <p class="lede mt-s">
        Veinte minutos por WhatsApp, videollamada o en tu negocio. Te mostramos el sistema
        funcionando y te decimos con claridad que resuelve y que no.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container contacto">
      <!-- ====================== FORMULARIO ====================== -->
      <form class="form card" novalidate @submit.prevent="enviarPorCorreo">
        <h2 class="form__titulo">Cuentanos de tu negocio</h2>
        <p class="muted small">
          Llena los datos y eliges como enviarlo: por WhatsApp o por correo.
        </p>

        <div class="form__grid mt-m">
          <label class="campo">
            <span>Nombre <em>*</em></span>
            <input
              v-model.trim="f.nombre"
              type="text"
              autocomplete="name"
              :class="{ 'campo--error': errores.nombre }"
              placeholder="Como te llamas"
            />
            <small v-if="errores.nombre" class="campo__error">{{ errores.nombre }}</small>
          </label>

          <label class="campo">
            <span>Negocio o consultorio</span>
            <input v-model.trim="f.negocio" type="text" placeholder="Nombre del lugar" />
          </label>

          <label class="campo">
            <span>Telefono o WhatsApp <em>*</em></span>
            <input
              v-model.trim="f.telefono"
              type="tel"
              autocomplete="tel"
              :class="{ 'campo--error': errores.telefono }"
              placeholder="33 0000 0000"
            />
            <small v-if="errores.telefono" class="campo__error">{{ errores.telefono }}</small>
          </label>

          <label class="campo">
            <span>Correo</span>
            <input
              v-model.trim="f.correo"
              type="email"
              autocomplete="email"
              :class="{ 'campo--error': errores.correo }"
              placeholder="tucorreo@ejemplo.com"
            />
            <small v-if="errores.correo" class="campo__error">{{ errores.correo }}</small>
          </label>

          <label class="campo campo--ancho">
            <span>Que te interesa</span>
            <select v-model="f.interes">
              <option v-for="p in productos" :key="p.slug" :value="p.nombre">
                {{ p.nombre }} — {{ p.categoria }}
              </option>
              <option value="Mas de un sistema">Mas de un sistema</option>
              <option value="Un sistema a la medida">Un sistema a la medida</option>
              <option value="Todavia no se">Todavia no se, quiero asesoria</option>
            </select>
          </label>

          <label class="campo campo--ancho">
            <span>Cuentanos brevemente como trabajas</span>
            <textarea
              v-model.trim="f.mensaje"
              rows="4"
              placeholder="Cuantas personas lo van a usar, que llevas hoy en papel o en Excel, que te urge resolver..."
            ></textarea>
          </label>
        </div>

        <div class="btn-row mt-m">
          <button type="button" class="btn btn--wa" @click="enviarPorWhatsApp">
            <span v-html="icons.whatsapp"></span>
            Enviar por WhatsApp
          </button>
          <button type="submit" class="btn btn--outline">
            <span v-html="icons.mail"></span>
            Enviar por correo
          </button>
        </div>

        <p v-if="aviso" class="form__aviso">{{ aviso }}</p>
        <p class="muted small mt-s">
          Los campos con <em>*</em> son obligatorios. Solo usamos tus datos para contactarte sobre
          esta solicitud.
        </p>
      </form>

      <!-- ====================== DATOS DIRECTOS ====================== -->
      <aside class="datos">
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="dato dato--wa"
        >
          <span class="dato__icon" v-html="icons.whatsapp"></span>
          <div>
            <h3>WhatsApp</h3>
            <p>{{ site.contacto.whatsappVisible }}</p>
            <span class="dato__hint">La via mas rapida, contestamos el mismo dia</span>
          </div>
        </a>

        <a :href="mailLink('Informacion de sus sistemas')" class="dato">
          <span class="dato__icon" v-html="icons.mail"></span>
          <div>
            <h3>Correo</h3>
            <p>{{ site.contacto.correo }}</p>
          </div>
        </a>

        <a :href="`tel:${site.contacto.telefono.replace(/\s+/g, '')}`" class="dato">
          <span class="dato__icon" v-html="icons.phone"></span>
          <div>
            <h3>Telefono</h3>
            <p>{{ site.contacto.telefono }}</p>
          </div>
        </a>

        <div class="dato dato--plano">
          <span class="dato__icon" v-html="icons.pin"></span>
          <div>
            <h3>Donde estamos</h3>
            <p>{{ site.contacto.ciudad }}</p>
            <span class="dato__hint">Instalacion presencial en la zona metropolitana</span>
          </div>
        </div>

        <div class="dato dato--plano">
          <span class="dato__icon" v-html="icons.clock"></span>
          <div>
            <h3>Horario</h3>
            <p>{{ site.contacto.horario }}</p>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { productos } from '../data/productos'
import { site, waLink, mailLink } from '../data/site'
import { icons } from '../data/icons'

const f = reactive({
  nombre: '',
  negocio: '',
  telefono: '',
  correo: '',
  interes: productos[0].nombre,
  mensaje: ''
})

const errores = reactive({ nombre: '', telefono: '', correo: '' })
const aviso = ref('')

function validar() {
  errores.nombre = f.nombre ? '' : 'Escribe tu nombre'
  errores.telefono = f.telefono ? '' : 'Necesitamos un telefono para contactarte'
  errores.correo = !f.correo || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.correo)
    ? ''
    : 'Ese correo no parece valido'

  const ok = !errores.nombre && !errores.telefono && !errores.correo
  aviso.value = ok ? '' : 'Revisa los campos marcados antes de enviar.'
  return ok
}

// Arma el texto que se manda por WhatsApp o por correo
function armarMensaje() {
  const lineas = [
    `Nombre: ${f.nombre}`,
    f.negocio ? `Negocio: ${f.negocio}` : null,
    `Telefono: ${f.telefono}`,
    f.correo ? `Correo: ${f.correo}` : null,
    `Interes: ${f.interes}`,
    f.mensaje ? `\n${f.mensaje}` : null
  ].filter(Boolean)

  return `Hola, quiero informacion sobre sus sistemas.\n\n${lineas.join('\n')}`
}

function enviarPorWhatsApp() {
  if (!validar()) return
  window.open(waLink(armarMensaje()), '_blank', 'noopener')
  aviso.value = 'Se abrio WhatsApp con tu mensaje listo para enviar.'
}

function enviarPorCorreo() {
  if (!validar()) return
  window.location.href = mailLink(`Solicitud de informacion — ${f.interes}`, armarMensaje())
  aviso.value = 'Se abrio tu programa de correo con el mensaje listo.'
}

/* ---------------------------------------------------------------------------
   Si mas adelante quieres que el formulario se envie solo, sin abrir WhatsApp
   ni el correo, conecta aqui un servicio (Formspree, EmailJS, o tu propia API)
   y llamalo desde enviarPorCorreo():

   await fetch('https://formspree.io/f/TU_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ ...f })
   })
   --------------------------------------------------------------------------- */
</script>

<style scoped>
.phero {
  background:
    radial-gradient(800px 380px at 80% 0%, rgba(20, 125, 142, 0.5), transparent 68%),
    var(--ink);
  padding: clamp(46px, 6vw, 78px) 0;
}

.phero h1 {
  color: #fff;
  max-width: 26ch;
}

.phero .lede {
  color: var(--on-dark-2);
}

.contacto {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
  gap: clamp(24px, 3vw, 40px);
  align-items: start;
}

/* ---------- Formulario ---------- */

.form {
  padding: clamp(24px, 3vw, 34px);
  box-shadow: var(--shadow);
}

.form__titulo {
  font-size: 1.35rem;
  margin-bottom: 6px;
}

.form__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.campo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.campo--ancho {
  grid-column: 1 / -1;
}

.campo > span {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-2);
}

.campo em {
  color: var(--brand);
  font-style: normal;
}

.campo input,
.campo select,
.campo textarea {
  width: 100%;
  border: 1.5px solid var(--border);
  border-radius: 11px;
  background: var(--surface);
  padding: 0 14px;
  height: 46px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.campo textarea {
  height: auto;
  padding: 12px 14px;
  resize: vertical;
  line-height: 1.55;
}

.campo input:focus,
.campo select:focus,
.campo textarea:focus {
  border-color: var(--brand);
  box-shadow: 0 0 0 4px var(--brand-soft);
}

.campo input::placeholder,
.campo textarea::placeholder {
  color: var(--text-3);
}

.campo--error {
  border-color: #e0564f !important;
}

.campo__error {
  font-size: 0.78rem;
  color: #d0453e;
}

.form .btn :deep(svg) {
  width: 18px;
  height: 18px;
}

.form__aviso {
  margin-top: 14px;
  font-size: 0.88rem;
  font-weight: 500;
  color: var(--brand);
}

/* ---------- Datos de contacto ---------- */

.datos {
  display: grid;
  gap: 12px;
}

.dato {
  display: flex;
  gap: 14px;
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  transition: border-color 0.16s ease, transform 0.16s ease;
}

.dato:not(.dato--plano):hover {
  border-color: var(--brand);
  transform: translateY(-1px);
}

.dato--wa {
  background: #f2fdf6;
  border-color: #cdefd9;
}

.dato--wa:not(.dato--plano):hover {
  border-color: #25d366;
}

.dato__icon {
  color: var(--brand);
  flex: none;
  margin-top: 2px;
}

.dato--wa .dato__icon {
  color: #1aa851;
}

.dato h3 {
  font-size: 0.82rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-3);
  margin-bottom: 3px;
}

.dato p {
  font-weight: 600;
  color: var(--text-1);
}

.dato__hint {
  display: block;
  margin-top: 4px;
  font-size: 0.82rem;
  color: var(--text-2);
}

@media (max-width: 900px) {
  .contacto {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .form__grid {
    grid-template-columns: 1fr;
  }
}
</style>

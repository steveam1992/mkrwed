<template>
  <section class="phero on-dark">
    <div class="container">
      <span class="eyebrow" style="color: #a99cff">Legal</span>
      <h1 class="mt-s">Terminos y condiciones</h1>
      <p class="lede mt-s">
        Estas son las condiciones bajo las cuales {{ site.marca }} ofrece e instala sus sistemas
        de escritorio. Al contratar nuestros servicios aceptas lo aqui descrito.
      </p>
    </div>
  </section>

  <section class="section">
    <div class="container legal">
      <p class="muted small">Ultima actualizacion: {{ actualizacion }}</p>

      <article class="legal__item">
        <h2>1. Objeto</h2>
        <p>
          {{ site.marca }} desarrolla e instala sistemas de escritorio para negocios,
          consultorios y areas de recursos humanos. Estos terminos aplican a la venta, instalacion,
          capacitacion y soporte de dichos sistemas, contratados a traves de nuestros canales de
          contacto (WhatsApp, correo o telefono).
        </p>
      </article>

      <article class="legal__item">
        <h2>2. Aceptacion</h2>
        <p>
          Al solicitar una cotizacion, aceptar una propuesta o pagar la licencia de un sistema,
          el cliente acepta estos terminos y condiciones en su totalidad. Si no estas de acuerdo
          con alguno de los puntos aqui descritos, te pedimos no contratar el servicio y
          contactarnos para resolver tus dudas antes de avanzar.
        </p>
      </article>

      <article class="legal__item">
        <h2>3. Licencia de uso</h2>
        <p>
          La licencia se cobra como pago unico por equipo instalado y otorga el derecho de uso
          del sistema de forma indefinida en ese equipo. No es una renta ni una suscripcion. La
          licencia no incluye el codigo fuente y no puede revenderse, copiarse ni instalarse en
          equipos adicionales sin pagar la licencia correspondiente a cada equipo.
        </p>
      </article>

      <article class="legal__item">
        <h2>4. Precios y forma de pago</h2>
        <p>
          Los precios publicados en el sitio son de referencia y estan en {{ site.precios.moneda }},
          mas IVA. El precio final se confirma por escrito antes de iniciar cualquier trabajo, junto
          con la forma y calendario de pago. Los servicios adicionales (equipos extra, migracion de
          datos, modulos a la medida, capacitacion extra) se cotizan por separado.
        </p>
      </article>

      <article class="legal__item">
        <h2>5. Instalacion, capacitacion y soporte</h2>
        <p>
          El servicio incluye instalacion y configuracion inicial, carga del catalogo o lista
          inicial de datos que el cliente proporcione, y capacitacion basica para el personal. El
          soporte anual es opcional: si no se renueva, el sistema sigue funcionando con la version
          instalada, pero deja de recibir actualizaciones y atencion prioritaria.
        </p>
      </article>

      <article class="legal__item">
        <h2>6. Propiedad de los datos</h2>
        <p>
          Los sistemas de {{ site.marca }} funcionan de forma local: la informacion que el cliente
          captura (ventas, pacientes, empleados, etc.) se guarda en el equipo donde esta instalado
          el sistema y es propiedad exclusiva del cliente. El cliente es responsable de sacar sus
          propios respaldos y de resguardar el acceso a su equipo.
        </p>
      </article>

      <article class="legal__item">
        <h2>7. Propiedad intelectual</h2>
        <p>
          El software, su diseno, codigo y marca son propiedad de {{ site.marca }}. La compra de
          una licencia no transfiere derechos de autor ni propiedad intelectual sobre el sistema,
          unicamente el derecho de uso descrito en el punto 3.
        </p>
      </article>

      <article class="legal__item">
        <h2>8. Garantia y limitacion de responsabilidad</h2>
        <p>
          Corregimos sin costo cualquier fallo atribuible al funcionamiento del sistema durante la
          vigencia del soporte contratado. {{ site.marca }} no se hace responsable por perdidas de
          informacion derivadas de fallas de hardware del cliente, mal uso del equipo, virus, o
          falta de respaldos propios, ni por danos indirectos derivados del uso del sistema.
        </p>
      </article>

      <article class="legal__item">
        <h2>9. Cancelaciones y reembolsos</h2>
        <p>
          Una vez iniciada la instalacion o entregado el sistema en el equipo del cliente, la
          licencia no es reembolsable. Los anticipos por trabajos a la medida no entregados podran
          reembolsarse descontando las horas ya invertidas, previo acuerdo entre ambas partes.
        </p>
      </article>

      <article class="legal__item">
        <h2>10. Cambios a estos terminos</h2>
        <p>
          Podemos actualizar estos terminos para reflejar cambios en nuestros servicios. Los
          cambios aplican a contrataciones nuevas; los servicios ya contratados se rigen por los
          terminos vigentes al momento de la compra.
        </p>
      </article>

      <article class="legal__item">
        <h2>11. Contacto</h2>
        <p>
          Si tienes dudas sobre estos terminos puedes escribirnos a
          <a :href="mailLink('Dudas sobre terminos y condiciones')" class="link-arrow">{{ site.contacto.correo }}</a>
          o por WhatsApp al {{ site.contacto.whatsappVisible }}.
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { site, mailLink } from '../data/site'

const actualizacion = new Date().toLocaleDateString('es-MX', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
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

.legal {
  max-width: 74ch;
  display: grid;
  gap: 28px;
}

.legal__item h2 {
  font-size: 1.15rem;
  margin-bottom: 8px;
}

.legal__item p {
  color: var(--text-2);
  line-height: 1.7;
}
</style>

<template>
  <!-- Representacion de la pantalla de Nomina de MkrRH.
       TODO: cuando tengas capturas reales, cambia este componente por
       <img src="/capturas/mkrrh-nomina.png" alt="..." /> -->
  <div class="mock">
    <svg viewBox="0 0 760 470" role="img" aria-label="Pantalla de nomina de MkrRH">
      <rect width="760" height="470" rx="16" fill="#101014" />
      <g fill="#fff" opacity="0.35">
        <circle cx="700" cy="21" r="4" />
        <circle cx="716" cy="21" r="4" />
        <circle cx="732" cy="21" r="4" />
      </g>

      <!-- Barra lateral -->
      <rect x="14" y="38" width="140" height="418" rx="18" fill="#22222A" />
      <circle cx="38" cy="66" r="11" fill="#fff" opacity="0.92" />
      <text x="38" y="70" text-anchor="middle" class="t-mark">RH</text>
      <text x="56" y="63" class="t-side-strong">Grupo Delta</text>
      <text x="56" y="76" class="t-side-dim">24 empleados</text>

      <g>
        <text x="30" y="110" class="t-group">PERSONAL</text>
        <rect x="30" y="121" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="131" class="t-nav">Empleados</text>
        <rect x="30" y="149" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="159" class="t-nav">Organigrama</text>

        <text x="30" y="185" class="t-group">INCIDENCIAS</text>
        <rect x="30" y="196" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="206" class="t-nav">Asistencia</text>
        <rect x="30" y="224" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="234" class="t-nav">Vacaciones</text>
        <rect x="30" y="252" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="262" class="t-nav">Incapacidades</text>

        <text x="30" y="288" class="t-group">NOMINA</text>
        <rect x="24" y="290" width="120" height="30" rx="9" fill="#fff" opacity="0.14" />
        <rect x="30" y="299" width="11" height="11" rx="2.5" fill="#00B894" />
        <text x="50" y="309" class="t-nav-on">Nomina</text>
        <rect x="30" y="327" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="337" class="t-nav">Bajas</text>
        <rect x="30" y="355" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="365" class="t-nav">Reportes</text>

        <rect x="30" y="417" width="11" height="11" rx="2.5" fill="#fff" opacity="0.4" />
        <text x="50" y="427" class="t-nav">Ajustes</text>
      </g>

      <!-- Area principal -->
      <rect x="166" y="38" width="580" height="418" rx="18" fill="#fff" />

      <text x="188" y="76" class="t-h1">Nomina</text>
      <text x="188" y="93" class="t-sub">Quincena 2 de agosto &middot; del 16 al 31 &middot; 24 recibos</text>

      <rect x="596" y="60" width="130" height="32" rx="10" fill="#1A1A1E" />
      <text x="661" y="80" text-anchor="middle" class="t-cta">Generar recibos</text>

      <!-- Encabezados de la tabla -->
      <text x="204" y="120" class="t-col">EMPLEADO</text>
      <text x="378" y="120" text-anchor="end" class="t-col">PERCEP.</text>
      <text x="440" y="120" text-anchor="end" class="t-col">DEDUCC.</text>
      <text x="502" y="120" text-anchor="end" class="t-col">NETO</text>

      <!-- Recibos del periodo -->
      <g v-for="(r, i) in recibos" :key="r.nombre">
        <rect
          x="188"
          :y="130 + i * 52"
          width="330"
          height="44"
          rx="12"
          fill="#FAFAFA"
          stroke="#ECECEF"
        />
        <text x="204" :y="151 + i * 52" class="t-nombre">{{ r.nombre }}</text>
        <text x="204" :y="164 + i * 52" class="t-puesto">{{ r.puesto }}</text>
        <text x="378" :y="157 + i * 52" text-anchor="end" class="t-monto">{{ r.percep }}</text>
        <text x="440" :y="157 + i * 52" text-anchor="end" class="t-monto-neg">{{ r.deduc }}</text>
        <text x="502" :y="157 + i * 52" text-anchor="end" class="t-neto">{{ r.neto }}</text>
      </g>

      <text x="204" y="404" class="t-foot">+19 recibos mas en este periodo</text>

      <!-- Resumen del periodo -->
      <rect x="536" y="112" width="190" height="300" rx="12" fill="#FAFAFA" stroke="#ECECEF" />
      <rect x="536" y="112" width="190" height="46" rx="12" fill="#F4F4F5" />
      <rect x="536" y="146" width="190" height="12" fill="#F4F4F5" />
      <text x="552" y="132" class="t-panel-h">Resumen del periodo</text>
      <text x="552" y="146" class="t-panel-dim">Quincenal &middot; 24 empleados</text>

      <g v-for="(f, i) in resumen" :key="f.lbl">
        <text x="552" :y="186 + i * 30" class="t-lbl">{{ f.lbl }}</text>
        <text x="710" :y="186 + i * 30" text-anchor="end" class="t-val">{{ f.val }}</text>
        <line x1="552" :y1="196 + i * 30" x2="710" :y2="196 + i * 30" stroke="#ECECEF" />
      </g>

      <text x="552" y="322" class="t-lbl">NETO A PAGAR</text>
      <text x="710" y="344" text-anchor="end" class="t-total">$ 226,319.45</text>

      <rect x="552" y="358" width="94" height="20" rx="10" fill="#E6F8F4" />
      <text x="599" y="372" text-anchor="middle" class="t-estado">Periodo abierto</text>

      <text x="552" y="396" class="t-foot">46 horas extra pagadas</text>

      <rect x="536" y="424" width="98" height="26" rx="9" fill="#1A1A1E" />
      <text x="585" y="441" text-anchor="middle" class="t-mini-cta">Cerrar periodo</text>
      <rect x="642" y="424" width="84" height="26" rx="9" fill="#fff" stroke="#DCDCE0" />
      <text x="684" y="441" text-anchor="middle" class="t-mini-alt">Recibo PDF</text>
    </svg>
  </div>
</template>

<script setup>
const recibos = [
  {
    nombre: 'Laura Martinez Diaz',
    puesto: 'Gerente de sucursal',
    percep: '12,450.00',
    deduc: '2,180.40',
    neto: '10,269.60'
  },
  {
    nombre: 'Jorge Alberto Nunez',
    puesto: 'Almacen',
    percep: '6,240.00',
    deduc: '780.15',
    neto: '5,459.85'
  },
  {
    nombre: 'Sofia Ramirez Luna',
    puesto: 'Cajera',
    percep: '5,880.00',
    deduc: '690.20',
    neto: '5,189.80'
  },
  {
    nombre: 'Ricardo Mendoza Paz',
    puesto: 'Chofer repartidor',
    percep: '7,120.00',
    deduc: '1,940.00',
    neto: '5,180.00'
  },
  {
    nombre: 'Ana Cristina Lopez',
    puesto: 'Recursos humanos',
    percep: '9,350.00',
    deduc: '1,420.75',
    neto: '7,929.25'
  }
]

const resumen = [
  { lbl: 'PERCEPCIONES', val: '$ 268,430.00' },
  { lbl: 'ISR RETENIDO', val: '- $ 21,870.40' },
  { lbl: 'IMSS OBRERO', val: '- $ 7,940.15' },
  { lbl: 'OTRAS DEDUCCIONES', val: '- $ 12,300.00' }
]
</script>

<style scoped>
.mock {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

svg {
  width: 100%;
  height: auto;
  display: block;
  font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
}

.t-mark {
  font-size: 9px;
  font-weight: 700;
  fill: #1a1a1e;
}

.t-side-strong {
  font-size: 12px;
  font-weight: 600;
  fill: #fff;
}

.t-side-dim {
  font-size: 9.5px;
  fill: rgba(255, 255, 255, 0.58);
}

.t-group {
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.1em;
  fill: rgba(255, 255, 255, 0.38);
}

.t-nav-on {
  font-size: 11.5px;
  font-weight: 600;
  fill: #fff;
}

.t-nav {
  font-size: 11.5px;
  fill: rgba(255, 255, 255, 0.72);
}

.t-h1 {
  font-size: 17px;
  font-weight: 700;
  fill: #1a1a1e;
}

.t-sub {
  font-size: 10.5px;
  fill: #8a8a93;
}

.t-cta {
  font-size: 11.5px;
  font-weight: 600;
  fill: #fff;
}

.t-col {
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  fill: #a1a1aa;
}

.t-nombre {
  font-size: 11.5px;
  font-weight: 600;
  fill: #1a1a1e;
}

.t-puesto {
  font-size: 9.5px;
  fill: #8a8a93;
}

.t-monto {
  font-size: 10px;
  font-weight: 500;
  fill: #45454e;
}

.t-monto-neg {
  font-size: 10px;
  font-weight: 500;
  fill: #a1a1aa;
}

.t-neto {
  font-size: 11px;
  font-weight: 700;
  fill: #0e8f6b;
}

.t-foot {
  font-size: 9px;
  fill: #a1a1aa;
}

.t-panel-h {
  font-size: 10.5px;
  font-weight: 700;
  fill: #1a1a1e;
}

.t-panel-dim {
  font-size: 8.5px;
  fill: #8a8a93;
}

.t-lbl {
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  fill: #a1a1aa;
}

.t-val {
  font-size: 10px;
  font-weight: 600;
  fill: #1a1a1e;
}

.t-total {
  font-size: 15px;
  font-weight: 700;
  fill: #0e8f6b;
}

.t-estado {
  font-size: 8.5px;
  font-weight: 600;
  fill: #0a6e52;
}

.t-mini-cta {
  font-size: 10px;
  font-weight: 600;
  fill: #fff;
}

.t-mini-alt {
  font-size: 10px;
  font-weight: 500;
  fill: #1a1a1e;
}
</style>

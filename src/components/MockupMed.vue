<template>
  <!-- Representacion de la Agenda y la receta de MkrMed.
       TODO: cuando tengas capturas reales, cambia este componente por
       <img src="/capturas/mkrmed-agenda.png" alt="..." /> -->
  <div class="mock">
    <svg viewBox="0 0 760 470" role="img" aria-label="Agenda y receta de MkrMed">
      <rect width="760" height="470" rx="16" fill="#0F5F6B" />
      <g fill="#fff" opacity="0.35">
        <circle cx="700" cy="21" r="4" />
        <circle cx="716" cy="21" r="4" />
        <circle cx="732" cy="21" r="4" />
      </g>

      <!-- Barra lateral -->
      <rect x="14" y="38" width="140" height="418" rx="18" fill="#147D8E" />
      <circle cx="38" cy="66" r="11" fill="#fff" opacity="0.92" />
      <text x="38" y="70" text-anchor="middle" class="t-mark">CM</text>
      <text x="56" y="63" class="t-side-strong">Consultorio</text>
      <text x="56" y="76" class="t-side-dim">Dra. Ramirez</text>

      <g>
        <rect x="24" y="104" width="120" height="30" rx="9" fill="#fff" opacity="0.18" />
        <rect x="30" y="114" width="11" height="11" rx="2.5" fill="#fff" />
        <text x="50" y="123" class="t-nav-on">Agenda</text>

        <rect x="30" y="146" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="155" class="t-nav">Pacientes</text>

        <rect x="30" y="178" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="187" class="t-nav">Expedientes</text>

        <rect x="30" y="210" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="219" class="t-nav">Recetas</text>

        <rect x="30" y="242" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="251" class="t-nav">Medicamentos</text>

        <rect x="30" y="274" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="283" class="t-nav">Reportes</text>

        <rect x="30" y="418" width="11" height="11" rx="2.5" fill="#fff" opacity="0.4" />
        <text x="50" y="427" class="t-nav">Ajustes</text>
      </g>

      <!-- Area principal -->
      <rect x="166" y="38" width="580" height="418" rx="18" fill="#fff" />

      <text x="188" y="76" class="t-h1">Agenda</text>
      <text x="188" y="93" class="t-sub">Lunes 24 de agosto &middot; 7 citas</text>

      <rect x="612" y="60" width="114" height="32" rx="10" fill="#147D8E" />
      <text x="669" y="80" text-anchor="middle" class="t-cta">+ Nueva cita</text>

      <!-- Lista de citas -->
      <g v-for="(c, i) in citas" :key="c.hora">
        <rect
          x="188"
          :y="112 + i * 52"
          width="330"
          height="44"
          rx="12"
          fill="#F6FBFC"
          stroke="#DFEEF1"
        />
        <text x="204" :y="133 + i * 52" class="t-hora">{{ c.hora }}</text>
        <text x="204" :y="146 + i * 52" class="t-dur">{{ c.dur }}</text>
        <text x="252" :y="133 + i * 52" class="t-nombre">{{ c.paciente }}</text>
        <text x="252" :y="146 + i * 52" class="t-motivo">{{ c.motivo }}</text>
        <rect
          :x="502 - c.ancho"
          :y="125 + i * 52"
          :width="c.ancho"
          height="19"
          rx="9.5"
          :fill="c.bg"
        />
        <text :x="502 - c.ancho / 2" :y="138 + i * 52" text-anchor="middle" class="t-estado" :fill="c.fg">
          {{ c.estado }}
        </text>
      </g>

      <!-- Vista previa de la receta -->
      <rect x="536" y="112" width="190" height="300" rx="12" fill="#fff" stroke="#DFEEF1" />
      <rect x="536" y="112" width="190" height="46" rx="12" fill="#F1F8F9" />
      <rect x="536" y="146" width="190" height="12" fill="#F1F8F9" />
      <circle cx="556" cy="134" r="10" fill="#147D8E" opacity="0.16" />
      <text x="572" y="130" class="t-rx-h">Consultorio Medico</text>
      <text x="572" y="142" class="t-rx-dim">Ced. Prof. 0000000</text>

      <text x="552" y="180" class="t-rx-lbl">PACIENTE</text>
      <text x="552" y="194" class="t-rx-val">Maria Elena Torres, 42 anos</text>
      <line x1="552" y1="204" x2="710" y2="204" stroke="#EDF4F5" />

      <text x="552" y="222" class="t-rx-lbl">DIAGNOSTICO</text>
      <text x="552" y="236" class="t-rx-val">J01.0 Sinusitis aguda</text>
      <line x1="552" y1="246" x2="710" y2="246" stroke="#EDF4F5" />

      <text x="552" y="264" class="t-rx-lbl">MEDICAMENTOS</text>
      <g v-for="(m, i) in receta" :key="m.n">
        <text x="552" :y="280 + i * 30" class="t-rx-med">{{ m.n }}</text>
        <text x="552" :y="292 + i * 30" class="t-rx-dosis">{{ m.dosis }}</text>
      </g>

      <line x1="590" y1="372" x2="672" y2="372" stroke="#C9DCE0" />
      <text x="631" y="386" text-anchor="middle" class="t-rx-firma">Firma del medico</text>

      <rect x="536" y="424" width="90" height="26" rx="9" fill="#147D8E" />
      <text x="581" y="441" text-anchor="middle" class="t-mini-cta">Imprimir</text>
      <rect x="634" y="424" width="92" height="26" rx="9" fill="#fff" stroke="#CFE4E8" />
      <text x="680" y="441" text-anchor="middle" class="t-mini-alt">Guardar PDF</text>
    </svg>
  </div>
</template>

<script setup>
const citas = [
  {
    hora: '09:00',
    dur: '30 min',
    paciente: 'Maria Elena Torres',
    motivo: 'Consulta de seguimiento',
    estado: 'Atendida',
    bg: '#E4F4EE',
    fg: '#1FA97C',
    ancho: 56
  },
  {
    hora: '09:30',
    dur: '30 min',
    paciente: 'Jorge Alberto Nunez',
    motivo: 'Primera vez',
    estado: 'Confirmada',
    bg: '#E3F1F4',
    fg: '#147D8E',
    ancho: 64
  },
  {
    hora: '10:15',
    dur: '45 min',
    paciente: 'Sofia Gutierrez',
    motivo: 'Resultados de laboratorio',
    estado: 'En espera',
    bg: '#FBF1DE',
    fg: '#B4801F',
    ancho: 60
  },
  {
    hora: '11:00',
    dur: '30 min',
    paciente: 'Ricardo Mendoza',
    motivo: 'Control de presion',
    estado: 'Programada',
    bg: '#EEF1F3',
    fg: '#5A6B70',
    ancho: 66
  },
  {
    hora: '11:45',
    dur: '30 min',
    paciente: 'Ana Cristina Lopez',
    motivo: 'Certificado medico',
    estado: 'Programada',
    bg: '#EEF1F3',
    fg: '#5A6B70',
    ancho: 66
  },
  {
    hora: '12:30',
    dur: '30 min',
    paciente: 'Luis Fernando Ruiz',
    motivo: 'Revision post consulta',
    estado: 'No asistio',
    bg: '#FBE9E8',
    fg: '#C0473F',
    ancho: 62
  }
]

const receta = [
  { n: 'Amoxicilina 500 mg', dosis: '1 capsula cada 8 h por 7 dias' },
  { n: 'Paracetamol 500 mg', dosis: '1 tableta cada 8 h si hay dolor' },
  { n: 'Loratadina 10 mg', dosis: '1 tableta cada 24 h por 5 dias' }
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
  fill: #147d8e;
}

.t-side-strong {
  font-size: 12px;
  font-weight: 600;
  fill: #fff;
}

.t-side-dim {
  font-size: 9.5px;
  fill: rgba(255, 255, 255, 0.62);
}

.t-nav-on {
  font-size: 11.5px;
  font-weight: 600;
  fill: #fff;
}

.t-nav {
  font-size: 11.5px;
  fill: rgba(255, 255, 255, 0.74);
}

.t-h1 {
  font-size: 17px;
  font-weight: 700;
  fill: #1f2d30;
}

.t-sub {
  font-size: 10.5px;
  fill: #7c8f94;
}

.t-cta {
  font-size: 11.5px;
  font-weight: 600;
  fill: #fff;
}

.t-hora {
  font-size: 12px;
  font-weight: 700;
  fill: #147d8e;
}

.t-dur {
  font-size: 9px;
  fill: #9db0b4;
}

.t-nombre {
  font-size: 11.5px;
  font-weight: 600;
  fill: #1f2d30;
}

.t-motivo {
  font-size: 9.5px;
  fill: #7c8f94;
}

.t-estado {
  font-size: 9px;
  font-weight: 600;
}

.t-rx-h {
  font-size: 10.5px;
  font-weight: 700;
  fill: #1f2d30;
}

.t-rx-dim {
  font-size: 8.5px;
  fill: #8fa3a8;
}

.t-rx-lbl {
  font-size: 7.5px;
  font-weight: 600;
  letter-spacing: 0.08em;
  fill: #a3b6ba;
}

.t-rx-val {
  font-size: 10px;
  font-weight: 500;
  fill: #1f2d30;
}

.t-rx-med {
  font-size: 9.5px;
  font-weight: 600;
  fill: #1f2d30;
}

.t-rx-dosis {
  font-size: 8.5px;
  fill: #7c8f94;
}

.t-rx-firma {
  font-size: 8px;
  fill: #9db0b4;
}

.t-mini-cta {
  font-size: 10px;
  font-weight: 600;
  fill: #fff;
}

.t-mini-alt {
  font-size: 10px;
  font-weight: 500;
  fill: #147d8e;
}
</style>

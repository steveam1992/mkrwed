<template>
  <!-- Representacion de la pantalla de Ventas de MkrCart.
       TODO: cuando tengas capturas reales, cambia este componente por
       <img src="/capturas/mkrcart-ventas.png" alt="..." /> -->
  <div class="mock">
    <svg viewBox="0 0 760 470" role="img" aria-label="Pantalla de ventas de MkrCart">
      <!-- Fondo de la ventana -->
      <rect width="760" height="470" rx="16" fill="#5849C2" />
      <g fill="#fff" opacity="0.35">
        <circle cx="700" cy="21" r="4" />
        <circle cx="716" cy="21" r="4" />
        <circle cx="732" cy="21" r="4" />
      </g>

      <!-- Barra lateral -->
      <rect x="14" y="38" width="140" height="418" rx="18" fill="#6553D6" />
      <circle cx="38" cy="66" r="11" fill="#fff" opacity="0.92" />
      <text x="38" y="70" text-anchor="middle" class="t-mark">MT</text>
      <text x="56" y="63" class="t-side-strong">Mi Tienda</text>
      <text x="56" y="76" class="t-side-dim">Cajero 1</text>

      <g class="nav">
        <rect x="24" y="104" width="120" height="30" rx="9" fill="#fff" opacity="0.16" />
        <rect x="30" y="114" width="11" height="11" rx="2.5" fill="#fff" />
        <text x="50" y="123" class="t-nav-on">Ventas</text>

        <rect x="30" y="146" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="155" class="t-nav">Productos</text>

        <rect x="30" y="178" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="187" class="t-nav">Clientes</text>

        <rect x="30" y="210" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="219" class="t-nav">Proveedores</text>

        <rect x="30" y="242" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="251" class="t-nav">Salidas</text>

        <rect x="30" y="274" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="283" class="t-nav">Reportes</text>

        <rect x="30" y="306" width="11" height="11" rx="2.5" fill="#fff" opacity="0.55" />
        <text x="50" y="315" class="t-nav">Inventario</text>

        <rect x="30" y="418" width="11" height="11" rx="2.5" fill="#fff" opacity="0.4" />
        <text x="50" y="427" class="t-nav">Ajustes</text>
      </g>

      <!-- Area principal -->
      <rect x="166" y="38" width="580" height="418" rx="18" fill="#fff" />

      <!-- Buscador -->
      <rect x="188" y="62" width="248" height="32" rx="10" fill="#F5F3FE" stroke="#E3DEFB" />
      <g stroke="#8E85C9" stroke-width="1.6" fill="none">
        <circle cx="205" cy="77" r="5" />
        <path d="M209 81l4 4" stroke-linecap="round" />
      </g>
      <text x="220" y="82" class="t-ph">Buscar producto o codigo...</text>
      <rect x="446" y="62" width="86" height="32" rx="10" fill="#EFECFD" />
      <text x="489" y="82" text-anchor="middle" class="t-btn-soft">F2 Cliente</text>

      <!-- Tarjetas de producto -->
      <g class="tiles">
        <g v-for="(p, i) in tiles" :key="p.n">
          <rect
            :x="188 + (i % 3) * 124"
            :y="112 + Math.floor(i / 3) * 104"
            width="112"
            height="92"
            rx="13"
            fill="#FCFBFF"
            stroke="#EAE6FA"
          />
          <rect
            :x="200 + (i % 3) * 124"
            :y="124 + Math.floor(i / 3) * 104"
            width="88"
            height="34"
            rx="8"
            :fill="p.tono"
          />
          <text :x="200 + (i % 3) * 124" :y="176 + Math.floor(i / 3) * 104" class="t-tile">
            {{ p.n }}
          </text>
          <text :x="200 + (i % 3) * 124" :y="191 + Math.floor(i / 3) * 104" class="t-price">
            {{ p.precio }}
          </text>
        </g>
      </g>

      <!-- Ticket -->
      <rect x="562" y="62" width="164" height="372" rx="14" fill="#FFF5F3" />
      <text x="580" y="88" class="t-ticket-h">Ticket 1042</text>
      <text x="708" y="88" text-anchor="end" class="t-ticket-dim">4 art.</text>
      <line x1="578" y1="98" x2="710" y2="98" stroke="#F2DED9" />

      <g v-for="(l, i) in ticket" :key="l.n">
        <text x="580" :y="120 + i * 30" class="t-line">{{ l.n }}</text>
        <text x="580" :y="133 + i * 30" class="t-line-dim">{{ l.cant }}</text>
        <text x="710" :y="126 + i * 30" text-anchor="end" class="t-line-num">{{ l.imp }}</text>
      </g>

      <line x1="578" y1="252" x2="710" y2="252" stroke="#F2DED9" />
      <text x="580" y="276" class="t-total-lbl">Total</text>
      <text x="710" y="280" text-anchor="end" class="t-total">$347.50</text>

      <rect x="578" y="300" width="132" height="38" rx="12" fill="#6C5CE7" />
      <text x="644" y="324" text-anchor="middle" class="t-cta">Cobrar (F12)</text>
      <rect x="578" y="346" width="132" height="32" rx="10" fill="#fff" stroke="#F0DCD7" />
      <text x="644" y="366" text-anchor="middle" class="t-alt">Cancelar venta</text>
    </svg>
  </div>
</template>

<script setup>
const tiles = [
  { n: 'Coca 600ml', precio: '$22.00', tono: '#E9E5FC' },
  { n: 'Sabritas', precio: '$18.50', tono: '#FDEFE6' },
  { n: 'Pan Bimbo', precio: '$46.00', tono: '#E4F3EC' },
  { n: 'Leche 1L', precio: '$28.00', tono: '#EAF0FC' },
  { n: 'Huevo kg', precio: '$62.00', tono: '#FBEDF3' },
  { n: 'Atun lata', precio: '$21.50', tono: '#F0F0E6' }
]

const ticket = [
  { n: 'Coca 600ml', cant: '2 x 22.00', imp: '44.00' },
  { n: 'Pan Bimbo', cant: '1 x 46.00', imp: '46.00' },
  { n: 'Detergente 1kg', cant: '1 x 89.50', imp: '89.50' },
  { n: 'Huevo kg', cant: '2 x 62.00', imp: '124.00' }
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

text {
  font-size: 11px;
}

.t-mark {
  font-size: 9px;
  font-weight: 700;
  fill: #6c5ce7;
}

.t-side-strong {
  font-size: 12px;
  font-weight: 600;
  fill: #fff;
}

.t-side-dim {
  font-size: 9.5px;
  fill: rgba(255, 255, 255, 0.6);
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

.t-ph {
  font-size: 11px;
  fill: #9a92cb;
}

.t-btn-soft {
  font-size: 10.5px;
  font-weight: 600;
  fill: #6c5ce7;
}

.t-tile {
  font-size: 10.5px;
  font-weight: 500;
  fill: #2d3436;
}

.t-price {
  font-size: 11px;
  font-weight: 700;
  fill: #6c5ce7;
}

.t-ticket-h {
  font-size: 11.5px;
  font-weight: 700;
  fill: #2d3436;
}

.t-ticket-dim {
  font-size: 10px;
  fill: #b0a4a0;
}

.t-line {
  font-size: 10.5px;
  font-weight: 500;
  fill: #2d3436;
}

.t-line-dim {
  font-size: 9px;
  fill: #a99e9b;
}

.t-line-num {
  font-size: 10.5px;
  font-weight: 600;
  fill: #2d3436;
}

.t-total-lbl {
  font-size: 11px;
  fill: #7a6f6c;
}

.t-total {
  font-size: 19px;
  font-weight: 700;
  fill: #2d3436;
}

.t-cta {
  font-size: 12px;
  font-weight: 700;
  fill: #fff;
}

.t-alt {
  font-size: 10.5px;
  font-weight: 500;
  fill: #a2918d;
}
</style>

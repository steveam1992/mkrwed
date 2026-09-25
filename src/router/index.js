import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { site } from '../data/site'
import { getProducto } from '../data/productos'

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Software de escritorio para negocios, consultorios y recursos humanos' } },
  {
    path: '/productos/:slug',
    name: 'producto',
    component: () => import('../views/Producto.vue'),
    props: true
  },
  {
    path: '/precios',
    name: 'precios',
    component: () => import('../views/Precios.vue'),
    meta: { title: 'Precios' }
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: () => import('../views/Contacto.vue'),
    meta: { title: 'Contacto y demostracion' }
  },
  {
    path: '/terminos-y-condiciones',
    name: 'terminos',
    component: () => import('../views/Terminos.vue'),
    meta: { title: 'Terminos y condiciones' }
  },
  { path: '/:pathMatch(.*)*', name: 'noEncontrado', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    // el offset evita que el ancla quede debajo del encabezado fijo
    if (to.hash) return { el: to.hash, top: 84, behavior: 'smooth' }
    return { top: 0 }
  }
})

// Titulo de la pestana por ruta
router.afterEach((to) => {
  if (typeof document === 'undefined') return

  const producto = to.name === 'producto' ? getProducto(to.params.slug) : null
  const parte = producto ? `${producto.nombre} — ${producto.categoria}` : to.meta.title
  document.title = parte ? `${parte} | ${site.marca}` : site.marca
})

export default router

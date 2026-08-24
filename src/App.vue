<template>
  <AppHeader />

  <main>
    <!-- Sin <Transition> a proposito: las vistas tienen varias <section> como
         raiz, y Vue no puede animar un componente multi-raiz. Con
         mode="out-in" eso dejaba la pagina anterior en pantalla al cambiar de
         ruta. Si algun dia quieres el fundido, cada vista tendria que llevar un
         solo elemento raiz. -->
    <RouterView />
  </main>

  <AppFooter />
  <WhatsAppFab />
</template>

<script setup>
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import WhatsAppFab from './components/WhatsAppFab.vue'
</script>

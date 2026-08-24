<template>
  <div class="faq">
    <details v-for="(f, i) in items" :key="i" class="faq__item">
      <summary>
        <span>{{ f.p }}</span>
        <span class="faq__mas" aria-hidden="true"></span>
      </summary>
      <p>{{ f.r }}</p>
    </details>
  </div>
</template>

<script setup>
defineProps({
  // [{ p: 'pregunta', r: 'respuesta' }]
  items: { type: Array, required: true }
})
</script>

<style scoped>
.faq {
  display: grid;
  gap: 12px;
  max-width: 780px;
}

.faq__item {
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--surface);
  padding: 4px 20px;
  transition: border-color 0.18s ease;
}

.faq__item[open] {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0;
  cursor: pointer;
  font-weight: 600;
  list-style: none;
  color: var(--text-1);
}

summary::-webkit-details-marker {
  display: none;
}

summary:hover {
  color: var(--accent);
}

.faq__mas {
  position: relative;
  width: 18px;
  height: 18px;
  flex: none;
}

.faq__mas::before,
.faq__mas::after {
  content: '';
  position: absolute;
  background: var(--accent);
  border-radius: 2px;
  transition: transform 0.2s ease;
}

.faq__mas::before {
  top: 8px;
  left: 0;
  width: 18px;
  height: 2px;
}

.faq__mas::after {
  top: 0;
  left: 8px;
  width: 2px;
  height: 18px;
}

.faq__item[open] .faq__mas::after {
  transform: rotate(90deg);
}

.faq__item p {
  padding: 0 0 18px;
  color: var(--text-2);
  max-width: 66ch;
}
</style>

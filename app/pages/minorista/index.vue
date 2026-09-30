<script setup lang="ts">
import { minoristaBrands } from '~/data/minorista'

useSiteSeo({
  title: 'Comprar celulares y tecnología por unidad en Argentina',
  description:
    'Nexo Imports vende Apple, Xiaomi, Samsung y Motorola por unidad. Consultá precio, garantía y envío a todo el país por WhatsApp, sin mínimo de compra.',
  path: '/minorista'
})
useItemListStructuredData(
  minoristaBrands.map((brand) => ({ name: brand.name, path: `/minorista/${brand.slug}` }))
)
</script>

<template>
  <div class="shell content-section">
    <header class="page-header">
      <p class="eyebrow">COMPRA POR UNIDAD · SIN MÍNIMO</p>
      <h1>Comprá tu celular por unidad</h1>
      <p>
        Vendemos tecnología por unidad para quien compra para sí mismo, no
        para revender: elegí la marca que buscás y consultá precio,
        disponibilidad, envío y garantía directamente por WhatsApp.
      </p>
    </header>
    <div class="family-grid">
      <NuxtLink
        v-for="brand in minoristaBrands"
        :key="brand.slug"
        :to="`/minorista/${brand.slug}`"
        class="family-card"
      >
        <div class="family-copy">
          <h3>{{ brand.name }}</h3>
          <p>{{ brand.intro }}</p>
        </div>
        <span class="round-arrow" aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
    <div class="mt-6"><QuoteRequest audience="minorista" /></div>
    <div class="section-callout">
      <div>
        <p class="section-callout-title">¿Buscás otra marca?</p>
        <p class="section-callout-text">
          Consultanos por WhatsApp, también trabajamos con otras marcas de
          tecnología para venta por unidad.
        </p>
      </div>
      <WhatsAppCta
        label="Consultar"
        compact
        message="Hola, estoy buscando un producto de tecnología para uso personal. ¿Me pasás precio y disponibilidad?"
      />
    </div>
    <p class="text-link">
      <NuxtLink to="/mayorista">
        ¿Comprás para revender? Conocé la sección mayorista
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </p>
  </div>
</template>

<style scoped>
.family-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
@media (max-width: 850px) {
  .family-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>


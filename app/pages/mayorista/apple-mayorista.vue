<script setup lang="ts">
const appleLines = [
  {
    name: 'iPhone',
    path: '/mayorista/iphone-mayorista',
    tagline: 'El equipo con más rotación entre revendedores.'
  },
  {
    name: 'MacBook',
    path: '/mayorista/macbook-mayorista',
    tagline: 'Notebooks para ampliar el ticket promedio.'
  },
  {
    name: 'iPad',
    path: '/mayorista/ipad-mayorista',
    tagline: 'Buena demanda entre estudiantes y profesionales.'
  },
  {
    name: 'Apple Watch',
    path: '/mayorista/apple-watch-mayorista',
    tagline: 'Producto complementario a la venta de iPhone.'
  },
  {
    name: 'AirPods',
    path: '/mayorista/airpods-mayorista',
    tagline: 'Alta rotación en el mostrador.'
  }
]

useSiteSeo({
  title: 'Mayorista de Apple en Argentina',
  description:
    'Nexo Imports es mayorista de productos Apple en Argentina: iPhone, MacBook, iPad, Apple Watch y AirPods para comercios y revendedores. Consultá por WhatsApp.',
  path: '/mayorista/apple-mayorista'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Apple mayorista', path: '/mayorista/apple-mayorista' }
])
useItemListStructuredData(appleLines)
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Apple mayorista</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">STOCK MAYORISTA · COMERCIOS Y REVENDEDORES</p>
      <h1>Apple mayorista: iPhone, Mac, iPad y más</h1>
      <p>
        Trabajamos con toda la línea de productos Apple para comercios y
        revendedores en Argentina. Elegí la categoría que te interesa para
        ver detalles y consultar disponibilidad.
      </p>
    </header>
    <WhatsAppCta
      label="Consultar por productos Apple"
      message="Hola Nexo Imports, quiero consultar disponibilidad y precio mayorista de productos Apple."
    />
    <div class="category-body">
      <section>
        <h2>Un ecosistema completo para tu comercio</h2>
        <p>
          Apple es una de las marcas con mayor demanda en Argentina, tanto
          para uso personal como para quienes revenden por Instagram,
          Mercado Libre o desde un local físico. Trabajar con la línea
          completa —no solo iPhone— te permite ofrecer combos y productos
          complementarios (como Apple Watch o AirPods junto a un iPhone) que
          suelen aumentar el ticket promedio de venta.
        </p>
        <p>
          Cada línea de producto tiene su propia dinámica de stock, colores
          y capacidades disponibles. Por eso separamos la información por
          categoría: entrá a la que te interesa para ver el detalle y
          consultar disponibilidad puntual.
        </p>
      </section>
      <aside class="category-aside">
        <h2>Líneas que trabajamos</h2>
        <ul>
          <li v-for="line in appleLines" :key="line.path">
            <NuxtLink :to="line.path">{{ line.name }}</NuxtLink>
            — {{ line.tagline }}
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

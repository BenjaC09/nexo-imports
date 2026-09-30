<script setup lang="ts">
const brands = [
  {
    name: 'iPhone',
    path: '/mayorista/iphone-mayorista',
    note: 'La marca con más demanda del público final, ideal como producto ancla del local.'
  },
  {
    name: 'Samsung',
    path: '/mayorista/samsung-mayorista',
    note: 'Variedad de gama (S, A y Z) para cubrir distintos perfiles de precio con una sola marca.'
  },
  {
    name: 'Xiaomi',
    path: '/mayorista/xiaomi-mayorista',
    note: 'Buena relación entre prestaciones y precio, con rotación rápida.'
  },
  {
    name: 'POCO',
    path: '/mayorista/poco-mayorista',
    note: 'Rendimiento a precio competitivo, útil para diferenciarse en ese segmento.'
  },
  {
    name: 'Motorola',
    path: '/mayorista/motorola-mayorista',
    note: 'Marca de trayectoria, con base de clientes fiel en distintos segmentos.'
  }
]

useSiteSeo({
  title: 'Mayorista de Celulares en Argentina',
  description:
    'Nexo Imports es mayorista de celulares en Argentina: iPhone, Samsung, Xiaomi, POCO y Motorola para comercios y revendedores. Consultá por WhatsApp.',
  path: '/mayorista/celulares-mayorista'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Celulares mayorista', path: '/mayorista/celulares-mayorista' }
])
useItemListStructuredData(brands)
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Celulares mayorista</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">STOCK MAYORISTA · COMERCIOS Y REVENDEDORES</p>
      <h1>Celulares mayorista: elegí las marcas para tu negocio</h1>
      <p>
        La mayoría de los comercios que arrancan con nosotros no compran
        una sola marca: arman un mix. Acá te contamos, en general, para qué
        sirve cada una dentro de ese mix.
      </p>
    </header>
    <WhatsAppCta
      label="Consultar stock mayorista"
      message="Hola Nexo Imports, quiero armar un pedido con varias marcas. ¿Me ayudan a definir el mix?"
    />
    <div class="category-body">
      <section>
        <h2>Por qué conviene trabajar con más de una marca</h2>
        <p>
          Un local o una cuenta de reventa que ofrece una sola marca
          depende de que ese público específico llegue a comprar. Sumar
          marcas con distinto posicionamiento de precio te permite atender
          a más tipos de cliente sin necesitar un segundo proveedor: quien
          busca algo premium, quien prioriza precio, y quien busca una
          marca de confianza conocida.
        </p>
        <p>
          No hace falta empezar con las cinco marcas a la vez. Muchos
          comercios arrancan con una o dos y suman el resto a medida que
          conocen a su público. Contanos cómo es tu negocio y te ayudamos a
          pensar el mix inicial.
        </p>
      </section>
      <aside class="category-aside">
        <h2>Marcas que trabajamos</h2>
        <ul>
          <li v-for="brand in brands" :key="brand.path">
            <NuxtLink :to="brand.path">{{ brand.name }}</NuxtLink>
            — {{ brand.note }}
          </li>
        </ul>
        <NuxtLink class="text-link" to="/mayorista/accesorios-mayorista">
          Ver también accesorios
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>
    </div>
  </div>
</template>

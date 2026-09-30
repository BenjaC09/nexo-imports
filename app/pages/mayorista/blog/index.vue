<script setup lang="ts">
import { articles } from '~/data/articles'

useSiteSeo({
  title: 'Guías para comercios y revendedores de tecnología',
  description:
    'Guías prácticas sobre cómo comprar tecnología al por mayor, elegir proveedor y empezar a revender celulares en Argentina.',
  path: '/mayorista/blog'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Guías', path: '/mayorista/blog' }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Guías</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">RECURSOS PARA TU NEGOCIO</p>
      <h1>Guías para comercios y revendedores</h1>
      <p>
        Notas prácticas para quienes están evaluando empezar a revender
        tecnología o buscan mejorar cómo compran hoy.
      </p>
    </header>
    <div class="article-list">
      <NuxtLink
        v-for="article in articles"
        :key="article.slug"
        :to="`/mayorista/blog/${article.slug}`"
        class="article-card"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.excerpt }}</p>
        <span class="text-link">
          Leer
          <span aria-hidden="true">↗</span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

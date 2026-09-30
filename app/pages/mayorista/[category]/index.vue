<script setup lang="ts">
import { categories, getCategory } from '~/data/catalog'
import { categoryGuides } from '~/data/categoryGuides'

const route = useRoute()
const category = getCategory(String(route.params.category))
if (!category)
  throw createError({
    statusCode: 404,
    statusMessage: 'Categoría no encontrada'
  })
const guide = categoryGuides[category.slug]!
useSiteSeo({
  title: category.title,
  description: guide.intro,
  path: `/mayorista/${category.slug}`
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: category.name, path: `/mayorista/${category.slug}` }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ category.name }}</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">STOCK MAYORISTA · COMERCIOS Y REVENDEDORES</p>
      <h1>{{ category.title }}</h1>
      <p>{{ guide.intro }}</p>
    </header>
    <WhatsAppCta
      :product-name="category.name"
      :label="`Consultar precio mayorista de ${category.name}`"
    />
    <QuoteRequest :brand="category.name === 'iPhone' ? 'Apple' : category.name" />
    <div class="category-body">
      <section>
        <h2>{{ guide.heading }}</h2>
        <p v-for="paragraph in guide.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
        <p>
          La atención es directa por WhatsApp, con envíos a todo el país.
          Contanos tu comercio, la cantidad que necesitás y tu localidad
          para coordinar la entrega.
        </p>
      </section>
      <aside class="category-aside">
        <h2>Para tu consulta</h2>
        <ul>
          <li v-for="item in guide.considerations" :key="item">{{ item }}</li>
        </ul>
        <NuxtLink class="text-link" to="/mayorista#como-comprar">
          Cómo comprar en Nexo
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>
    </div>
    <nav class="category-links" aria-label="Otras familias de productos">
      <NuxtLink
        v-for="other in categories.filter(
          (item) => item.slug !== category.slug
        )"
        :key="other.slug"
        :to="`/mayorista/${other.slug}`"
      >
        Explorar {{ other.name }} ↗
      </NuxtLink>
    </nav>
  </div>
</template>

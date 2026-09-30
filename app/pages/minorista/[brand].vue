<script setup lang="ts">
import { minoristaBrands, getMinoristaBrand } from '~/data/minorista'

const route = useRoute()
const brand = getMinoristaBrand(String(route.params.brand))
if (!brand)
  throw createError({
    statusCode: 404,
    statusMessage: 'Marca no encontrada'
  })

useSiteSeo({
  title: brand.title,
  description: brand.metaDescription,
  path: `/minorista/${brand.slug}`
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/minorista' },
  { name: brand.name, path: `/minorista/${brand.slug}` }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/minorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ brand.name }}</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">{{ brand.eyebrow }}</p>
      <h1>{{ brand.h1 }}</h1>
      <p>{{ brand.intro }}</p>
    </header>
    <WhatsAppCta
      :label="`Consultar precio de ${brand.name}`"
      :message="brand.whatsappMessage"
    />
    <QuoteRequest audience="minorista" :brand="brand.name" />
    <div class="category-body">
      <section>
        <h2>{{ brand.name }} para vos</h2>
        <p v-for="paragraph in brand.paragraphs" :key="paragraph">
          {{ paragraph }}
        </p>
        <p>
          Trabajamos con {{ brand.productExamples }}. No publicamos precios
          ni stock en la web: te enviamos el catálogo actualizado por
          WhatsApp, con precio, garantía y opciones de envío para tu compra.
        </p>
      </section>
      <aside class="category-aside">
        <h2>Para tu consulta</h2>
        <ul>
          <li v-for="item in brand.considerations" :key="item">{{ item }}</li>
        </ul>
      </aside>
    </div>
    <nav class="category-links" aria-label="Otras marcas">
      <NuxtLink
        v-for="other in minoristaBrands.filter((item) => item.slug !== brand.slug)"
        :key="other.slug"
        :to="`/minorista/${other.slug}`"
      >
        Ver {{ other.name }} ↗
      </NuxtLink>
    </nav>
  </div>
</template>

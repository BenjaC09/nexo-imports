<script setup lang="ts">
import { getCategory, getProduct } from '~/data/catalog'

const route = useRoute()
const categorySlug = String(route.params.category)
const productSlug = String(route.params.slug)
const category = getCategory(categorySlug)
const product = getProduct(categorySlug, productSlug)

if (!category || !product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Producto no encontrado'
  })
}

useSiteSeo({
  title: `${product.name} | ${category.name}`,
  description: product.shortDescription,
  path: `/mayorista/${product.category}/${product.slug}`,
  image: product.hasProductImage ? product.image : undefined,
  noindex: true
})
useProductStructuredData(product)
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <NuxtLink :to="`/mayorista/${category.slug}`">{{ category.name }}</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ product.name }}</span>
    </nav>

    <article class="product-detail">
      <div>
        <div class="product-detail-image-frame">
          <img
            :src="product.image"
            :alt="product.imageAlt"
            class="product-detail-image"
            width="800"
            height="800"
            loading="eager"
          >
        </div>
      </div>
      <div class="product-copy">
        <p class="eyebrow">{{ category.name }}</p>
        <h1>{{ product.name }}</h1>
        <p class="product-lead">{{ product.shortDescription }}</p>
        <p>{{ product.description }}</p>
        <p class="price-placeholder">
          Consultá precio mayorista, disponibilidad y variantes por
          WhatsApp.
        </p>
        <WhatsAppCta
          :product-name="product.name"
          label="Consultar por este producto"
        />
      </div>
    </article>
  </div>
</template>

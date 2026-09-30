<script setup lang="ts">
import { getCategory, productPath } from '~/data/catalog'
import type { Product } from '~/types/catalog'
defineProps<{ product: Product }>()
</script>
<template>
  <article class="product-card">
    <NuxtLink :to="productPath(product)" class="product-image-link">
      <div class="product-image-frame">
        <img
          :src="product.image"
          :alt="product.imageAlt"
          class="product-image"
          width="800"
          height="800"
          loading="lazy"
        >
      </div>
    </NuxtLink>
    <div class="product-card-copy">
      <p class="eyebrow">{{ getCategory(product.category)?.name }}</p>
      <h3>
        <NuxtLink :to="productPath(product)">{{ product.name }}</NuxtLink>
      </h3>
      <p>{{ product.shortDescription }}</p>
      <div class="button-row">
        <NuxtLink :to="productPath(product)" class="text-link">
          Ver ficha ↗
        </NuxtLink>
        <WhatsAppCta :product-name="product.name" label="Consultar" compact />
      </div>
    </div>
  </article>
</template>
<style scoped>
.product-card {
  border: 1px solid var(--line);
  border-radius: 8px;
  overflow: hidden;
}
.product-card-copy {
  padding: 24px;
}
.product-card-copy > p {
  margin-bottom: 14px;
}
.product-card-copy h3 {
  margin-bottom: 12px;
}
.product-card-copy .button-row {
  margin-top: 20px;
}
</style>

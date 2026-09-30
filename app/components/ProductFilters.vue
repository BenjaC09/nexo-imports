<script setup lang="ts">
import type { Category } from '~/types/catalog'
defineProps<{ categories: Category[]; selected?: string }>()
</script>
<template>
  <nav aria-label="Filtrar por categoría" class="category-links">
    <NuxtLink to="/">Todo</NuxtLink>
    <NuxtLink
      v-for="category in categories"
      :key="category.slug"
      :to="`/${category.slug}`"
      :aria-current="selected === category.slug ? 'page' : undefined"
    >
      {{ category.name }}
    </NuxtLink>
  </nav>
</template>

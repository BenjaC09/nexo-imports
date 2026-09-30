<script setup lang="ts">
import { questions } from '~/data/home'

useSiteSeo({
  title: 'Preguntas frecuentes sobre compras mayoristas',
  description:
    'Respuestas claras sobre marcas, precio mayorista, envíos, oficinas de retiro y garantía en Nexo Imports, mayorista de tecnología en Argentina.',
  path: '/mayorista/preguntas-frecuentes'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Preguntas frecuentes', path: '/mayorista/preguntas-frecuentes' }
])
useFaqStructuredData(questions)
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Preguntas frecuentes</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">ANTES DE CONSULTAR</p>
      <h1>Preguntas frecuentes</h1>
      <p>
        Lo que más nos preguntan los comercios y revendedores antes de hacer
        su primer pedido mayorista.
      </p>
    </header>
    <div class="faq-list">
      <details v-for="question in questions" :key="question.title">
        <summary>
          {{ question.title }}
          <span aria-hidden="true">+</span>
        </summary>
        <p>{{ question.answer }}</p>
      </details>
    </div>
    <WhatsAppCta
      class="mt-6"
      label="Consultar algo que no está acá"
    />
  </div>
</template>

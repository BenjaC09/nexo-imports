<script setup lang="ts">
useBusinessStructuredData()
</script>

<template>
  <div class="site-layout">
    <a class="skip-link" href="#main-content">Saltar al contenido</a>
    <SiteHeader />
    <main id="main-content" tabindex="-1"><slot /></main>
    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

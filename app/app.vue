<script setup lang="ts">
const settings = useSiteSettings()

useHead({
  htmlAttrs: { lang: 'es-AR' },
  titleTemplate: (title) =>
    title ? `${title} | ${settings.businessName}` : settings.businessName,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#fafbf9' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/brand/favicon-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/brand/icon-192.png' },
    { rel: 'apple-touch-icon', href: '/images/brand/icon-192.png' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSiteSeo({
  title: 'Nexo Imports: tecnología por mayor y por unidad en Argentina',
  description: 'Tecnología para tu negocio y para vos. Apple, Samsung, Xiaomi, POCO y Motorola. Consultá precios por WhatsApp, con envíos a todo el país.',
  path: '/'
})
</script>

<template>
  <section class="shell entry-section">
    <div class="entry-copy">
      <p class="eyebrow">NEXO IMPORTS · ARGENTINA</p>
      <h1>Tecnología para tu negocio.<br><span>Y para vos.</span></h1>
      <p class="entry-lead">Las marcas que buscás, con atención directa. Comprá para revender o elegí tu próximo equipo.</p>
      <div class="entry-options">
        <NuxtLink to="/mayorista" class="entry-option entry-option-primary">
          <span class="entry-option-kicker">COMERCIOS Y REVENDEDORES</span>
          <strong>Comprar por mayor <span aria-hidden="true">↗</span></strong>
          <span>Explorá marcas y consultá condiciones para tu negocio.</span>
        </NuxtLink>
        <NuxtLink to="/minorista" class="entry-option">
          <span class="entry-option-kicker">PARA USO PERSONAL</span>
          <strong>Comprar por unidad <span aria-hidden="true">↗</span></strong>
          <span>Encontrá tu próximo equipo, sin mínimo de compra.</span>
        </NuxtLink>
      </div>
      <p class="entry-note">Envíos a todo el país · Retiro en Caballito y Belgrano</p>
    </div>
    <DeviceShowcase />
  </section>
</template>

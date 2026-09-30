<script setup lang="ts">
const settings = useSiteSettings()
useSiteSeo({
  title: 'Contacto: consultá precio y disponibilidad mayorista',
  description:
    'Hablá con Nexo Imports por WhatsApp. Consultá marcas, modelos, precio mayorista y disponibilidad. Atención para comercios y revendedores en toda Argentina.',
  path: '/contacto'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/' },
  { name: 'Contacto', path: '/contacto' }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Contacto</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">CONECTEMOS</p>
      <h1>
        Tu pedido mayorista
        <br>
        empieza por acá.
      </h1>
      <p>
        Contanos qué marca y modelos buscás para tu negocio, y qué cantidad
        estás necesitando. Te ayudamos a conocer las opciones y a coordinar
        tu pedido.
      </p>
    </header>
    <div class="category-body">
      <section>
        <h2>Hablemos por WhatsApp</h2>
        <p>
          Atención comercial en {{ settings.serviceArea }}, con envíos a todo
          el país. Podés escribirnos al
          <strong>+{{ settings.whatsappPhone }}</strong>
          .
        </p>
        <p>
          Contanos si sos un local de celulares, revendedor, técnico u otro
          tipo de comercio, y qué marca, modelo y cantidad te interesa
          consultar.
        </p>
        <WhatsAppCta label="Iniciar consulta por WhatsApp" />
      </section>
      <aside class="category-aside">
        <h2>Todo claro, antes de comprar.</h2>
        <p>
          Consultá precio mayorista, disponibilidad actualizada, medios de
          pago y las opciones de entrega o envío según tu localidad.
        </p>
        <p>
          Las condiciones de garantía dependen de cada producto y se
          informan durante la consulta, antes de confirmar la compra.
        </p>
        <a
          v-if="settings.instagramUrl"
          class="text-link"
          :href="settings.instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram ↗
        </a>
      </aside>
    </div>
  </div>
</template>

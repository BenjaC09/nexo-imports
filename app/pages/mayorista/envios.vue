<script setup lang="ts">
useSiteSeo({
  title: 'Envíos a todo el país y oficinas de retiro',
  description:
    'Nexo Imports envía pedidos mayoristas a todo el país y cuenta con oficinas de retiro en Caballito y Belgrano, con seguridad las 24 horas.',
  path: '/mayorista/envios'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Envíos', path: '/mayorista/envios' }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Envíos</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">ENTREGA Y LOGÍSTICA</p>
      <h1>
        Envíos a todo el país.
        <br>
        Retiro en Caballito y Belgrano.
      </h1>
      <p>
        Elegí la modalidad que mejor se adapte a tu comercio: retirás tu
        pedido en persona o coordinamos el envío según tu destino.
      </p>
    </header>
    <div class="category-body">
      <section>
        <h2>Retiro en nuestras oficinas</h2>
        <p>
          Contamos con oficinas de entrega y retiro en Caballito y Belgrano,
          ambas con seguridad las 24 horas, para que puedas retirar tu
          pedido de forma cómoda y segura. Coordinamos día y horario por
          WhatsApp antes de tu visita.
        </p>
        <h2>Envíos a todo el país</h2>
        <p>
          Trabajamos con comercios y revendedores de distintas provincias.
          Coordinamos el envío de tu pedido según tu destino y la modalidad
          elegida; los tiempos y costos de envío se confirman en cada
          consulta, ya que dependen del destino y del volumen del pedido.
        </p>
        <WhatsAppCta label="Consultar por mi envío" />
      </section>
      <aside class="category-aside">
        <h2>Antes de coordinar la entrega</h2>
        <ul>
          <li>Localidad o zona de destino.</li>
          <li>Cantidad de unidades del pedido.</li>
          <li>Si preferís retiro en Caballito, en Belgrano o envío.</li>
          <li>Forma de pago acordada.</li>
        </ul>
        <NuxtLink class="text-link" to="/mayorista/preguntas-frecuentes">
          Ver más preguntas frecuentes
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>
    </div>
  </div>
</template>

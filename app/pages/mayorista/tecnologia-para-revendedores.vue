<script setup lang="ts">
import { categories } from '~/data/catalog'

useSiteSeo({
  title: 'Tecnología mayorista para revendedores en Argentina',
  description:
    'Proveedor mayorista de tecnología para comercios, revendedores y tiendas en Argentina. Apple, Samsung, Xiaomi, POCO, Motorola y JBL. Consultá por WhatsApp.',
  path: '/mayorista/tecnologia-para-revendedores'
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Tecnología para revendedores', path: '/mayorista/tecnologia-para-revendedores' }
])
</script>

<template>
  <div class="shell content-section">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">Tecnología para revendedores</span>
    </nav>
    <header class="page-header">
      <p class="eyebrow">PARA COMERCIOS Y REVENDEDORES</p>
      <h1>
        Un proveedor mayorista
        <br>
        para tu negocio de tecnología.
      </h1>
      <p>
        Nexo Imports abastece a locales de celulares, revendedores en
        Instagram y Mercado Libre, técnicos y otros comercios de tecnología
        en toda Argentina.
      </p>
    </header>
    <div class="category-body">
      <section>
        <h2>¿Quiénes compran en Nexo Imports?</h2>
        <p>
          Trabajamos principalmente con negocios que necesitan un proveedor
          estable, no con compradores de un único equipo para uso personal.
          Entre nuestros clientes habituales están:
        </p>
        <ul>
          <li>Locales de celulares y tiendas de tecnología.</li>
          <li>Revendedores que venden por Instagram o Mercado Libre.</li>
          <li>Técnicos que también comercializan equipos.</li>
          <li>Otros comercios que necesitan un proveedor de tecnología.</li>
        </ul>
        <h2>Por qué elegir Nexo Imports</h2>
        <p>
          Trabajamos con Apple, Samsung, Xiaomi, POCO, Motorola y JBL, con
          atención directa y personalizada por WhatsApp. Contamos con
          oficinas de retiro en Caballito y Belgrano, con seguridad las 24
          horas, y realizamos envíos a todo el país.
        </p>
        <WhatsAppCta
          label="Quiero comprar como revendedor"
          message="Hola Nexo Imports, quiero comprar como revendedor. ¿Me pasás información sobre productos y condiciones mayoristas?"
        />
      </section>
      <aside class="category-aside">
        <h2>Marcas que trabajamos</h2>
        <ul>
          <li v-for="category in categories" :key="category.slug">
            <NuxtLink :to="`/mayorista/${category.slug}`">
              {{ category.name }}
            </NuxtLink>
          </li>
        </ul>
        <NuxtLink class="text-link" to="/mayorista#como-comprar">
          Cómo comprar en Nexo
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </aside>
    </div>
  </div>
</template>

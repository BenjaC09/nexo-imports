<script setup lang="ts">
import { articles } from '~/data/articles'

const article = articles.find(
  (item) => item.slug === 'como-comprar-iphone-mayorista-para-revender'
)!

useSiteSeo({
  title: article.title,
  description: article.excerpt,
  path: `/mayorista/blog/${article.slug}`
})
useBreadcrumbStructuredData([
  { name: 'Inicio', path: '/mayorista' },
  { name: 'Guías', path: '/mayorista/blog' },
  { name: article.title, path: `/mayorista/blog/${article.slug}` }
])
</script>

<template>
  <div class="shell content-section narrow-content legal-copy">
    <nav class="breadcrumb" aria-label="Migas de pan">
      <NuxtLink to="/mayorista">Inicio</NuxtLink>
      <span aria-hidden="true">/</span>
      <NuxtLink to="/mayorista/blog">Guías</NuxtLink>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ article.title }}</span>
    </nav>
    <header class="page-header">
      <h1>{{ article.title }}</h1>
    </header>
    <p class="article-meta">
      <span>{{ article.readingMinutes }} min de lectura</span>
    </p>

    <p>
      El iPhone es, casi siempre, el equipo que más rápido se vende en un
      local de celulares o en una cuenta de reventa por Instagram o Mercado
      Libre. Pero comprarlo mal —al proveedor equivocado, sin comparar
      condiciones, sin entender los tiempos— puede convertir un buen
      producto en un dolor de cabeza. Esta guía repasa lo que conviene tener
      resuelto antes de hacer tu primer pedido mayorista de iPhone.
    </p>

    <h2>1. Definí qué modelos tienen salida en tu zona</h2>
    <p>
      No hace falta empezar comprando el modelo más nuevo y más caro. Un
      error común de quien arranca a revender es inmovilizar capital en el
      equipo top de gama cuando su público real busca algo más accesible.
      Antes de pedir precio, pensá: ¿tu cliente típico busca el último
      modelo, o un equipo un año o dos más viejo a mejor precio? Las dos
      estrategias funcionan, pero conviene elegir una antes de comprar.
    </p>

    <h2>2. Consultá precio y disponibilidad actualizada, no un precio de lista</h2>
    <p>
      El precio del iPhone en dólares se mueve seguido, y en Argentina eso
      se traduce directo al precio en pesos. Cualquier proveedor serio te va
      a pedir que confirmes precio el mismo día que vas a pagar, no una
      semana antes. Desconfiá de quien te asegura un precio "fijo" por
      varias semanas sin condiciones.
    </p>

    <h2>3. Preguntá por la modalidad de entrega antes de pagar</h2>
    <p>
      Si el proveedor tiene un local u oficina física donde podés retirar el
      pedido, es una señal de seriedad: significa que existe una operación
      real detrás, no solo un perfil de redes sociales. Si estás en otra
      provincia, preguntá cómo se coordina el envío y quién se hace cargo
      del seguro del paquete.
    </p>

    <h2>4. Entendé las condiciones de garantía antes de comprar, no después</h2>
    <p>
      Las condiciones de garantía varían según el proveedor y el estado del
      equipo (nuevo, sellado, usado reacondicionado). Pedilas por escrito
      antes de pagar, no las des por sentado. Un proveedor mayorista serio
      te las va a explicar sin vueltas.
    </p>

    <h2>5. Empezá con un pedido chico para conocer al proveedor</h2>
    <p>
      Antes de comprometer un volumen grande, hacé un primer pedido más
      chico. Te sirve para evaluar tiempos de entrega, calidad de la
      comunicación y si el equipo llega tal cual se describió. Un buen
      proveedor no tiene problema en que empieces así.
    </p>

    <p>
      En Nexo Imports trabajamos con iPhone para comercios y revendedores en
      toda Argentina, con atención directa por WhatsApp y oficinas de
      retiro en Caballito y Belgrano.
    </p>
    <WhatsAppCta
      label="Consultar por iPhone mayorista"
      message="Hola Nexo Imports, leí la guía de compra mayorista y quiero consultar disponibilidad de iPhone."
    />
    <p>
      <NuxtLink to="/mayorista/iphone-mayorista">Ver más sobre iPhone mayorista ↗</NuxtLink>
    </p>
  </div>
</template>

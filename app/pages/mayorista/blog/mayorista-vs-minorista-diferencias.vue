<script setup lang="ts">
import { articles } from '~/data/articles'

const article = articles.find(
  (item) => item.slug === 'mayorista-vs-minorista-diferencias'
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
      "Mayorista" y "minorista" no son solo dos palabras distintas para
      comprar tecnología: son dos formas de comprar pensadas para objetivos
      distintos. Entender la diferencia te ayuda a saber qué esperar de cada
      una, y cuál te conviene según lo que estés armando.
    </p>

    <h2>La compra minorista está pensada para uso propio</h2>
    <p>
      Cuando comprás en una tienda minorista (una casa de electrónica, una
      tienda oficial de la marca), el precio incluye todos los costos de
      tener ese local abierto al público, con stock exhibido y atención
      personalizada para una sola unidad. Es la forma correcta de comprar
      si necesitás un equipo para vos.
    </p>

    <h2>La compra mayorista está pensada para revender</h2>
    <p>
      Comprar mayorista significa comprar en cantidad (no necesariamente
      cientos de unidades; en tecnología, un pedido mayorista puede empezar
      con pocas unidades) a un proveedor que trabaja con comercios y
      revendedores, no con el público final. El precio suele ser mejor
      porque no incluye la estructura de un local minorista, pero a cambio
      no vas a encontrar el mismo nivel de "vidriera": no hay precios
      publicados fijos, el stock se confirma por consulta, y las
      condiciones (pago, entrega, garantía) se acuerdan en cada pedido.
    </p>

    <h2>La diferencia no es solo de precio, es de relación</h2>
    <p>
      Un buen proveedor mayorista funciona más como un socio comercial de
      largo plazo que como una tienda: te conviene tener un canal de
      comunicación directo (WhatsApp, en la mayoría de los casos en
      Argentina), consultar antes de cada pedido y construir una relación
      donde ambas partes se conocen.
    </p>

    <h2>¿Cuál te conviene?</h2>
    <p>
      Si necesitás un equipo para uso personal, la compra minorista es más
      simple y directa. Si tu objetivo es revender —tenés un local, una
      cuenta de venta en redes o en Mercado Libre, o estás por empezar—
      comprar mayorista es lo que te va a dar margen para que el negocio
      sea rentable.
    </p>

    <p>
      Nexo Imports trabaja principalmente con comercios y revendedores en
      toda Argentina. También realizamos ventas minoristas según
      disponibilidad, aunque ese no es nuestro foco comercial.
    </p>
    <WhatsAppCta
      label="Consultar condiciones mayoristas"
      message="Hola Nexo Imports, leí la guía sobre mayorista vs. minorista y quiero consultar las condiciones para comprar como revendedor."
    />
    <p>
      <NuxtLink to="/mayorista/tecnologia-para-revendedores">
        Ver más sobre cómo trabajamos con revendedores ↗
      </NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/data/articles'

const article = articles.find(
  (item) => item.slug === 'como-elegir-proveedor-de-celulares'
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
      Elegir proveedor es, probablemente, la decisión que más impacto tiene
      en un negocio de reventa de tecnología. Un buen proveedor te permite
      crecer con previsibilidad; uno malo te genera pérdidas, reclamos de
      clientes y tiempo perdido. Estos son los puntos que conviene revisar
      antes de decidir con quién comprar.
    </p>

    <h2>Variedad de marcas, no solo de modelos</h2>
    <p>
      Un proveedor que trabaja con varias marcas (no solo iPhone, sino
      también Samsung, Xiaomi, POCO o Motorola) te permite armar una oferta
      más completa para distintos tipos de cliente, sin tener que buscar un
      segundo o tercer proveedor para cada marca.
    </p>

    <h2>Atención directa, no un bot ni un catálogo sin respuesta</h2>
    <p>
      En un rubro donde el precio cambia seguido, necesitás poder preguntar
      y recibir una respuesta de una persona real, el mismo día. Si al
      consultar disponibilidad tardan varios días en responder, es una
      señal de alerta sobre cómo van a responder ante un problema con un
      pedido.
    </p>

    <h2>Presencia física verificable</h2>
    <p>
      Un proveedor con oficina de retiro (aunque no publique la dirección
      exacta de entrada) te da más garantías que uno que solo existe en un
      perfil de redes. Preguntá si se puede retirar en persona y cómo se
      coordina.
    </p>

    <h2>Condiciones claras de pago y de garantía</h2>
    <p>
      Antes de pagar, tenés que saber: qué medios de pago acepta, si hay
      diferencia de precio según la forma de pago, y qué garantía cubre el
      producto. Si algo de esto no queda claro en la conversación previa,
      preguntalo directamente antes de transferir.
    </p>

    <h2>Envío a todo el país, si no estás en la misma ciudad</h2>
    <p>
      Si comprás desde otra provincia, confirmá cómo se envía el pedido,
      quién asume el riesgo del envío y qué pasa si algo llega dañado.
    </p>

    <h2>Empezá con un pedido de prueba</h2>
    <p>
      Igual que con cualquier proveedor nuevo, un primer pedido chico te da
      información real sobre cómo trabaja, sin comprometer un volumen
      grande desde el día uno.
    </p>

    <p>
      Nexo Imports trabaja con Apple, Samsung, Xiaomi, POCO, Motorola y JBL
      para comercios y revendedores en toda Argentina, con oficinas de
      retiro en Caballito y Belgrano y envíos a todo el país.
    </p>
    <WhatsAppCta
      label="Hablar con Nexo Imports"
      message="Hola Nexo Imports, leí la guía sobre cómo elegir proveedor y quiero conocer más sobre cómo trabajan."
    />
    <p>
      <NuxtLink to="/mayorista/tecnologia-para-revendedores">
        Ver más sobre cómo trabajamos con revendedores ↗
      </NuxtLink>
    </p>
  </div>
</template>

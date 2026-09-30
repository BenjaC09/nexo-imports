<script setup lang="ts">
import { productFamilies, buyingSteps, questions } from '~/data/home'
useSiteSeo({
  title: 'Mayorista de Celulares y Tecnología en Argentina',
  description: 'Tecnología para comercios y revendedores. Apple, Samsung, Xiaomi, POCO, Motorola y accesorios. Consultá condiciones mayoristas, con retiro en CABA y envíos a todo el país.',
  path: '/mayorista'
})
</script>

<template>
  <div>
    <section class="home-hero" aria-labelledby="hero-title">
      <div class="shell hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">PARA COMERCIOS Y REVENDEDORES</p>
          <h1 id="hero-title">Tu próximo pedido.<br><span>Tu próximo negocio.</span></h1>
          <p class="hero-description">Celulares y accesorios por mayor, con atención directa para abastecer tu negocio. Elegí una marca y consultá las condiciones de tu pedido.</p>
          <div class="button-row">
            <a href="#cotizar" class="button">Consultar mi pedido <span aria-hidden="true">↗</span></a>
            <a href="#productos" class="text-link">Explorar marcas <span aria-hidden="true">↓</span></a>
          </div>
          <p class="hero-note">Precio y disponibilidad confirmados antes de comprar.</p>
        </div>
        <DeviceShowcase />
      </div>
      <div class="shell trust-strip" aria-label="Opciones de compra y entrega">
        <span>Atención por WhatsApp</span><span>Retiro en Caballito y Belgrano</span><span>Envíos a todo el país</span>
      </div>
    </section>
    <section id="productos" class="content-section" aria-labelledby="products-title">
      <div class="shell">
        <div class="section-heading">
          <div><p class="eyebrow">MARCAS Y ACCESORIOS</p><h2 id="products-title">Elegí qué sumar a tu negocio.</h2></div>
          <p>Explorá cada familia.<br>Los modelos disponibles se confirman por WhatsApp.</p>
        </div>
        <div class="family-grid">
          <NuxtLink v-for="family in productFamilies" :key="family.slug" :to="`/mayorista/${family.slug}`" class="family-card">
            <div class="family-art">
              <div v-if="family.name === 'Samsung'" class="family-brand-art" aria-hidden="true"><span>SAMSUNG</span><strong>Galaxy</strong></div>
              <svg v-else-if="family.name === 'Accesorios'" width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M22 58V43a28 28 0 0 1 56 0v15" /><rect x="16" y="48" width="16" height="30" rx="7" /><rect x="68" y="48" width="16" height="30" rx="7" /><path d="M76 78v3a10 10 0 0 1-10 10H54" /></svg>
              <img v-else :src="family.image" :alt="family.imageAlt" width="400" height="400" loading="lazy">
            </div>
            <div class="family-copy"><h3>{{ family.name }}</h3><p>{{ family.tagline }}</p></div>
            <span class="family-explore">Ver marca <span aria-hidden="true">↗</span></span>
          </NuxtLink>
        </div>
      </div>
    </section>
    <section id="como-comprar" class="content-section process-section" aria-labelledby="steps-title">
      <div class="shell">
        <div class="section-heading"><div><p class="eyebrow">CÓMO COMPRAR</p><h2 id="steps-title">De tu consulta a tu pedido.</h2></div><p>Conocé precio, pago, garantía y entrega<br>antes de confirmar la compra.</p></div>
        <ol class="steps-grid"><li v-for="(step, index) in buyingSteps" :key="step.title"><span class="step-number">0{{ index + 1 }}</span><h3>{{ step.title }}</h3><p>{{ step.description }}</p></li></ol>
      </div>
    </section>
    <section id="cotizar" class="shell content-section">
      <QuoteRequest />
    </section>
    <section id="nosotros" class="shell service-section" aria-labelledby="about-title">
      <div><p class="eyebrow">SOMOS NEXO IMPORTS</p><h2 id="about-title">Un contacto directo.<br>En cada pedido.</h2></div>
      <div><p>Trabajamos con comercios y revendedores de toda Argentina. Podés coordinar el retiro en nuestras oficinas de Caballito o Belgrano, con seguridad las 24 horas, o consultar el envío a tu localidad.</p><NuxtLink to="/mayorista/tecnologia-para-revendedores" class="text-link">Guía para revendedores <span aria-hidden="true">↗</span></NuxtLink></div>
    </section>
    <section id="preguntas" class="content-section faq-section" aria-labelledby="faq-title">
      <div class="shell faq-grid">
        <div><p class="eyebrow">ANTES DE COMPRAR</p><h2 id="faq-title">Resolvemos tus dudas.</h2><p class="faq-intro">Condiciones claras para avanzar con tu pedido.</p></div>
        <div class="faq-list"><details v-for="question in questions" :key="question.title"><summary>{{ question.title }}<span aria-hidden="true">+</span></summary><p>{{ question.answer }}</p></details></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const settings = useSiteSettings()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div>
          <NuxtLink class="brand" to="/">
            <img
              class="brand-logo"
              src="/images/brand/nexo-logo-full.png"
              alt="Nexo Imports, mayorista de tecnología"
              width="1850"
              height="354"
            >
          </NuxtLink>
          <p>
            Tecnología mayorista y por unidad.
            <br>
            Atención personalizada y directa.
          </p>
        </div>
        <div>
          <p class="footer-label">MAYORISTA</p>
          <nav aria-label="Mayorista" class="footer-links">
            <NuxtLink to="/mayorista">Inicio mayorista</NuxtLink>
            <a href="/mayorista#productos">Productos</a>
            <NuxtLink to="/mayorista/tecnologia-para-revendedores">
              Para revendedores
            </NuxtLink>
            <a href="/mayorista#nosotros">Nosotros</a>
            <NuxtLink to="/mayorista/envios">Envíos</NuxtLink>
            <NuxtLink to="/mayorista/preguntas-frecuentes">
              Preguntas frecuentes
            </NuxtLink>
            <NuxtLink to="/mayorista/blog">Guías</NuxtLink>
          </nav>
        </div>
        <div>
          <p class="footer-label">MARCAS MAYORISTA</p>
          <nav aria-label="Marcas y productos mayorista" class="footer-links">
            <NuxtLink to="/mayorista/celulares-mayorista">Celulares mayorista</NuxtLink>
            <NuxtLink to="/mayorista/apple-mayorista">Apple mayorista</NuxtLink>
            <NuxtLink to="/mayorista/iphone-mayorista">iPhone mayorista</NuxtLink>
            <NuxtLink to="/mayorista/samsung-mayorista">Samsung mayorista</NuxtLink>
            <NuxtLink to="/mayorista/xiaomi-mayorista">Xiaomi mayorista</NuxtLink>
            <NuxtLink to="/mayorista/poco-mayorista">POCO mayorista</NuxtLink>
            <NuxtLink to="/mayorista/motorola-mayorista">Motorola mayorista</NuxtLink>
            <NuxtLink to="/mayorista/accesorios-mayorista">Accesorios</NuxtLink>
          </nav>
        </div>
        <div>
          <p class="footer-label">POR UNIDAD</p>
          <nav aria-label="Minorista" class="footer-links">
            <NuxtLink to="/minorista">Inicio minorista</NuxtLink>
            <NuxtLink to="/minorista/apple">Apple por unidad</NuxtLink>
            <NuxtLink to="/minorista/xiaomi">Xiaomi por unidad</NuxtLink>
            <NuxtLink to="/minorista/samsung">Samsung por unidad</NuxtLink>
            <NuxtLink to="/minorista/motorola">Motorola por unidad</NuxtLink>
          </nav>
          <p class="footer-label footer-label-spaced">CONECTEMOS</p>
          <nav aria-label="Contacto" class="footer-links">
            <NuxtLink to="/contacto">Contacto y WhatsApp ↗</NuxtLink>
            <a
              v-if="settings.instagramUrl"
              :href="settings.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
            <span>{{ settings.serviceArea }}</span>
          </nav>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© {{ year }} {{ settings.businessName }}</span>
        <p>
          Apple, Samsung, Xiaomi, POCO, Motorola, JBL y otras marcas
          mencionadas
          pertenecen a sus respectivos dueños. Nexo Imports es un comercio
          independiente, sin relación oficial con las marcas mencionadas.
        </p>
        <nav aria-label="Información del sitio">
          <NuxtLink to="/legales/privacidad">Privacidad</NuxtLink>
          <NuxtLink to="/legales/terminos">Condiciones</NuxtLink>
        </nav>
      </div>
    </div>
  </footer>
</template>

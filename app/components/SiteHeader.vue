<script setup lang="ts">
import { categories } from '~/data/catalog'

const settings = useSiteSettings()
const route = useRoute()
const isMenuOpen = ref(false)
const isSearchOpen = ref(false)
const isProductsOpen = ref(false)
const menuButton = useTemplateRef('menuButton')
const productsWrap = useTemplateRef('productsWrap')

const section = computed<'mayorista' | 'minorista' | 'home'>(() => {
  if (route.path.startsWith('/minorista')) return 'minorista'
  if (route.path.startsWith('/mayorista')) return 'mayorista'
  return 'home'
})

const logoTo = computed(() => {
  if (section.value === 'minorista') return '/minorista'
  if (section.value === 'mayorista') return '/mayorista'
  return '/'
})

const links = computed(() => {
  if (section.value === 'minorista') {
    return [
      { to: '/minorista/apple', label: 'Apple' },
      { to: '/minorista/xiaomi', label: 'Xiaomi' },
      { to: '/minorista/samsung', label: 'Samsung' },
      { to: '/minorista/motorola', label: 'Motorola' }
    ]
  }
  if (section.value === 'mayorista') {
    return [
      { to: '/mayorista/tecnologia-para-revendedores', label: 'Revendedores' },
      { to: '/mayorista#nosotros', label: 'Nosotros' },
      { to: '/mayorista#preguntas', label: 'Preguntas' }
    ]
  }
  return [
    { to: '/mayorista', label: 'Mayorista' },
    { to: '/minorista', label: 'Minorista' }
  ]
})

const productLinks = computed(() =>
  categories.map((category) => ({
    to: `/mayorista/${category.slug}`,
    label: category.name
  }))
)

const crossLink = computed(() => {
  if (section.value === 'mayorista') return { to: '/minorista', label: 'Compra por unidad' }
  if (section.value === 'minorista') return { to: '/mayorista', label: 'Compra mayorista' }
  return null
})

const searchSection = computed(() =>
  section.value === 'home' ? undefined : section.value
)

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
    isSearchOpen.value = false
    isProductsOpen.value = false
  }
)
const closeMenu = () => {
  isMenuOpen.value = false
  menuButton.value?.focus()
}

const onClickOutsideProducts = (event: MouseEvent) => {
  if (productsWrap.value && !productsWrap.value.contains(event.target as Node)) {
    isProductsOpen.value = false
  }
}
onMounted(() => document.addEventListener('click', onClickOutsideProducts))
onUnmounted(() => document.removeEventListener('click', onClickOutsideProducts))
</script>

<template>
  <header class="site-header" @keydown.esc="closeMenu">
    <div class="shell header-inner">
      <NuxtLink
        class="brand"
        :to="logoTo"
        :aria-label="`${settings.businessName}, inicio`"
      >
        <img
          class="brand-logo"
          src="/images/brand/nexo-logo-full.png"
          alt="Nexo Imports, mayorista de tecnología"
          width="1850"
          height="354"
        >
      </NuxtLink>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <div
          v-if="section === 'mayorista'"
          ref="productsWrap"
          class="nav-dropdown"
        >
          <button
            type="button"
            class="nav-dropdown-trigger"
            :aria-expanded="isProductsOpen"
            aria-controls="products-dropdown-panel"
            @click="isProductsOpen = !isProductsOpen"
          >
            Productos
            <span aria-hidden="true">{{ isProductsOpen ? '▲' : '▾' }}</span>
          </button>
          <div
            v-show="isProductsOpen"
            id="products-dropdown-panel"
            class="nav-dropdown-panel"
          >
            <NuxtLink
              v-for="item in productLinks"
              :key="item.to"
              :to="item.to"
              @click="isProductsOpen = false"
            >
              {{ item.label }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink v-if="crossLink" :to="crossLink.to" class="nav-cross-link">
          {{ crossLink.label }}
        </NuxtLink>
      </nav>
      <div class="header-actions">
        <button
          type="button"
          class="search-toggle"
          :aria-expanded="isSearchOpen"
          aria-controls="site-search-bar"
          :aria-label="isSearchOpen ? 'Cerrar buscador' : 'Buscar producto'"
          @click="isSearchOpen = !isSearchOpen"
        >
          <span aria-hidden="true">{{ isSearchOpen ? '×' : '⌕' }}</span>
        </button>
        <WhatsAppCta compact label="Consultar" />
        <button
          ref="menuButton"
          class="mobile-menu"
          type="button"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-navigation"
          :aria-label="isMenuOpen ? 'Cerrar menú' : 'Abrir menú'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span aria-hidden="true">{{ isMenuOpen ? '×' : '☰' }}</span>
        </button>
      </div>
    </div>
    <div v-if="isSearchOpen" id="site-search-bar" class="search-bar shell">
      <SiteSearch
        :section="searchSection"
        autofocus
        @navigate="isSearchOpen = false"
      />
    </div>
    <nav
      v-show="isMenuOpen"
      id="mobile-navigation"
      class="mobile-nav shell"
      aria-label="Navegación móvil"
    >
      <template v-if="section === 'mayorista'">
        <p class="mobile-nav-label">MARCAS</p>
        <NuxtLink
          v-for="item in productLinks"
          :key="item.to"
          :to="item.to"
          @click="isMenuOpen = false"
        >
          {{ item.label }}
          <span aria-hidden="true">↗</span>
        </NuxtLink>
        <p class="mobile-nav-label">MÁS</p>
      </template>
      <NuxtLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        @click="isMenuOpen = false"
      >
        {{ link.label }}
        <span aria-hidden="true">↗</span>
      </NuxtLink>
      <NuxtLink
        v-if="crossLink"
        :to="crossLink.to"
        @click="isMenuOpen = false"
      >
        {{ crossLink.label }}
        <span aria-hidden="true">↗</span>
      </NuxtLink>
      <NuxtLink to="/contacto" @click="isMenuOpen = false">
        Contacto
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
.search-toggle {
  display: inline-grid;
  place-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: transparent;
  font-size: 23px;
}
.search-bar {
  padding-block: 14px 18px;
  border-top: 1px solid var(--line);
}
.nav-dropdown {
  position: relative;
}
.nav-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 14px;
  color: #52605d;
  padding: 0;
}
.nav-dropdown-trigger span {
  font-size: 9px;
}
.nav-dropdown-panel {
  position: absolute;
  top: calc(100% + 18px);
  left: -14px;
  z-index: 80;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 4px 20px;
  padding: 16px 18px;
  min-width: 340px;
  background: #fff;
  border: 1px solid #e8ebe7;
  border-radius: 8px;
  box-shadow: 0 14px 30px #17252322;
}
.nav-dropdown-panel a {
  font-size: 14px;
  padding: 6px 4px;
  border-radius: 5px;
}
.nav-dropdown-panel a:hover {
  background: #f0f2ef;
}
.mobile-nav-label {
  font-size: 9px;
  letter-spacing: 0.12em;
  color: var(--muted);
  margin-top: 6px;
}
</style>

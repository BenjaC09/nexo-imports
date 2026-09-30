<script setup lang="ts">
const settings = useSiteSettings()
const route = useRoute()
const message = computed(() =>
  route.path.startsWith('/minorista')
    ? 'Hola, estoy buscando un producto de tecnología para uso personal. ¿Me pasás precio y disponibilidad?'
    : 'Hola Nexo Imports, quiero consultar disponibilidad y precio mayorista.'
)
const whatsappUrl = computed(
  () =>
    `https://wa.me/${settings.whatsappPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message.value)}`
)
</script>

<template>
  <a
    class="whatsapp-float"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Consultar por WhatsApp: abre WhatsApp en una pestaña nueva"
  >
    <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
      <path
        d="M12.004 2C6.481 2 2.003 6.478 2.003 12c0 1.75.457 3.395 1.257 4.822L2 22l5.335-1.234A9.94 9.94 0 0 0 12.004 22c5.523 0 10.001-4.478 10.001-10S17.527 2 12.004 2Zm0 18.2a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-3.166.732.702-3.183-.194-.307a8.19 8.19 0 0 1-1.264-4.325c0-4.53 3.687-8.2 8.387-8.2 4.7 0 8.387 3.67 8.387 8.2 0 4.53-3.687 8.4-8.387 8.4Z"
      />
      <path
        d="M16.573 14.02c-.257-.129-1.522-.75-1.758-.836-.236-.086-.408-.129-.58.13-.171.257-.664.836-.814 1.008-.15.172-.3.193-.557.064-.257-.129-1.086-.4-2.069-1.276-.765-.682-1.281-1.524-1.431-1.781-.15-.257-.016-.396.113-.524.116-.115.257-.3.386-.45.13-.15.172-.257.257-.429.086-.171.043-.322-.021-.45-.064-.129-.58-1.396-.794-1.911-.209-.502-.422-.434-.58-.442-.15-.007-.322-.008-.494-.008-.171 0-.45.064-.686.322-.236.257-.9.879-.9 2.144 0 1.264.921 2.487 1.05 2.659.129.171 1.814 2.77 4.395 3.884.614.265 1.093.423 1.467.541.617.196 1.178.169 1.622.102.495-.074 1.522-.622 1.736-1.223.214-.6.214-1.115.15-1.223-.064-.107-.235-.171-.492-.3Z"
      />
    </svg>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 60;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--blue);
  box-shadow: 0 10px 26px #17252333;
  transition:
    transform 0.2s cubic-bezier(0.2, 0.7, 0.2, 1),
    box-shadow 0.2s;
}
.whatsapp-float:hover,
.whatsapp-float:focus-visible {
  transform: scale(1.08);
  box-shadow: 0 14px 30px #17252345;
}
.whatsapp-float:active {
  transform: scale(0.97);
}
@media (max-width: 600px) {
  .whatsapp-float {
    right: 16px;
    bottom: 16px;
    width: 48px;
    height: 48px;
  }
  .whatsapp-float svg {
    width: 25px;
    height: 25px;
  }
}
</style>

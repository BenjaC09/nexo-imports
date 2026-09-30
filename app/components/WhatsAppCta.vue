<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    productName?: string
    label?: string
    compact?: boolean
    message?: string
  }>(),
  { productName: '', label: 'Consultar por WhatsApp', compact: false, message: '' }
)
const settings = useSiteSettings()
const route = useRoute()
const message = computed(() => {
  if (props.message) return props.message
  if (route.path.startsWith('/minorista')) {
    return `Hola Nexo Imports, quiero consultar precio, disponibilidad, garantía y envío para una compra por unidad${props.productName ? ` de ${props.productName}` : ''}.`
  }
  if (!route.path.startsWith('/mayorista')) return 'Hola Nexo Imports, quiero consultar por sus productos y condiciones de compra.'
  return props.productName
    ? `Hola Nexo Imports, quiero consultar disponibilidad y precio mayorista de ${props.productName}.`
    : 'Hola Nexo Imports, quiero consultar disponibilidad y precio mayorista.'
})
const whatsappUrl = computed(
  () =>
    `https://wa.me/${settings.whatsappPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message.value)}`
)
</script>

<template>
  <a
    class="button whatsapp-cta"
    :class="{ 'button-compact': compact }"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`${label}: abre WhatsApp en una pestaña nueva`"
  >
    <span>{{ label }}</span>
    <svg
      v-if="!compact"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12.004 2C6.481 2 2.003 6.478 2.003 12c0 1.75.457 3.395 1.257 4.822L2 22l5.335-1.234A9.94 9.94 0 0 0 12.004 22c5.523 0 10.001-4.478 10.001-10S17.527 2 12.004 2Zm0 18.2a8.16 8.16 0 0 1-4.166-1.14l-.299-.177-3.166.732.702-3.183-.194-.307a8.19 8.19 0 0 1-1.264-4.325c0-4.53 3.687-8.2 8.387-8.2 4.7 0 8.387 3.67 8.387 8.2 0 4.53-3.687 8.4-8.387 8.4Z"
      />
      <path
        d="M16.573 14.02c-.257-.129-1.522-.75-1.758-.836-.236-.086-.408-.129-.58.13-.171.257-.664.836-.814 1.008-.15.172-.3.193-.557.064-.257-.129-1.086-.4-2.069-1.276-.765-.682-1.281-1.524-1.431-1.781-.15-.257-.016-.396.113-.524.116-.115.257-.3.386-.45.13-.15.172-.257.257-.429.086-.171.043-.322-.021-.45-.064-.129-.58-1.396-.794-1.911-.209-.502-.422-.434-.58-.442-.15-.007-.322-.008-.494-.008-.171 0-.45.064-.686.322-.236.257-.9.879-.9 2.144 0 1.264.921 2.487 1.05 2.659.129.171 1.814 2.77 4.395 3.884.614.265 1.093.423 1.467.541.617.196 1.178.169 1.622.102.495-.074 1.522-.622 1.736-1.223.214-.6.214-1.115.15-1.223-.064-.107-.235-.171-.492-.3Z"
      />
    </svg>
    <span v-else aria-hidden="true">↗</span>
  </a>
</template>

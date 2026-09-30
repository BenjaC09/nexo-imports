<script setup lang="ts">
const props = withDefaults(defineProps<{ audience?: 'mayorista' | 'minorista'; brand?: string }>(), { audience: 'mayorista', brand: '' })
const brands = [...new Set(['Apple', 'Samsung', 'Xiaomi', 'POCO', 'Motorola', 'Accesorios', ...(props.brand ? [props.brand] : []), 'Otra marca'])]
const formId = useId()
const brandName = ref(props.brand)
const model = ref('')
const quantity = ref(props.audience === 'minorista' ? '1' : '')
const destination = ref('')
const settings = useSiteSettings()
const message = computed(() => [
  `Hola Nexo Imports, quiero consultar una compra ${props.audience === 'minorista' ? 'por unidad' : 'mayorista'}.`,
  brandName.value && `Marca: ${brandName.value}.`,
  model.value.trim() && `Modelo: ${model.value.trim()}.`,
  quantity.value && `Cantidad: ${quantity.value}.`,
  destination.value.trim() && `Localidad: ${destination.value.trim()}.`,
  '¿Me pasás precio, disponibilidad, forma de pago, garantía y opciones de entrega?'
].filter(Boolean).join('\n'))
const whatsappUrl = computed(() => `https://wa.me/${settings.whatsappPhone.replace(/\D/g, '')}?text=${encodeURIComponent(message.value)}`)
const continueToWhatsApp = () => { window.open(whatsappUrl.value, '_blank', 'noopener,noreferrer') }
</script>

<template>
  <div class="quote-panel" role="region" :aria-labelledby="`${formId}-title`">
    <div class="quote-copy">
      <p class="eyebrow">TU CONSULTA, MÁS SIMPLE</p>
      <h2 :id="`${formId}-title`">Contanos qué buscás.</h2>
      <p>Prepará tu consulta y continuá por WhatsApp. Te confirmamos precio, disponibilidad y condiciones antes de comprar.</p>
      <p class="quote-reassurance">Sin registro. Sin compromiso de compra.</p>
    </div>
    <form class="quote-form" @submit.prevent="continueToWhatsApp">
      <p class="form-hint">Todos los campos son opcionales.</p>
      <div class="quote-fields">
        <div class="quote-field"><label :for="`${formId}-brand`">Marca</label><select :id="`${formId}-brand`" v-model="brandName" name="marca"><option value="">Todavía no sé</option><option v-for="item in brands" :key="item">{{ item }}</option></select></div>
        <div class="quote-field"><label :for="`${formId}-model`">Modelo</label><input :id="`${formId}-model`" v-model="model" name="modelo" placeholder="Ej.: iPhone 17" maxlength="120"></div>
        <div class="quote-field"><label :for="`${formId}-quantity`">Cantidad</label><input :id="`${formId}-quantity`" v-model="quantity" name="cantidad" type="number" min="1" max="99999" step="1" placeholder="Ej.: 5"></div>
        <div class="quote-field"><label :for="`${formId}-destination`">Localidad</label><input :id="`${formId}-destination`" v-model="destination" name="localidad" autocomplete="address-level2" placeholder="Ej.: Córdoba" maxlength="120"></div>
      </div>
      <a class="button quote-submit" :href="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp: abre una pestaña nueva">Consultar por WhatsApp <span aria-hidden="true">↗</span></a>
      <p class="form-hint">Revisá y enviá el mensaje en WhatsApp. Esto no confirma un pedido.</p>
    </form>
  </div>
</template>

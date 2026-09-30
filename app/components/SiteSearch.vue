<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    section?: 'mayorista' | 'minorista'
    placeholder?: string
    autofocus?: boolean
  }>(),
  {
    section: undefined,
    placeholder: '¿Qué producto estás buscando?',
    autofocus: false
  }
)

const emit = defineEmits<{ navigate: [] }>()

const { search } = useSearchIndex()
const query = ref('')
const isOpen = ref(false)
const activeIndex = ref(-1)
const root = useTemplateRef('root')
const input = useTemplateRef('input')

onMounted(() => {
  if (props.autofocus) input.value?.focus()
})

const results = computed(() => search(query.value, props.section))

watch(query, () => {
  isOpen.value = query.value.trim().length > 0
  activeIndex.value = -1
})

const close = () => {
  isOpen.value = false
  activeIndex.value = -1
}

const goTo = (path: string) => {
  query.value = ''
  close()
  emit('navigate')
  navigateTo(path)
}

const onKeydown = (event: KeyboardEvent) => {
  if (!isOpen.value || results.value.length === 0) return
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    activeIndex.value = (activeIndex.value + 1) % results.value.length
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    activeIndex.value =
      (activeIndex.value - 1 + results.value.length) % results.value.length
  } else if (event.key === 'Enter' && activeIndex.value >= 0) {
    event.preventDefault()
    goTo(results.value[activeIndex.value]!.path)
  } else if (event.key === 'Escape') {
    close()
  }
}

const onClickOutside = (event: MouseEvent) => {
  if (root.value && !root.value.contains(event.target as Node)) close()
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="site-search">
    <label class="sr-only" for="site-search-input">Buscar producto</label>
    <div class="site-search-field">
      <span aria-hidden="true">🔎</span>
      <input
        id="site-search-input"
        ref="input"
        v-model="query"
        type="search"
        autocomplete="off"
        :placeholder="placeholder"
        @focus="isOpen = query.trim().length > 0"
        @keydown="onKeydown"
      >
    </div>
    <ul
      v-if="isOpen && results.length"
      class="site-search-results"
      role="listbox"
    >
      <li
        v-for="(result, index) in results"
        :key="result.path"
        role="option"
        :aria-selected="index === activeIndex"
        :class="{ 'is-active': index === activeIndex }"
      >
        <NuxtLink :to="result.path" @click="goTo(result.path)">
          <span class="result-label">{{ result.label }}</span>
          <span class="result-sublabel">{{ result.sublabel }}</span>
        </NuxtLink>
      </li>
    </ul>
    <p
      v-else-if="isOpen && query.trim().length > 0"
      class="site-search-empty"
    >
      Sin resultados para "{{ query }}". Consultanos por WhatsApp.
    </p>
  </div>
</template>

<style scoped>
.site-search {
  position: relative;
  width: 100%;
  max-width: 320px;
}
.site-search-field {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  background: #f0f2ef;
  border: 1px solid #e8ebe7;
  border-radius: 999px;
}
.site-search-field span {
  font-size: 13px;
}
.site-search-field input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 13px;
  outline: none;
  color: inherit;
  font-family: inherit;
}
.site-search-field input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
.site-search-results {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 80;
  background: #fff;
  border: 1px solid #e8ebe7;
  border-radius: 8px;
  box-shadow: 0 14px 30px #17252322;
  max-height: 320px;
  overflow-y: auto;
  padding: 6px;
}
.site-search-results li a {
  display: flex;
  flex-direction: column;
  padding: 9px 10px;
  border-radius: 6px;
}
.site-search-results li.is-active a,
.site-search-results li a:hover,
.site-search-results li a:focus-visible {
  background: #f0f2ef;
}
.result-label {
  font-size: 13px;
  font-weight: 550;
}
.result-sublabel {
  font-size: 10px;
  color: var(--muted);
  margin-top: 2px;
}
.site-search-empty {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  right: 0;
  z-index: 80;
  background: #fff;
  border: 1px solid #e8ebe7;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 12px;
  color: var(--muted);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
@media (max-width: 850px) {
  .site-search {
    max-width: none;
  }
}
</style>

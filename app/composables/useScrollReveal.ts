import type { ShallowRef } from 'vue'

/** Content is visible in SSR; animations are a progressive enhancement. */
export const useScrollReveal = (
  root: Readonly<ShallowRef<HTMLElement | null>>
) => {
  let observer: IntersectionObserver | undefined
  let preference: MediaQueryList | undefined
  const revealAll = () => {
    observer?.disconnect()
    root.value
      ?.querySelectorAll('[data-reveal]')
      .forEach((element) => element.classList.remove('reveal-pending'))
  }
  onMounted(() => {
    preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (preference.matches || !('IntersectionObserver' in window)) return
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    root.value?.querySelectorAll('[data-reveal]').forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add('reveal-pending')
        observer?.observe(element)
      }
    })
    preference.addEventListener('change', revealAll)
  })
  onBeforeUnmount(() => {
    observer?.disconnect()
    preference?.removeEventListener('change', revealAll)
  })
}

const STORAGE_KEY = 'nexo_audience'

export type Audience = 'mayorista' | 'minorista'

/**
 * Guarda y lee la preferencia de navegación (mayorista/minorista) del
 * visitante. Es solo una conveniencia de UX en el cliente: nunca decide
 * qué HTML se renderiza en el servidor ni bloquea el acceso directo a
 * /mayorista o /minorista, que siempre existen y son rastreables.
 */
export const useAudiencePreference = () => {
  const getPreference = (): Audience | null => {
    if (import.meta.server) return null
    try {
      const value = window.localStorage.getItem(STORAGE_KEY)
      return value === 'mayorista' || value === 'minorista' ? value : null
    } catch {
      return null
    }
  }

  const setPreference = (audience: Audience) => {
    if (import.meta.server) return
    try {
      window.localStorage.setItem(STORAGE_KEY, audience)
    } catch {
      /* localStorage no disponible: la navegación sigue funcionando igual */
    }
  }

  return { getPreference, setPreference }
}

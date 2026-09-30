import { categories, products, productPath } from '~/data/catalog'
import { minoristaBrands } from '~/data/minorista'
import { articles } from '~/data/articles'

export interface SearchEntry {
  label: string
  sublabel: string
  path: string
  section: 'mayorista' | 'minorista' | 'guia'
}

const normalize = (value: string) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

let index: SearchEntry[] | null = null

const buildIndex = (): SearchEntry[] => {
  const mayoristaCategoryEntries: SearchEntry[] = categories.map((category) => ({
    label: category.name,
    sublabel: 'Mayorista',
    path: `/mayorista/${category.slug}`,
    section: 'mayorista'
  }))

  const mayoristaProductEntries: SearchEntry[] = products.map((product) => ({
    label: product.name,
    sublabel: `Mayorista · ${product.brand}`,
    path: productPath(product),
    section: 'mayorista'
  }))

  const minoristaEntries: SearchEntry[] = minoristaBrands.map((brand) => ({
    label: brand.name,
    sublabel: 'Por unidad',
    path: `/minorista/${brand.slug}`,
    section: 'minorista'
  }))

  const guiaEntries: SearchEntry[] = [
    {
      label: 'Tecnología para revendedores',
      sublabel: 'Guía para mayoristas',
      path: '/mayorista/tecnologia-para-revendedores',
      section: 'guia'
    },
    ...articles.map((article) => ({
      label: article.title,
      sublabel: 'Guía',
      path: `/mayorista/blog/${article.slug}`,
      section: 'guia' as const
    }))
  ]

  return [
    ...mayoristaCategoryEntries,
    ...minoristaEntries,
    ...mayoristaProductEntries,
    ...guiaEntries
  ]
}

/**
 * Busca dentro del catálogo (categorías mayoristas, marcas minoristas,
 * productos y guías). Prioriza resultados de la sección actual, pero
 * también muestra coincidencias de la otra sección para no esconder
 * información que el visitante podría necesitar.
 */
export const useSearchIndex = () => {
  if (!index) index = buildIndex()

  const search = (
    query: string,
    preferredSection?: 'mayorista' | 'minorista',
    limit = 6
  ): SearchEntry[] => {
    const normalizedQuery = normalize(query.trim())
    if (!normalizedQuery) return []

    const matches = index!.filter((entry) =>
      normalize(entry.label).includes(normalizedQuery)
    )

    if (!preferredSection) return matches.slice(0, limit)

    const sorted = [...matches].sort((a, b) => {
      const aScore = a.section === preferredSection ? 0 : 1
      const bScore = b.section === preferredSection ? 0 : 1
      return aScore - bScore
    })

    return sorted.slice(0, limit)
  }

  return { search }
}

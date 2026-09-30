import { describe, expect, it } from 'vitest'
import { allPublicPaths, categories, getProduct, products } from '../app/data/catalog'

describe('catálogo estático', () => {
  it('incluye una ruta prerenderizada para cada categoría y producto', () => {
    expect(allPublicPaths).toEqual(expect.arrayContaining(categories.map(({ slug }) => `/mayorista/${slug}`)))
    expect(allPublicPaths).toEqual(
      expect.arrayContaining(products.map(({ category, slug }) => `/mayorista/${category}/${slug}`))
    )
  })

  it('resuelve productos únicamente dentro de su categoría', () => {
    expect(getProduct('iphone-mayorista', 'iphone-17-pro')?.name).toBe('iPhone 17 Pro')
    expect(getProduct('accesorios-mayorista', 'iphone-17-pro')).toBeUndefined()
  })
})

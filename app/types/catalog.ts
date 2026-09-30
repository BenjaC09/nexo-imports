export type ProductAvailability = 'InStock' | 'OutOfStock' | 'PreOrder'

export interface Category {
  slug: string
  name: string
  navigationLabel: string
  title: string
  description: string
}

export type ProductBrand =
  | 'Apple'
  | 'Samsung'
  | 'Xiaomi'
  | 'POCO'
  | 'Motorola'
  | 'JBL'
  | 'Otras marcas'

export interface Product {
  slug: string
  category: string
  name: string
  shortDescription: string
  description: string
  image: string
  imageAlt: string
  brand: ProductBrand
  /** Cargar sólo cuando el precio publicado sea real y vigente. */
  priceArs?: number
  /** Cargar junto con priceArs para habilitar el schema Product. */
  availability?: ProductAvailability
  /** Impide generar datos estructurados con imágenes de ejemplo. */
  hasProductImage?: boolean
}

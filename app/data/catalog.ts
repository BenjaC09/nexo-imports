import type { Category, Product } from '~/types/catalog'

export const categories: Category[] = [
  {
    slug: 'iphone-mayorista',
    name: 'iPhone',
    navigationLabel: 'iPhone',
    title: 'Mayorista de iPhone en Argentina',
    description:
      'iPhone para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'samsung-mayorista',
    name: 'Samsung',
    navigationLabel: 'Samsung',
    title: 'Mayorista de Samsung en Argentina',
    description:
      'Samsung Galaxy para tu negocio: gama S, A y Z. Consultá disponibilidad y precio mayorista por WhatsApp.'
  },
  {
    slug: 'xiaomi-mayorista',
    name: 'Xiaomi',
    navigationLabel: 'Xiaomi',
    title: 'Mayorista de Xiaomi en Argentina',
    description:
      'Xiaomi para revendedores y comercios de tecnología. Consultá modelos y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'poco-mayorista',
    name: 'POCO',
    navigationLabel: 'POCO',
    title: 'Mayorista de POCO en Argentina',
    description:
      'POCO para tu local o tu perfil de reventa. Consultá disponibilidad y precio mayorista por WhatsApp.'
  },
  {
    slug: 'motorola-mayorista',
    name: 'Motorola',
    navigationLabel: 'Motorola',
    title: 'Mayorista de Motorola en Argentina',
    description:
      'Motorola para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'accesorios-mayorista',
    name: 'Accesorios',
    navigationLabel: 'Accesorios',
    title: 'Accesorios de tecnología para comercios',
    description:
      'Accesorios y otros productos de tecnología para sumar margen a tu negocio. Consultá por WhatsApp.'
  },
  {
    slug: 'macbook-mayorista',
    name: 'MacBook',
    navigationLabel: 'MacBook',
    title: 'Mayorista de MacBook en Argentina',
    description:
      'MacBook para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'ipad-mayorista',
    name: 'iPad',
    navigationLabel: 'iPad',
    title: 'Mayorista de iPad en Argentina',
    description:
      'iPad para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'apple-watch-mayorista',
    name: 'Apple Watch',
    navigationLabel: 'Apple Watch',
    title: 'Mayorista de Apple Watch en Argentina',
    description:
      'Apple Watch para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'airpods-mayorista',
    name: 'AirPods',
    navigationLabel: 'AirPods',
    title: 'Mayorista de AirPods en Argentina',
    description:
      'AirPods para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  },
  {
    slug: 'jbl-mayorista',
    name: 'JBL',
    navigationLabel: 'JBL',
    title: 'Mayorista de JBL en Argentina',
    description:
      'Parlantes y audio JBL para comercios y revendedores. Consultá modelos, disponibilidad y condiciones mayoristas por WhatsApp.'
  }
]

/**
 * Datos de muestra: reemplazarlos por información comercial real antes de publicar.
 * Sin precios publicados ni stock inventado. Los productos sin precio, disponibilidad
 * e imagen real no emiten schema Product.
 */
export const products: Product[] = [
  {
    slug: 'iphone-17-pro',
    category: 'iphone-mayorista',
    name: 'iPhone 17 Pro',
    shortDescription:
      'El iPhone Pro más reciente de Apple, con sistema de cámaras avanzado. Consultá modelos, colores y condiciones mayoristas.',
    description:
      'El iPhone 17 Pro incorpora el chip más reciente de Apple, un sistema de cámaras profesional y un diseño en aluminio y vidrio de alta resistencia. Es uno de los modelos más solicitados por locales de celulares y revendedores. Consultanos colores, capacidades disponibles y condiciones mayoristas por WhatsApp.',
    image: '/images/products/iphone.png',
    imageAlt: 'iPhone en tres colores, vista trasera con el sistema de cámaras',
    brand: 'Apple',
    hasProductImage: true
  },
  {
    slug: 'galaxy-s25-ultra',
    category: 'samsung-mayorista',
    name: 'Samsung Galaxy S25 Ultra',
    shortDescription:
      'El buque insignia de Samsung, con S Pen integrado y cámara de alta resolución. Consultá modelos y condiciones mayoristas.',
    description:
      'El Galaxy S25 Ultra es el modelo tope de gama de Samsung, con S Pen integrado, pantalla de gran tamaño y un sistema de cámaras orientado a fotografía. Es un producto de alta rotación entre revendedores que buscan ofrecer equipos premium. Consultanos capacidades, colores disponibles y condiciones mayoristas por WhatsApp.',
    image:
      'https://images.pexels.com/photos/16149966/pexels-photo-16149966.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Samsung Galaxy, fotografía real de producto sobre fondo blanco neutro',
    brand: 'Samsung',
    hasProductImage: true
  },
  {
    slug: 'xiaomi-redmi-note',
    category: 'xiaomi-mayorista',
    name: 'Xiaomi Redmi Note',
    shortDescription:
      'La línea Redmi Note de Xiaomi, con buena relación entre prestaciones y precio. Consultá el modelo disponible.',
    description:
      'La serie Redmi Note es una de las líneas más vendidas de Xiaomi, reconocida por su buena relación entre prestaciones y precio. Es un producto de alta rotación para locales y revendedores. Consultanos el modelo, la capacidad disponible y las condiciones mayoristas por WhatsApp.',
    image: '/images/products/xiaomi.png',
    imageAlt: 'Xiaomi Redmi Note, vista frontal y trasera',
    brand: 'Xiaomi',
    hasProductImage: true
  },
  {
    slug: 'poco-x-series',
    category: 'poco-mayorista',
    name: 'POCO X Series',
    shortDescription:
      'La línea X de POCO, orientada a buen rendimiento a precio competitivo. Consultá el modelo disponible.',
    description:
      'La serie POCO X se destaca por ofrecer buen rendimiento a un precio competitivo, una combinación que suele funcionar bien en locales y ventas online. Consultanos el modelo disponible, capacidad y condiciones mayoristas por WhatsApp.',
    image:
      'https://images.unsplash.com/photo-1764155044420-0a4134c4d858?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'POCO, fotografía real de producto, primer plano',
    brand: 'POCO',
    hasProductImage: true
  },
  {
    slug: 'moto-g-series',
    category: 'motorola-mayorista',
    name: 'Moto G',
    shortDescription:
      'La línea Moto G de Motorola, con buena trayectoria y aceptación. Consultá el modelo disponible.',
    description:
      'La serie Moto G es una de las líneas más reconocidas de Motorola, con buena trayectoria y aceptación entre distintos perfiles de cliente. Consultanos el modelo disponible, capacidad y condiciones mayoristas por WhatsApp.',
    image: '/images/products/motorola.png',
    imageAlt: 'Moto G, vista frontal y trasera',
    brand: 'Motorola',
    hasProductImage: true
  },
  {
    slug: 'funda-y-vidrio-templado',
    category: 'accesorios-mayorista',
    name: 'Fundas y vidrios templados',
    shortDescription:
      'Ficha de catálogo para completar con modelos compatibles, marcas y colores.',
    description:
      'Agregá las compatibilidades e imágenes reales antes de publicar esta ficha.',
    image: '/images/products/accesorios.png',
    imageAlt: 'Espacio reservado para foto de accesorios',
    brand: 'Otras marcas'
  },
  {
    slug: 'macbook-air',
    category: 'macbook-mayorista',
    name: 'MacBook Air',
    shortDescription:
      'Ficha de catálogo para completar con modelo, capacidad y condiciones mayoristas reales.',
    description:
      'Agregá especificaciones reales, imágenes propias y disponibilidad antes de publicar esta ficha.',
    image: '/images/product-placeholder.svg',
    imageAlt: 'Espacio reservado para foto propia de MacBook Air',
    brand: 'Apple'
  },
  {
    slug: 'ipad',
    category: 'ipad-mayorista',
    name: 'iPad',
    shortDescription:
      'Ficha de catálogo para completar con modelo, capacidad y condiciones mayoristas reales.',
    description:
      'Agregá especificaciones reales, imágenes propias y disponibilidad antes de publicar esta ficha.',
    image: '/images/product-placeholder.svg',
    imageAlt: 'Espacio reservado para foto propia de iPad',
    brand: 'Apple'
  },
  {
    slug: 'apple-watch-series',
    category: 'apple-watch-mayorista',
    name: 'Apple Watch',
    shortDescription:
      'Ficha de catálogo para completar con modelo, capacidad y condiciones mayoristas reales.',
    description:
      'Agregá especificaciones reales, imágenes propias y disponibilidad antes de publicar esta ficha.',
    image: '/images/product-placeholder.svg',
    imageAlt: 'Espacio reservado para foto propia de Apple Watch',
    brand: 'Apple'
  },
  {
    slug: 'airpods',
    category: 'airpods-mayorista',
    name: 'AirPods',
    shortDescription:
      'Ficha de catálogo para completar con modelo y condiciones mayoristas reales.',
    description:
      'Agregá especificaciones reales, imágenes propias y disponibilidad antes de publicar esta ficha.',
    image: '/images/product-placeholder.svg',
    imageAlt: 'Espacio reservado para foto propia de AirPods',
    brand: 'Apple'
  },
  {
    slug: 'jbl-parlante',
    category: 'jbl-mayorista',
    name: 'Parlante JBL',
    shortDescription:
      'Ficha de catálogo para completar con modelo y condiciones mayoristas reales.',
    description:
      'Agregá especificaciones reales, imágenes propias y disponibilidad antes de publicar esta ficha.',
    image: '/images/product-placeholder.svg',
    imageAlt: 'Espacio reservado para foto propia de parlante JBL',
    brand: 'JBL'
  }
]

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug)

export const getProduct = (category: string, slug: string) =>
  products.find(
    (product) => product.category === category && product.slug === slug
  )

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category === category)

export const productPath = (product: Pick<Product, 'category' | 'slug'>) =>
  `/mayorista/${product.category}/${product.slug}`

const minoristaBrandSlugs = ['apple', 'xiaomi', 'samsung', 'motorola']

export const allPublicPaths = [
  '/',
  '/contacto',
  '/mayorista',
  '/mayorista/envios',
  '/mayorista/preguntas-frecuentes',
  '/mayorista/tecnologia-para-revendedores',
  '/mayorista/apple-mayorista',
  '/mayorista/celulares-mayorista',
  '/mayorista/blog',
  '/mayorista/blog/como-comprar-iphone-mayorista-para-revender',
  '/mayorista/blog/como-elegir-proveedor-de-celulares',
  '/mayorista/blog/mayorista-vs-minorista-diferencias',
  '/minorista',
  ...minoristaBrandSlugs.map((slug) => `/minorista/${slug}`),
  '/legales/privacidad',
  '/legales/terminos',
  ...categories.map((category) => `/mayorista/${category.slug}`),
  ...products.map(productPath)
]

/** Sample pages stay available for editing, but are not advertised to search engines. */
export const indexablePaths = [
  '/',
  '/contacto',
  '/mayorista',
  '/mayorista/envios',
  '/mayorista/preguntas-frecuentes',
  '/mayorista/tecnologia-para-revendedores',
  '/mayorista/apple-mayorista',
  '/mayorista/celulares-mayorista',
  '/mayorista/blog',
  '/mayorista/blog/como-comprar-iphone-mayorista-para-revender',
  '/mayorista/blog/como-elegir-proveedor-de-celulares',
  '/mayorista/blog/mayorista-vs-minorista-diferencias',
  '/minorista',
  ...minoristaBrandSlugs.map((slug) => `/minorista/${slug}`),
  ...categories.map((category) => `/mayorista/${category.slug}`)
]

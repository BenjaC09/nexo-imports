import { siteDefaults } from '~/data/site'
import type { Product } from '~/types/catalog'

const addJsonLd = (key: string, data: Record<string, unknown>) => {
  useHead({
    script: [
      {
        key,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data).replace(/</g, '\\u003c')
      }
    ]
  })
}

export const useBusinessStructuredData = () => {
  const settings = useSiteSettings()
  if (!settings.hasSiteUrl) return
  const organizationId = `${settings.siteUrl}/#organization`
  addJsonLd('business-schema', {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ElectronicsStore'],
        '@id': organizationId,
        name: settings.businessName,
        url: settings.siteUrl,
        description: siteDefaults.defaultDescription,
        logo: {
          '@type': 'ImageObject',
          url: `${settings.siteUrl}/images/brand/icon-512.png`,
          width: 512,
          height: 512
        },
        image: `${settings.siteUrl}${siteDefaults.defaultSocialImage}`,
        telephone: `+${settings.whatsappPhone.replace(/\D/g, '')}`,
        areaServed: 'Argentina',
        ...(settings.instagramUrl ? { sameAs: [settings.instagramUrl] } : {}),
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: `+${settings.whatsappPhone.replace(/\D/g, '')}`,
          contactType: 'sales',
          availableLanguage: 'es',
          areaServed: 'AR'
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${settings.siteUrl}/#website`,
        name: settings.businessName,
        url: `${settings.siteUrl}/`,
        inLanguage: 'es-AR',
        publisher: { '@id': organizationId }
      }
    ]
  })
}

export const useBreadcrumbStructuredData = (
  items: { name: string; path: string }[]
) => {
  const settings = useSiteSettings()
  if (!settings.hasSiteUrl) return
  addJsonLd('breadcrumb-schema', {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${settings.siteUrl}${item.path}`
    }))
  })
}

export const useFaqStructuredData = (
  items: { title: string; answer: string }[]
) => {
  const settings = useSiteSettings()
  if (!settings.hasSiteUrl) return
  addJsonLd('faq-schema', {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  })
}

export const useItemListStructuredData = (
  items: { name: string; path: string }[]
) => {
  const settings = useSiteSettings()
  if (!settings.hasSiteUrl) return
  addJsonLd('itemlist-schema', {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${settings.siteUrl}${item.path}`
    }))
  })
}

export const useProductStructuredData = (product: Product) => {
  const settings = useSiteSettings()
  if (
    !settings.hasSiteUrl ||
    !product.priceArs ||
    !product.availability ||
    !product.hasProductImage
  )
    return
  addJsonLd('product-schema', {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: [`${settings.siteUrl}${product.image}`],
    brand: { '@type': 'Brand', name: product.brand },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'ARS',
      price: product.priceArs,
      availability: `https://schema.org/${product.availability}`,
      url: `${settings.siteUrl}/${product.category}/${product.slug}`
    }
  })
}

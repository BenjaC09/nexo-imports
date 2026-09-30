import { siteDefaults } from '~/data/site'

interface SiteSeoInput {
  title: string
  description: string
  path?: string
  image?: string
  noindex?: boolean
}

export const useSiteSeo = (input: SiteSeoInput) => {
  const settings = useSiteSettings()
  const canonicalUrl = `${settings.siteUrl}${input.path || ''}`
  const imageUrl = input.image?.startsWith('http')
    ? input.image
    : `${settings.siteUrl}${input.image || siteDefaults.defaultSocialImage}`

  useSeoMeta({
    title: input.title,
    description: input.description,
    robots:
      input.noindex || !settings.indexable
        ? 'noindex, follow'
        : 'index, follow, max-image-preview:large',
    ogTitle: `${input.title} | ${settings.businessName}`,
    ogSiteName: settings.businessName,
    ogDescription: input.description,
    ogType: 'website',
    ogUrl: settings.hasSiteUrl ? canonicalUrl : undefined,
    ogImage: settings.hasSiteUrl ? imageUrl : undefined,
    ogImageWidth: settings.hasSiteUrl && !input.image ? 1200 : undefined,
    ogImageHeight: settings.hasSiteUrl && !input.image ? 630 : undefined,
    ogImageAlt: settings.hasSiteUrl
      ? `${settings.businessName}: ${input.title}`
      : undefined,
    ogLocale: siteDefaults.locale,
    twitterCard: 'summary_large_image',
    twitterTitle: `${input.title} | ${settings.businessName}`,
    twitterDescription: input.description,
    twitterImage: settings.hasSiteUrl ? imageUrl : undefined
  })

  useHead({
    link: settings.hasSiteUrl ? [{ rel: 'canonical', href: canonicalUrl }] : []
  })
}

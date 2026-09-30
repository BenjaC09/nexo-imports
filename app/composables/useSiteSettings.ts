import { siteDefaults } from '~/data/site'

export const useSiteSettings = () => {
  const config = useRuntimeConfig().public

  return {
    businessName: config.businessName || siteDefaults.businessName,
    siteUrl: String(config.siteUrl).replace(/\/$/, ''),
    hasSiteUrl: Boolean(config.hasSiteUrl),
    indexable: Boolean(config.indexable),
    whatsappPhone: String(config.whatsappPhone),
    instagramUrl:
      /^https:\/\/(www\.)?instagram\.com\//.test(String(config.instagramUrl)) &&
      !String(config.instagramUrl).includes('tu-cuenta')
        ? String(config.instagramUrl)
        : '',
    serviceArea: config.serviceArea || siteDefaults.serviceArea
  }
}

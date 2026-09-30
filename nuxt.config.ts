import { allPublicPaths, indexablePaths } from './app/data/catalog'

const isProduction = process.env.NODE_ENV === 'production'
const configuredUrl = process.env.NUXT_PUBLIC_SITE_URL?.trim().replace(
  /\/+$/,
  ''
)
const hasSiteUrl = Boolean(
  configuredUrl &&
  /^https:\/\/[^/?#]+$/.test(configuredUrl) &&
  !configuredUrl.includes('tu-dominio')
)
const siteUrl = hasSiteUrl ? configuredUrl! : 'http://localhost:3000'
const indexable =
  isProduction && hasSiteUrl && process.env.NUXT_PUBLIC_INDEXABLE !== 'false'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-05',
  devtools: { enabled: false },
  css: ['~/assets/styles/main.css', '~/assets/styles/redesign.css'],
  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  runtimeConfig: {
    public: {
      siteUrl,
      hasSiteUrl,
      indexable,
      businessName: process.env.NUXT_PUBLIC_BUSINESS_NAME || 'Nexo Imports',
      whatsappPhone: process.env.NUXT_PUBLIC_WHATSAPP_PHONE || '5491143993121',
      instagramUrl: process.env.NUXT_PUBLIC_INSTAGRAM_URL || '',
      serviceArea: process.env.NUXT_PUBLIC_SERVICE_AREA || 'Buenos Aires, Argentina'
    }
  },
  site: {
    url: siteUrl,
    indexable,
    name: process.env.NUXT_PUBLIC_BUSINESS_NAME || 'Nexo Imports',
    defaultLocale: 'es-AR'
  },
  sitemap: {
    includeAppSources: false,
    urls: indexable ? indexablePaths : [],
    exclude: indexable
      ? allPublicPaths.filter((path) => !indexablePaths.includes(path))
      : ['/**']
  },
  robots: indexable
    ? { groups: [{ userAgent: '*', allow: '/' }] }
    : { groups: [{ userAgent: '*', disallow: '/' }] },
  nitro: {
    preset: 'static',
    prerender: {
      routes: [...allPublicPaths, '/robots.txt', '/sitemap.xml']
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})

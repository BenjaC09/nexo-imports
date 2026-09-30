import assert from 'node:assert/strict'
import process from 'node:process'
import { URL } from 'node:url'
import console from 'node:console'
import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

const root = '.output/public'
const production = process.argv.includes('--production')
const routes = [
  '/',
  '/contacto',
  '/mayorista/envios',
  '/mayorista/preguntas-frecuentes',
  '/mayorista/tecnologia-para-revendedores',
  '/mayorista/iphone-mayorista',
  '/mayorista/samsung-mayorista',
  '/mayorista/xiaomi-mayorista',
  '/mayorista/poco-mayorista',
  '/mayorista/motorola-mayorista',
  '/mayorista/accesorios-mayorista',
  '/mayorista/macbook-mayorista',
  '/mayorista/ipad-mayorista',
  '/mayorista/apple-watch-mayorista',
  '/mayorista/airpods-mayorista',
  '/mayorista/jbl-mayorista'
]
const readRoute = (path) => readFile(join(root, path, 'index.html'), 'utf8')
const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8')
const robots = await readFile(join(root, 'robots.txt'), 'utf8')
const titles = new Set()
const descriptions = new Set()
for (const route of routes) {
  const html = await readRoute(route)
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: one H1`)
  assert.match(html, /<html[^>]*lang="es-AR"/, `${route}: language`)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert.ok(title?.includes('Nexo Imports'), `${route}: title`)
  assert.ok(!titles.has(title), `${route}: unique title`)
  titles.add(title)
  const description = html.match(
    /<meta name="description" content="([^"]+)"/
  )?.[1]
  assert.ok(description?.length > 70, `${route}: useful description`)
  assert.ok(!descriptions.has(description), `${route}: unique description`)
  descriptions.add(description)
  assert.match(
    html,
    /https:\/\/wa.me\/5491143993121\?text=/,
    `${route}: correct WhatsApp`
  )
  assert.doesNotMatch(
    html,
    /Ficha de catálogo|Fichas de ejemplo|Completá aquí|tu-cuenta/,
    `${route}: no sample copy`
  )
  const metaRobots = html.match(/<meta name="robots" content="([^"]+)"/)?.[1]
  assert.ok(metaRobots, `${route}: robots meta`)
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]
  if (production) {
    assert.ok(!metaRobots.includes('noindex'), `${route}: indexable`)
    assert.ok(canonical?.startsWith('https://'), `${route}: canonical`)
    assert.equal(new URL(canonical).pathname, route, `${route}: canonical path`)
    assert.ok(
      sitemap.includes(`<loc>${canonical}</loc>`),
      `${route}: sitemap entry`
    )
    assert.match(
      html,
      /property="og:image" content="https:[^"]+og-default.png"/,
      `${route}: social preview`
    )
    const schemas = [
      ...html.matchAll(
        /<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs
      )
    ].map((match) => JSON.parse(match[1]))
    assert.ok(schemas.length, `${route}: structured data`)
    if (route === '/')
      assert.ok(
        schemas.some((schema) =>
          schema['@graph']?.some((item) =>
            Array.isArray(item['@type'])
              ? item['@type'].includes('LocalBusiness')
              : item['@type'] === 'LocalBusiness'
          )
        ),
        'LocalBusiness schema'
      )
    else
      assert.ok(
        schemas.some((schema) => schema['@type'] === 'BreadcrumbList'),
        `${route}: breadcrumb schema`
      )
  } else {
    assert.ok(metaRobots.includes('noindex'), `${route}: preview noindex`)
  }
  for (const match of html.matchAll(
    /(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g
  )) {
    const path = decodeURIComponent(match[1])
    if (path.startsWith('/_nuxt/')) continue
    const local = join(root, path)
    const exists = await stat(local).catch(() => null)
    assert.ok(exists, `${route}: local link/asset ${path} exists`)
  }
}
for (const route of [
  '/mayorista/iphone-mayorista/iphone-17-pro',
  '/mayorista/samsung-mayorista/galaxy-s25-ultra',
  '/mayorista/xiaomi-mayorista/xiaomi-redmi-note',
  '/mayorista/poco-mayorista/poco-x-series',
  '/mayorista/motorola-mayorista/moto-g-series',
  '/mayorista/accesorios-mayorista/funda-y-vidrio-templado',
  '/mayorista/macbook-mayorista/macbook-air',
  '/mayorista/ipad-mayorista/ipad',
  '/mayorista/apple-watch-mayorista/apple-watch-series',
  '/mayorista/airpods-mayorista/airpods',
  '/mayorista/jbl-mayorista/jbl-parlante',
  '/legales/privacidad',
  '/legales/terminos'
]) {
  const html = await readRoute(route)
  assert.match(
    html,
    /name="robots" content="[^"]*noindex/,
    `${route}: product/legal noindex`
  )
  assert.ok(
    !sitemap.includes(`${route}</loc>`),
    `${route}: excluded from sitemap`
  )
}
if (production)
  assert.doesNotMatch(robots, /^Disallow: \/\s*$/m, 'production crawl allowed')
else assert.match(robots, /Disallow: \//, 'preview blocked')
for (const asset of ['og-default.png', 'brand/icon-512.png']) {
  const png = await readFile(join(root, 'images', asset))
  assert.equal(png.subarray(1, 4).toString(), 'PNG')
  assert.equal(png.readUInt32BE(16), asset === 'og-default.png' ? 1200 : 512)
  assert.equal(png.readUInt32BE(20), asset === 'og-default.png' ? 630 : 512)
}
console.log(
  `SEO checks passed: ${routes.length} public pages, sample exclusions, internal links, PNG assets and ${production ? 'production' : 'preview'} indexing.`
)

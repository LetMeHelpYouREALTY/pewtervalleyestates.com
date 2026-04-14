/**
 * Lightweight production audit for schema/indexing regressions that can trigger
 * GSC Product snippet errors or indicate stale HTML is being served.
 *
 * Usage:
 *   node scripts/audit-structured-data.mjs
 *   SITE_URL=https://www.pewtervalleyestates.com node scripts/audit-structured-data.mjs
 */

const SITE_URL = (process.env.SITE_URL || "https://www.pewtervalleyestates.com").replace(/\/$/, "")

const FALLBACK_URLS = ["/", "/faq", "/investment-properties", "/sell-your-home", "/schedule", "/contact"]

const FORBIDDEN_PATTERNS = [
  { name: "Svelte placeholder title", regex: /%sveltekit\.title%/i },
  { name: "Svelte placeholder description", regex: /%sveltekit\.description%/i },
  {
    name: "Product schema type in page HTML",
    regex: /"@type"\s*:\s*"Product"/i,
  },
  { name: "Legacy bedroom card label", regex: /\b(?:3|4|5)\s+Bedroom Home\b/i },
]

function summarize(message, ok = true) {
  const icon = ok ? "PASS" : "FAIL"
  console.log(`[${icon}] ${message}`)
}

async function getSitemapUrls() {
  const sitemapUrl = `${SITE_URL}/sitemap.xml`
  const res = await fetch(sitemapUrl, { redirect: "follow" })
  if (!res.ok) {
    summarize(`Could not fetch sitemap (${res.status}); using fallback URL list`, false)
    return FALLBACK_URLS
  }

  const xml = await res.text()
  const matches = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g))
  const paths = matches
    .map((m) => {
      try {
        const parsed = new URL(m[1].trim())
        if (parsed.origin !== SITE_URL) return null
        return parsed.pathname + parsed.search
      } catch {
        return null
      }
    })
    .filter(Boolean)

  if (paths.length === 0) {
    summarize("Sitemap returned zero URLs; using fallback URL list", false)
    return FALLBACK_URLS
  }

  return Array.from(new Set(paths))
}

async function inspectUrl(pathname) {
  const url = `${SITE_URL}${pathname}`
  const res = await fetch(url, { redirect: "follow" })
  if (!res.ok) {
    summarize(`${url} returned HTTP ${res.status}`, false)
    return false
  }

  const html = await res.text()
  let healthy = true

  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
  if (!canonicalMatch) {
    summarize(`${url} missing rel=canonical`, false)
    healthy = false
  } else if (!canonicalMatch[1].startsWith(SITE_URL)) {
    summarize(`${url} canonical points off-host: ${canonicalMatch[1]}`, false)
    healthy = false
  }

  for (const pattern of FORBIDDEN_PATTERNS) {
    if (pattern.regex.test(html)) {
      summarize(`${url} contains forbidden pattern: ${pattern.name}`, false)
      healthy = false
    }
  }

  if (healthy) {
    summarize(`${url} passed structured-data/stale-html checks`)
  }

  return healthy
}

async function main() {
  const urls = await getSitemapUrls()
  console.log(`Auditing ${urls.length} URLs on ${SITE_URL}`)
  let failures = 0

  for (const pathname of urls) {
    // Keep deterministic output and avoid overloading the origin.
    // eslint-disable-next-line no-await-in-loop
    const ok = await inspectUrl(pathname)
    if (!ok) failures += 1
  }

  if (failures > 0) {
    console.error(`\nSchema audit failed on ${failures} URL(s).`)
    process.exit(1)
  }

  console.log("\nStructured-data audit passed.")
}

main().catch((error) => {
  console.error("Audit script failed:", error)
  process.exit(1)
})

import type { MetadataRoute } from "next"
import { MARKETING_PAGES } from "@/lib/marketing-pages"
import { SITE_CONFIG } from "@/lib/site-contact"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const lastModified = new Date()
  const highIntentPaths = new Set([
    "/faq",
    "/investment-properties",
    "/sell-your-home",
    "/homes-for-sale",
    "/listings",
    "/home-valuation",
    "/contact",
    "/schedule",
  ])

  const entries: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${base}/contact`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/schedule`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/buyer-seller-services`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/neighborhood-insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${base}/pewter-valley-estates/amenities`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  for (const key of Object.keys(MARKETING_PAGES)) {
    const path = `/${key}`
    const priority = highIntentPaths.has(path) ? 0.9 : 0.78
    entries.push({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: highIntentPaths.has(path) ? "weekly" : "monthly",
      priority,
    })
  }

  return entries
}

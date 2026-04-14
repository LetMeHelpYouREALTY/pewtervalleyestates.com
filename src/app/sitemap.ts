import type { MetadataRoute } from "next"
import { MARKETING_PAGES } from "@/lib/marketing-pages"
import { SITE_CONFIG } from "@/lib/site-contact"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url
  const lastModified = new Date()

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
  ]

  for (const key of Object.keys(MARKETING_PAGES)) {
    const path = `/${key}`
    const priority =
      path.includes("homes-for-sale") || path.includes("listings") ? 0.9 : 0.8
    entries.push({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "weekly",
      priority,
    })
  }

  return entries
}

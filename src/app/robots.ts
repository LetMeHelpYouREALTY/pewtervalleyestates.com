import type { MetadataRoute } from "next"
import { SITE_CONFIG } from "@/lib/site-contact"

export default function robots(): MetadataRoute.Robots {
  const canonicalHost = new URL(SITE_CONFIG.url).host
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "CCBot", disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
      { userAgent: "Claude-Web", disallow: "/" },
      { userAgent: "AhrefsBot", disallow: "/" },
      { userAgent: "MJ12bot", disallow: "/" },
      { userAgent: "DotBot", disallow: "/" },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
    host: canonicalHost,
  }
}

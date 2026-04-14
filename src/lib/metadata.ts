import type { Metadata } from "next"
import { SITE_CONFIG } from "./site-contact"

/** Canonical URL for a path like `/about` or `/` / `` for home. */
export function canonicalUrl(path = "/"): string {
  const base = SITE_CONFIG.url.replace(/\/$/, "")
  if (!path || path === "/") return base
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized.replace(/\/$/, "")}`
}

type PageMetadataInput = {
  /** Full `<title>` text (already includes branding when needed). */
  title: string
  description: string
  /** Path beginning with `/` (e.g. `/contact`). Use `/` for home. */
  path: string
  noindex?: boolean
  ogType?: "website" | "article"
  /** Relative path under `metadataBase`, e.g. `/og-image.jpg` */
  ogImagePath?: string
}

/**
 * Next.js App Router metadata aligned with `metadataBase` in root layout.
 * Uses `title.absolute` so titles from legacy `generateMetaTags` are not double-suffixed.
 */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const url = canonicalUrl(input.path || "/")
  const { title, description, noindex, ogType = "website", ogImagePath } = input

  const ogImage =
    ogImagePath != null && ogImagePath.length > 0
      ? [{ url: ogImagePath, width: 1200, height: 630, alt: title }]
      : undefined

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      type: ogType,
      siteName: SITE_CONFIG.businessName,
      ...(ogImage ? { images: ogImage } : {}),
    },
  }
}

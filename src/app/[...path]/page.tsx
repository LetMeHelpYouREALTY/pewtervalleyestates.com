import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { JsonLd } from "@/components/JsonLd"
import { PageViewTracker } from "@/components/PageViewTracker"
import { allMarketingPathSegments, getMarketingPage, segmentsToKey } from "@/lib/marketing-pages"
import { buildPageMetadata } from "@/lib/metadata"
import {
  generateBreadcrumbSchema,
  generateWebPageSchema,
} from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./marketing.module.css"

type Props = {
  params: Promise<{ path: string[] }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return allMarketingPathSegments().map((path) => ({ path }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { path } = await params
  const page = getMarketingPage(path)
  if (!page) {
    return { title: "Not found" }
  }
  const pathname = `/${segmentsToKey(path)}`
  return buildPageMetadata({
    title: page.title,
    description: page.description,
    path: pathname,
    ogType: "website",
    ogImagePath: "/og-image.jpg",
  })
}

export default async function MarketingCatchAllPage({ params }: Props) {
  const { path } = await params
  const page = getMarketingPage(path)
  if (!page) {
    notFound()
  }

  const pathname = `/${segmentsToKey(path)}`
  const url = `${SITE_CONFIG.url}${pathname}`
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: page.h1, url },
  ]

  const webPage = generateWebPageSchema(page.title, page.description, pathname)
  const crumbs = generateBreadcrumbSchema(breadcrumbs)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <PageViewTracker pageTitle={page.h1} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">{page.h1}</li>
          </ol>
        </nav>
        <article>
          <h1 className={styles.h1}>{page.h1}</h1>
          {page.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.p}>
              {paragraph}
            </p>
          ))}
          <p className={styles.cta}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`}>Call {SITE_CONFIG.phone}</a>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </article>
      </div>
    </div>
  )
}

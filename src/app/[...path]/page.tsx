import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { JsonLd } from "@/components/JsonLd"
import { PageViewTracker } from "@/components/PageViewTracker"
import { RelatedPages } from "@/components/RelatedPages"
import { allMarketingPathSegments, getMarketingPage, segmentsToKey } from "@/lib/marketing-pages"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
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
    ogImagePath: DEFAULT_OG_IMAGE_PATH,
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
  const faqs = [
    {
      question: `What should I know about ${page.h1}?`,
      answer: page.paragraphs[0],
    },
    {
      question: `Is this page specific to Silverado Ranch and nearby 89183 areas?`,
      answer:
        "Yes. This site focuses on Pewter Valley Estates within Silverado Ranch and nearby Las Vegas/Henderson market context, with locally relevant guidance instead of generic templates.",
    },
    {
      question: "How do I get personalized help for this topic?",
      answer: `Call ${SITE_CONFIG.phone} or use the contact page for a quick strategy conversation tailored to your goals.`,
    },
  ]
  const faqSchema = generateFAQSchema(faqs)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
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
          <h2 className={styles.h2}>Quick answer</h2>
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.p}>
              {paragraph}
            </p>
          ))}
          <section className={styles.faqSection} aria-labelledby="marketing-faqs">
            <h2 id="marketing-faqs" className={styles.h2}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>
          <p className={styles.cta}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`}>Call {SITE_CONFIG.phone}</a>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </article>
        <RelatedPages currentPage={pathname} />
      </div>
    </div>
  )
}

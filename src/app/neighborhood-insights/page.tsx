import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const PATH = "/neighborhood-insights"
const TITLE = `Neighborhood Insights | ${SITE_CONFIG.businessName}`
const DESCRIPTION = `Local neighborhood insights for Pewter Valley Estates in Silverado Ranch (89183): quick facts, commute context, and FAQs for buyers and sellers.`

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

const faqData = [
  {
    question: "Where is Pewter Valley Estates located?",
    answer:
      "Pewter Valley Estates is within Silverado Ranch in Southwest Las Vegas, centered around Pyle Avenue and S Rancho Destino Rd, zip code 89183.",
  },
  {
    question: "What home styles are common in this area?",
    answer:
      "The area includes ranch-style and single-story homes, with many resale options that vary by lot size, upgrades, and HOA context.",
  },
  {
    question: "How can I compare this neighborhood with nearby options?",
    answer:
      "Use this page as a quick baseline, then compare with Silverado Ranch and Southwest Las Vegas guides for commute, schools, and amenity differences.",
  },
]

const quickFacts = [
  ["Location", "Pyle Ave & S Rancho Destino Rd"],
  ["Zip Code", "89183"],
  ["Area", "Silverado Ranch / Southwest Las Vegas"],
  ["Typical Product", "Ranch-style and single-story homes"],
  ["Market Phase", "Resale"],
  ["Nearby Corridors", "I-15 and I-215 access"],
] as const

export default function NeighborhoodInsightsPage() {
  const webPage = generateWebPageSchema(TITLE, DESCRIPTION, PATH)
  const crumbs = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Neighborhood Insights", url: `${SITE_CONFIG.url}${PATH}` },
  ])
  const faqSchema = generateFAQSchema(faqData)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
      <PageViewTracker pageTitle="Neighborhood Insights" />

      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Neighborhood Insights</li>
          </ol>
        </nav>

        <article>
          <h1 className={styles.h1}>Pewter Valley Estates Neighborhood Insights (89183)</h1>
          <p className={styles.p}>
            This page consolidates local context so neighborhood details are easier to scan and
            compare with nearby options in Silverado Ranch and Southwest Las Vegas.
          </p>

          <NAPDisplay showGoogleReviewsLink showDirections variant="compact" />

          <section className={styles.quickFacts} aria-labelledby="quick-facts">
            <h2 id="quick-facts">Community Quick Facts</h2>
            <ul>
              {quickFacts.map(([label, value]) => (
                <li key={label}>
                  <strong>{label}:</strong> {value}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.faqSection} aria-labelledby="insights-faq">
            <h2 id="insights-faq">Frequently Asked Questions</h2>
            {faqData.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <section className={styles.linksSection} aria-label="Related local pages">
            <h2>Compare Nearby Guides</h2>
            <ul>
              <li>
                <Link href="/neighborhood">Pewter Valley Estates overview</Link>
              </li>
              <li>
                <Link href="/silverado-ranch">Silverado Ranch area guide</Link>
              </li>
              <li>
                <Link href="/southwest-las-vegas">Southwest Las Vegas context</Link>
              </li>
              <li>
                <Link href="/neighborhood-guide">Full neighborhood guide</Link>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  )
}

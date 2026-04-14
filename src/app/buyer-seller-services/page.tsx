import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { PageViewTracker } from "@/components/PageViewTracker"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const PATH = "/buyer-seller-services"
const TITLE = `Buyer & Seller Services | ${SITE_CONFIG.businessName}`
const DESCRIPTION = `Dedicated buyer and seller service guide for Pewter Valley Estates and Silverado Ranch (89183): search strategy, valuation, pricing, and negotiation with ${SITE_CONFIG.name}.`

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

const faqData = [
  {
    question: "What services are included for buyers in Silverado Ranch?",
    answer:
      "Buyer services include MLS-backed search setup, tour planning, offer strategy, negotiation, due diligence support, and closing coordination tailored to Silverado Ranch and nearby Las Vegas/Henderson neighborhoods.",
  },
  {
    question: "How do seller services differ for Pewter Valley Estates homes?",
    answer:
      "Seller services focus on local comparable analysis, pricing strategy, presentation guidance, and a targeted online marketing plan built for buyers searching in zip code 89183 and surrounding areas.",
  },
  {
    question: "How do I start as a buyer or seller?",
    answer: `Call ${SITE_CONFIG.phone} or use the contact page to schedule a quick strategy call so we can align your timeline, goals, and next steps.`,
  },
]

export default function BuyerSellerServicesPage() {
  const webPage = generateWebPageSchema(TITLE, DESCRIPTION, PATH)
  const crumbs = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Buyer & Seller Services", url: `${SITE_CONFIG.url}${PATH}` },
  ])
  const faqSchema = generateFAQSchema(faqData)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqSchema} />
      <PageViewTracker pageTitle="Buyer & Seller Services" />

      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Buyer &amp; Seller Services</li>
          </ol>
        </nav>

        <article>
          <h1 className={styles.h1}>Buyer &amp; Seller Services in Silverado Ranch (89183)</h1>
          <p className={styles.p}>
            This page centralizes service details so buyer and seller information is easier to scan
            and act on. We focus on practical steps, local context, and conversion-focused next
            actions.
          </p>

          <section className={styles.grid} aria-label="Service tracks">
            <div className={styles.card}>
              <h2>For Home Buyers</h2>
              <ul>
                <li>MLS-backed search setup and alerts</li>
                <li>Tour planning by commute, schools, and budget fit</li>
                <li>Offer strategy and negotiation support</li>
                <li>Inspection and closing timeline guidance</li>
              </ul>
              <Link href="/buy-a-home" className={styles.ctaLink}>
                Open Buyer Guide
              </Link>
            </div>
            <div className={styles.card}>
              <h2>For Home Sellers</h2>
              <ul>
                <li>Local comparable analysis and pricing plan</li>
                <li>Pre-listing preparation checklist</li>
                <li>Marketing strategy for 89183 buyer intent</li>
                <li>Offer review and negotiation framework</li>
              </ul>
              <Link href="/sell-your-home" className={styles.ctaLink}>
                Open Seller Guide
              </Link>
            </div>
          </section>

          <section className={styles.faqSection} aria-labelledby="services-faq">
            <h2 id="services-faq">Frequently Asked Questions</h2>
            {faqData.map((faq) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </section>

          <p className={styles.inlineCta}>
            <a href={`tel:${SITE_CONFIG.phoneTel}`}>Call {SITE_CONFIG.phone}</a>
            {" · "}
            <Link href="/contact">Contact</Link>
          </p>
        </article>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { CalendlyInlineWidget, CalendlyPopupLink } from "@/components/CalendlyWidgets"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./contact.module.css"

const PATH = "/contact"
const CONTACT_TITLE = `Contact Dr. Jan Duffy | ${SITE_CONFIG.businessName}`
const CONTACT_DESCRIPTION = `Contact Dr. Jan Duffy for Silverado Ranch, Henderson, and Las Vegas Valley real estate—including Pewter Valley Estates. Call ${SITE_CONFIG.phone} or send a message.`

export const metadata: Metadata = buildPageMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: PATH,
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

const contactFaqs = [
  {
    question: "What are Dr. Jan Duffy's business hours?",
    answer:
      "Dr. Jan Duffy is available Monday-Friday 9:00 AM - 6:00 PM and Saturday 10:00 AM - 4:00 PM. For urgent matters, you can call or text at any time.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Dr. Jan Duffy typically responds to all inquiries within 24 hours. For urgent matters, calling or texting directly is the fastest way to reach her.",
  },
  {
    question: "What should I prepare before the consultation?",
    answer:
      "Bring your timeline, target neighborhoods, budget or price expectations, and your top priorities so the consultation can focus on practical next steps.",
  },
]

export default function ContactPage() {
  const title = "Contact Dr. Jan Duffy"
  const URL = `${SITE_CONFIG.url}${PATH}`

  const webPage = generateWebPageSchema(title, CONTACT_DESCRIPTION, PATH)
  const crumbs = generateBreadcrumbSchema([
    { name: "Home", url: SITE_CONFIG.url },
    { name: title, url: URL },
  ])
  const faqLd = generateFAQSchema(contactFaqs)

  return (
    <div className={styles.wrap}>
      <JsonLd data={webPage} />
      <JsonLd data={crumbs} />
      <JsonLd data={faqLd} />
      <PageViewTracker pageTitle="Contact" />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-current="page">Contact</li>
          </ol>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.h1}>Contact Dr. Jan Duffy</h1>
          <p className={styles.lead}>
            Call <a href={`tel:${SITE_CONFIG.phoneTel}`}>{SITE_CONFIG.phone}</a>, email{" "}
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>, or book a time below.
          </p>
          <p className={styles.calendlyCta}>
            Prefer a scheduled call?{" "}
            <CalendlyPopupLink
              className={styles.calendlyLink}
              label="Book a 15-minute consultation"
            />
          </p>
        </header>

        <div className={styles.grid}>
          <section className={styles.card} aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className={styles.h2}>
              Schedule a consultation
            </h2>
            <CalendlyInlineWidget title="Book your 15-minute call" />
            <p className={styles.calendlyCta}>
              Looking for neighborhood details first?{" "}
              <Link href="/neighborhood-insights" className={styles.calendlyLink}>
                Open neighborhood insights
              </Link>
              {" · "}
              <Link href="/google-reviews" className={styles.calendlyLink}>
                Read client reviews
              </Link>
            </p>
          </section>

          <aside className={styles.aside}>
            <NAPDisplay showGoogleReviewsLink showDirections />
          </aside>
        </div>
      </div>
    </div>
  )
}

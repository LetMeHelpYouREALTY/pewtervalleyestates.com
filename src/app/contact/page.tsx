import type { Metadata } from "next"
import Link from "next/link"
import { ContactPageForm } from "@/components/ContactPageForm"
import { GoogleMap } from "@/components/GoogleMap"
import { GoogleReviews } from "@/components/GoogleReviews"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { buildPageMetadata } from "@/lib/metadata"
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
  ogImagePath: "/og-image.jpg",
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
    question: "What information should I include in my contact form?",
    answer:
      "Please include your name, contact information, preferred contact method, property interest (buying, selling, investing), and any specific questions or requirements you have.",
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
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>, or send a message below.
          </p>
        </header>

        <div className={styles.grid}>
          <section className={styles.card} aria-labelledby="contact-form-heading">
            <h2 id="contact-form-heading" className={styles.h2}>
              Send a message
            </h2>
            <ContactPageForm />
          </section>

          <aside className={styles.aside}>
            <NAPDisplay showGoogleReviewsLink showDirections />
          </aside>
        </div>

        <section className={styles.section} aria-labelledby="reviews-heading">
          <h2 id="reviews-heading" className={styles.h2}>
            Client feedback
          </h2>
          <GoogleReviews />
        </section>

        <section className={styles.mapSection} aria-labelledby="map-heading">
          <h2 id="map-heading" className={styles.srOnly}>
            Map &amp; directions
          </h2>
          <GoogleMap />
        </section>
      </div>
    </div>
  )
}

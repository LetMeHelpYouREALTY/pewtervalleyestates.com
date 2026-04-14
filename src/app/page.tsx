import type { Metadata } from "next"
import Link from "next/link"
import { Pathways } from "@/app/_components/Pathways"
import { HeroSection } from "@/components/HeroSection"
import { JsonLd } from "@/components/JsonLd"
import { NAPDisplay } from "@/components/NAPDisplay"
import { PageViewTracker } from "@/components/PageViewTracker"
import { RealScoutListings } from "@/components/RealScoutListings"
import { RelatedPages } from "@/components/RelatedPages"
import { StickyContactButton } from "@/components/StickyContactButton"
import { buildPageMetadata, DEFAULT_OG_IMAGE_PATH } from "@/lib/metadata"
import { generateBreadcrumbSchema, generateFAQSchema, generateWebPageSchema } from "@/lib/schema"
import { SITE_CONFIG } from "@/lib/site-contact"
import styles from "./page.module.css"

const HOME_TITLE = `Pewter Valley Estates & Silverado Ranch Real Estate | ${SITE_CONFIG.name}`
const HOME_DESCRIPTION = `Homes for sale and expert representation in Silverado Ranch and Pewter Valley Estates (89183), Henderson & Clark County. MLS-backed search, pricing, and neighborhood context with ${SITE_CONFIG.name}. Call ${SITE_CONFIG.phone}.`

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  ogImagePath: DEFAULT_OG_IMAGE_PATH,
})

const faqData = [
  {
    question: "What is Pewter Valley Estates?",
    answer: `Pewter Valley Estates is a community within Silverado Ranch—a sold-out Richmond American master-planned pocket in Southwest Las Vegas (zip code 89183), at Pyle Avenue and S Rancho Destino Rd. It features ranch-style homes from 1,950 to 2,240 square feet with 3-4 bedrooms. The community is now in the resale market phase.`,
  },
  {
    question: "Who is Dr. Jan Duffy?",
    answer:
      "Dr. Jan Duffy is a specialized real estate agent focused on Silverado Ranch and Pewter Valley Estates (a community within Silverado Ranch), plus Southwest Las Vegas. With deep local market knowledge and expertise in resale transactions, market analysis, and investment properties, she helps buyers, sellers, and investors navigate neighborhood-specific dynamics.",
  },
  {
    question: "What types of homes are available in Pewter Valley Estates?",
    answer: `Pewter Valley Estates features ranch-style, single-story homes built by Richmond American Homes. Homes range from 1,950 to 2,240 square feet with 3-4 bedrooms. All homes feature modern floor plans, energy-efficient designs, and are situated on well-maintained lots in a quiet, family-friendly environment.`,
  },
  {
    question: "Where is Pewter Valley Estates located?",
    answer: `Pewter Valley Estates sits within Silverado Ranch in Southwest Las Vegas—Pyle Avenue and S Rancho Destino Rd, zip code 89183. The community offers easy access to I-15 and Las Vegas Boulevard, while maintaining a peaceful, rural-urban balance. Nearby amenities include Somerset Hills Park, Goett Family Park, Jimmy Pettyjohn Jr. Park, and the Southern Highlands Golf Club.`,
  },
  {
    question: "How can I buy or sell a home in Pewter Valley Estates?",
    answer: `Contact Dr. Jan Duffy at ${SITE_CONFIG.phone} for expert representation in buying or selling Pewter Valley Estates properties. Dr. Jan Duffy provides comprehensive services including market analysis, home valuations, buyer representation, seller marketing, and investment property consultation.`,
  },
  {
    question: "Does Dr. Jan Duffy serve Silverado Ranch and Henderson?",
    answer: `Yes. Silverado Ranch spans parts of Henderson and southeast Clark County (including 89123 and 89183). Pewter Valley Estates is a community within Silverado Ranch. Visit the Silverado Ranch page on this site for area context, then call ${SITE_CONFIG.phone} to align MLS search and tours to your commute, schools, and lifestyle priorities.`,
  },
]

export default function HomePage() {
  const webPage = generateWebPageSchema(HOME_TITLE, HOME_DESCRIPTION, "")
  const breadcrumbs = generateBreadcrumbSchema([{ name: "Home", url: SITE_CONFIG.url }])
  const faqSchema = generateFAQSchema(faqData)

  return (
    <div className={styles.homepage}>
      <JsonLd data={webPage} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqSchema} />
      <PageViewTracker pageTitle="Homepage" />

      <HeroSection />

      <Pathways />

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <NAPDisplay showGoogleReviewsLink showDirections />
          <h2 className={styles.sectionTitle}>Start with the page that matches your goal</h2>
          <p className={styles.listingsSubtitle}>
            We split long content into focused pages so each experience is shorter, clearer, and
            easier to act on.
          </p>
          <div className={styles.listingsCardsGrid}>
            <div className={styles.listingsCard}>
              <h3>Buyer &amp; Seller Services</h3>
              <p>
                Scheduling, strategy, pricing guidance, and social proof now live on a dedicated
                services page.
              </p>
              <Link
                href="/buyer-seller-services"
                className={`${styles.cardButton} ${styles.cardButtonPrimary}`}
              >
                Open Services
              </Link>
            </div>
            <div className={styles.listingsCard}>
              <h3>Neighborhood Insights</h3>
              <p>
                Community quick facts, map context, local FAQs, and area comparison links are now in
                one place.
              </p>
              <Link
                href="/neighborhood-insights"
                className={`${styles.cardButton} ${styles.cardButtonSecondary}`}
              >
                Open Neighborhood Insights
              </Link>
            </div>
            <div className={styles.listingsCard}>
              <h3>Contact &amp; Calendar</h3>
              <p>
                Use the contact page for direct scheduling, map directions, and additional review
                context.
              </p>
              <Link href="/contact" className={`${styles.cardButton} ${styles.cardButtonPrimary}`}>
                Open Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RealScoutListings />

      <RelatedPages currentPage="/" />
      <StickyContactButton />
    </div>
  )
}
